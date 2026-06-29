#!/usr/bin/env python3
"""
鎶曡祫鍐崇瓥闈㈡澘 v5.0 澧為噺鏇存柊鑴氭湰
鐢ㄦ硶: python update_dashboard_v5.py <鐩樺墠棰勬祴MD璺緞> [--dry-run]

瑙ｆ瀽鐩樺墠棰勬祴 MD 鈫?鎻愬彇缁撴瀯鍖栨暟鎹?鈫?澧為噺鏇存柊 v5.0 HTML 浠〃鐩樸€?鏀寔浜ゆ槗鏃ョ洏鍓?鐩樺悗銆佸懆鏈洏鍓嶅噯澶囷紙鍛ㄦ棩鏅氬彂甯冨懆涓€棰勬祴锛夈€?"""
import re
import sys
import os
from datetime import datetime
from pathlib import Path

# ============================================================
# 閰嶇疆
# ============================================================
OUTPUT_DIR = Path(__file__).parent
HTML_PATH = OUTPUT_DIR / "鎶曡祫鍐崇瓥闈㈡澘_v5.0.html"

def get_trading_status(date_str=""):
    """鍒ゆ柇褰撳墠鏄惁涓轰氦鏄撴棩锛岃繑鍥炵姸鎬佹爣绛惧拰 CSS class"""
    now = datetime.now()
    weekday = now.weekday()  # 0=Mon ... 6=Sun
    hour = now.hour

    if weekday >= 5:
        # 鍛ㄦ湯
        if weekday == 6 and date_str:
            return 'ts-weekend', f'鍛ㄦ棩鐩樺墠鍑嗗 路 {date_str}'
        return 'ts-weekend', f'鍛ㄦ湯 路 闈炰氦鏄撴棩'

    # 宸ヤ綔鏃?    if hour < 9:
        return 'ts-trading', '鐩樺墠 路 绛夊緟寮€鐩?
    elif hour < 15:
        return 'ts-trading', '鐩樹腑浜ゆ槗'
    elif hour < 17:
        return 'ts-trading', '鐩樺悗鏁寸悊涓?
    else:
        return 'ts-closed', '宸叉敹鐩?


def parse_md(filepath: str) -> dict:
    """浠庣洏鍓嶉娴?MD 鎻愬彇缁撴瀯鍖栨暟鎹?""
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    data = {}

    # --- 鏃ユ湡 ---
    m = re.search(r'鐩樺墠棰勬祴\s*路\s*(\d{4}-\d{2}-\d{2})', text)
    data["date"] = m.group(1) if m else ""
    m = re.search(r'鐢熸垚鏃堕棿锛?\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})', text)
    data["gen_time"] = m.group(1) if m else ""

    # --- 浜斿ぇ鎸囨暟 ---
    idx_pattern = r'\|\s*(涓婅瘉|娣辨垚鎸噟鍒涗笟鏉挎寚|绉戝垱50|娌繁300)\s*\|\s*([\d,]+(?:\.\d+)?)\s*\|\s*([+-][\d.]+%)\s*\|'
    indices = {}
    for m in re.finditer(idx_pattern, text):
        name_map = {"涓婅瘉": "涓婅瘉鎸囨暟", "娣辨垚鎸?: "娣辫瘉鎴愭寚", "鍒涗笟鏉挎寚": "鍒涗笟鏉挎寚", "绉戝垱50": "绉戝垱50", "娌繁300": "娌繁300"}
        name = name_map.get(m.group(1), m.group(1))
        indices[name] = {"value": m.group(2).replace(",", ""), "change": m.group(3)}
    data["indices"] = indices

    # --- 鎴愪氦棰?---
    m = re.search(r'娌繁涓ゅ競鍚堣鎴愪氦棰漑锛?*\s]*\|?\s*\*?\*?([\d,]+)\s*浜?, text)
    if not m:
        m = re.search(r'鎴愪氦棰?*?([\d,]+)\s*浜?*?缂╅噺(\d+)浜?, text)
    data["volume"] = m.group(1).replace(",", "") if m else ""
    data["vol_delta"] = m.group(2) if m and m.lastindex and m.lastindex >= 2 else ""
    if not data["vol_delta"]:
        m2 = re.search(r'缂╅噺(\d+)浜?, text)
        data["vol_delta"] = m2.group(1) if m2 else ""

    # --- 娑ㄨ穼姣?---
    m = re.search(r'涓婃定浠?\d+)鍙?, text)
    up_count = m.group(1) if m else ""
    m = re.search(r'涓嬭穼(\d+)鍙?, text)
    down_count = m.group(1) if m else ""
    if up_count and down_count:
        data["updown"] = f"{up_count} : {down_count}"
        try:
            ratio = int(down_count) / int(up_count)
            data["updown_ratio"] = f"1:{ratio:.1f}"
        except:
            data["updown_ratio"] = ""
    else:
        data["updown"] = ""
        data["updown_ratio"] = ""

    # --- 鍖楀悜璧勯噾 ---
    m = re.search(r'(?:鍖楀悜.*?鍑€娴佸嚭|鍖楀悜璧勯噾.*?鍑€娴佸嚭)\s*[~鈮圿?\s*(\d+)\s*浜縗+?', text)
    if not m:
        m = re.search(r'鍖楀悜.*?[-\u2212](\d+\.?\d*)\s*浜?, text)
    data["northbound"] = f"-{m.group(1)}浜?" if m else ""
    m2 = re.search(r'浜ゆ槗鍨嬪垱.*?鏂伴珮', text)
    data["northbound_note"] = "鍒?鏈堟柊楂? if m2 else ""

    # --- L0.5 鑴嗗急鎬?---
    frag_count = len(re.findall(r'\|[^|]*馃敶[^|]*\|',
        text[text.find("甯傚満鑴嗗急鎬ф鏌?):text.find("L1 路 瀹忚闂幆")] if "甯傚満鑴嗗急鎬ф鏌? in text else ""))
    data["fragility_count"] = frag_count
    data["fragility_all_red"] = frag_count >= 3

    # --- 鍥涙儏鏅?---
    scens = []
    for m in re.finditer(
        r'[鈶犫憽鈶\s*(\S+?)\s*(?:锛?*?锛??\s*\|\s*\*?\*?(\d+)%\*?\*?\s*\|\s*([\d,]+)\s*[-鈥搤]\s*([\d,]+)\s*\|', text):
        label = m.group(1).strip()
        prob = int(m.group(2))
        low = m.group(3).replace(",", "")
        high = m.group(4).replace(",", "")
        scens.append({"label": label, "prob": prob, "low": low, "high": high})

    if len(scens) == 3:
        bull_prob = round(scens[0]["prob"] * 0.75)
        bear_prob = round(scens[1]["prob"] * 0.7)
        tail_prob = max(10, round(scens[2]["prob"] * 0.6))
        base_prob = 100 - bull_prob - bear_prob - tail_prob
        if base_prob < 5:
            base_prob = 5
            bear_prob -= (sum([bull_prob, base_prob, bear_prob, tail_prob]) - 100)

        data["scenarios"] = {
            "bull": {"prob": bull_prob, "label": "浣庡紑淇",
                     "range": f"{int(scens[0]['low'])+40} ~ {int(scens[0]['high'])+40}"},
            "base": {"prob": base_prob, "label": "鎺㈠簳闇囪崱",
                     "range": f"{scens[0]['low']} ~ {scens[0]['high']}"},
            "bear": {"prob": bear_prob, "label": scens[1]["label"],
                     "range": f"{scens[1]['low']} ~ {scens[1]['high']}"},
            "tail": {"prob": tail_prob, "label": "榛戝ぉ楣吢峰鏉€澶?,
                     "range": f"< {scens[2]['low']}"}
        }

    # --- 缃俊搴?---
    m = re.search(r'(?:澶х洏鏂瑰悜|鎬讳綋).*?[\|\s]*(\d+)%',
                  text[text.find("鎬荤粨绠€琛?):] if "鎬荤粨绠€琛? in text else text)
    data["confidence"] = m.group(1) if m else ""
    m2 = re.search(r'缃俊搴?*?(\d+)%', text)
    if m2:
        all_confs = re.findall(r'缃俊搴?*?(\d+)%', text)
        if all_confs:
            data["confidence"] = all_confs[-1]

    # --- 浠撲綅寤鸿 ---
    m = re.search(r'寤鸿浠撲綅[锛?]\s*\*?\*?(\d+[-~]\d+)\s*鎴怽*?\*?', text)
    if not m:
        m = re.search(r'寤鸿浠撲綅.*?(\d+[-~]\d+)\s*鎴?, text)
    data["position"] = m.group(1) if m else ""

    # --- 鎿嶄綔鎸囦护 ---
    m = re.search(r'琛屽姩鎸囦护[锛?]\s*(.+?)(?:\n|$)', text)
    data["action"] = m.group(1).strip() if m else ""

    # --- 涓偂鏁版嵁 ---
    stocks = []
    stock_table = re.search(r'\|\s*浠ｇ爜\s*\|.*?娑ㄨ穼骞?*?\|.*?\n\|[-\s|:]+\n((?:\|.*\n)+)', text)
    if stock_table:
        for line in stock_table.group(1).strip().split("\n"):
            cells = [c.strip() for c in line.split("|") if c.strip()]
            if len(cells) >= 4:
                try:
                    stocks.append({
                        "code": cells[0], "name": cells[1],
                        "close": cells[2], "change": cells[3],
                        "volume": cells[4] if len(cells) > 4 else ""
                    })
                except:
                    pass
    data["stocks"] = stocks

    # --- 琛屼笟琛ㄧ幇 ---
    sectors = []
    sec_section = text[text.find("鏉垮潡琛ㄧ幇閫熻"):text.find("L4 路 涓偂")] if "鏉垮潡琛ㄧ幇閫熻" in text else ""
    for m in re.finditer(
        r'\|\s*(鍏夊埢鏈簗鍗婂浣撹澶噟瀛樺偍鑺墖|AI鍏夋ā鍧梶鏂拌兘婧愯溅|AI鑺墖|鍗婂浣撶鐗噟鍏夋ā鍧梉^|]*|鏂拌兘婧怺^|]*|姹借溅[^|]*)\s*\|\s*([鉁咅煍粹灃])\s*(.+?)\s*\|\s*(.+?)\s*\|',
        sec_section):
        sectors.append({
            "name": m.group(1), "flag": m.group(2),
            "trend": m.group(3).strip(), "detail": m.group(4).strip()
        })
    data["sectors"] = sectors

    # --- Lollapalooza ---
    lolla_items = []
    lolla_section = text[text.find("Lollapalooza"):]
    for m in re.finditer(r'\|\s*(\d+)\.\s*(.+?)\s*\|\s*([鉁咅煍答煙)\s*\|\s*(.+?)\s*\|', lolla_section):
        lolla_items.append({
            "num": m.group(1), "desc": m.group(2).strip(),
            "status": m.group(3), "note": m.group(4).strip()
        })
    data["lollapalooza"] = lolla_items

    # --- 涓夋潵婧愪氦鍙夐獙璇?---
    cv_section = text[text.find("浜ゅ弶楠岃瘉鍒ゅ畾"):]
    cv_sources = []
    for m in re.finditer(r'\|\s*(鈶?+?|鈶?+?|鈶?+?)\s*\|\s*(.+?)\s*\|\s*(\d+)\s*\|', cv_section):
        cv_sources.append({"name": m.group(1).strip(), "direction": m.group(2).strip(), "weight": m.group(3)})
    data["cross_validation"] = cv_sources

    # --- Q6 ---
    q6_items = []
    q6_section = text[text.find("Q6"):text.find("L1 路 瀹忚")]
    for m in re.finditer(r'(\d+)\.\s*\*?\*?(.+?)\*?\*?[锛?]\s*(.+?)(?=\n\d+\.|\n\n|\n鈿?', q6_section):
        q6_items.append({"num": m.group(1), "title": m.group(2).strip(), "detail": m.group(3).strip()})
    data["q6"] = q6_items

    return data


def render_html(data: dict) -> str:
    """澧為噺鏇挎崲 v5.0 HTML 涓殑鏁版嵁瀛楁锛岃繑鍥炴柊 HTML 瀛楃涓层€?""
    if not HTML_PATH.exists():
        print(f"[ERROR] 浠〃鐩樻枃浠朵笉瀛樺湪: {HTML_PATH}")
        sys.exit(1)

    with open(HTML_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    # --- 0. 浜ゆ槗鏃ョ姸鎬?---
    if data.get("date"):
        try:
            dt = datetime.strptime(data["date"], "%Y-%m-%d")
            weekdays = ["鍛ㄤ竴","鍛ㄤ簩","鍛ㄤ笁","鍛ㄥ洓","鍛ㄤ簲","鍛ㄥ叚","鍛ㄦ棩"]
            date_display = f"{dt.month}/{dt.day} {weekdays[dt.weekday()]}"
        except:
            date_display = data["date"]

        ts_class, ts_label = get_trading_status(date_display)
        # 鏃ユ湡 span
        html = re.sub(
            r'<span>[0-9]+/[0-9]+\s+鍛╗涓€浜屼笁鍥涗簲鍏棩].*?</span>',
            f'<span>{date_display} 鐩樺墠</span>',
            html
        )

    # --- 1. 鍖楀悜璧勯噾 ---
    if data.get("northbound"):
        nb = data["northbound"]
        nb_note = data.get("northbound_note", "")
        note_html = f'<span class="sm-sub" style="color:var(--red)">{nb_note}</span>' if nb_note else ""
        html = re.sub(
            r'(<span class="sml">鍖楀悜璧勯噾</span>\s*<span class="smv")([^>]*>)(-?\d+浜縗+?)(.*?)(</span>)',
            rf'\g<1>\g<2>{nb} {note_html}\g<5>',
            html, count=1, flags=re.DOTALL
        )

    # --- 2. 娑ㄨ穼姣?---
    if data.get("updown"):
        ud = data["updown"]
        udr = data.get("updown_ratio", "")
        html = re.sub(
            r'(<span class="sml">娑ㄨ穼姣?/span>\s*<span class="smv")([^>]*>)(\d+\s*:\s*\d+)(.*?)(</span>)',
            rf'\g<1>\g<2>{ud} <span class="sm-sub">{udr}</span>\g<5>',
            html, count=1, flags=re.DOTALL
        )

    # --- 3. 鎴愪氦棰?---
    if data.get("volume"):
        vol = data["volume"]
        vd = data.get("vol_delta", "")
        vol_display = f"{int(vol)/10000:.2f}涓囦嚎" if len(vol) >= 5 else f"{vol}浜?
        vd_str = f'<span class="sm-sub">缂╅噺{vd}浜?/span>' if vd else ""
        html = re.sub(
            r'(<span class="sml">鎴愪氦棰?/span>\s*<span class="smv">)([\d.]+涓囦嚎)(.*?)(</span>)',
            rf'\g<1>{vol_display} {vd_str}\g<4>',
            html, count=1, flags=re.DOTALL
        )

    # --- 4. 缃俊搴?---
    if data.get("confidence"):
        conf = data["confidence"]
        # 鏇存柊缃俊搴︽爣璁颁綅缃紙cmk锛屽湪 cbar-wrap 鍐咃級
        html = re.sub(
            r'left:\d+\.?\d*%;">鈻?褰撳墠 \d+%</div>',
            f'left:{max(15, min(70, int(conf)*0.9))}%;">鈻?褰撳墠 {conf}%</div>',
            html
        )
        # 鏇存柊鍏朵粬缃俊搴﹀紩鐢?        html = re.sub(r'缃俊搴︼細<strong>\d+%</strong>', f'缃俊搴︼細<strong>{conf}%</strong>', html)
        html = re.sub(r'缃俊搴?\d+)%', rf'缃俊搴conf}%', html)

    # --- 5. 浠撲綅 ---
    if data.get("position"):
        pos = data["position"].replace("-", "~")
        html = re.sub(
            r'(<div class="prn">)\d+[~\-]\d+',
            rf'\g<1>{pos}',
            html
        )

    # --- 6. 鍥涙儏鏅鐜?---
    sc = data.get("scenarios", {})
    if sc:
        for key, label in [("bull", "浣庡紑淇"), ("base", "鎺㈠簳闇囪崱"), ("bear", "缁х画涓嬫帰"), ("tail", "榛戝ぉ楣?)]:
            if key in sc:
                # 鍖归厤 s4p 姒傜巼
                html = re.sub(
                    rf'(class="s4p">)\d+%(</div><div class="s4l">{label}</div>)',
                    rf'\g<1>{sc[key]["prob"]}%\g<2>',
                    html
                )

    # --- 7. 鑴嗗急鎬?---
    if data.get("fragility_all_red"):
        html = re.sub(
            r'<span class="tag tag-r">.*?</span>',
            f'<span class="tag tag-r">鑴嗗急鎬т笁椤瑰叏馃敶</span>',
            html, count=1
        )

    # --- 8. Footer 鏃堕棿鎴?---
    now_ts = datetime.now().strftime("%Y-%m-%d %H:%M CST")
    html = re.sub(
        r'\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}\s+CST',
        now_ts,
        html
    )

    return html


def main():
    if len(sys.argv) < 2:
        print("鐢ㄦ硶: python update_dashboard_v5.py <鐩樺墠棰勬祴MD璺緞> [--dry-run]")
        sys.exit(1)

    md_path = sys.argv[1]
    dry_run = "--dry-run" in sys.argv

    if not os.path.exists(md_path):
        print(f"[ERROR] 鏂囦欢涓嶅瓨鍦? {md_path}")
        sys.exit(1)

    print(f"[INFO] 瑙ｆ瀽 MD: {md_path}")
    data = parse_md(md_path)

    print("\n========== 鎻愬彇鏁版嵁鎽樿 ==========")
    print(f"鏃ユ湡: {data.get('date')} | 鐢熸垚鏃堕棿: {data.get('gen_time')}")
    print(f"鍖楀悜: {data.get('northbound')} {data.get('northbound_note')}")
    print(f"娑ㄨ穼姣? {data.get('updown')} ({data.get('updown_ratio')})")
    print(f"鎴愪氦棰? {data.get('volume')} 缂╅噺{data.get('vol_delta')}")
    print(f"鑴嗗急鎬? {data.get('fragility_count')}/3 | 缃俊搴? {data.get('confidence')}% | 浠撲綅: {data.get('position')}鎴?)
    if data.get("scenarios"):
        s = data["scenarios"]
        print(f"鍥涙儏鏅? 浣庡紑淇{s['bull']['prob']}% 鎺㈠簳闇囪崱{s['base']['prob']}% "
              f"缁х画涓嬫帰{s['bear']['prob']}% 榛戝ぉ楣厈s['tail']['prob']}%")
    print(f"涓偂: {len(data.get('stocks', []))}鍙?| 琛屼笟: {len(data.get('sectors', []))}鏉垮潡")
    print("==================================\n")

    if dry_run:
        print("[DRY RUN] 鏈疄闄呬慨鏀规枃浠躲€?)
        return

    print("[INFO] 娓叉煋 HTML...")
    new_html = render_html(data)

    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(new_html)

    print(f"[OK] 浠〃鐩樺凡鏇存柊: {HTML_PATH}")
    print(f"     鏂囦欢澶у皬: {len(new_html)} 瀛楄妭")


if __name__ == "__main__":
    main()


