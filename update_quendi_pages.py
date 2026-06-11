#!/usr/bin/env python3
"""
Update all Quendi (Elf) character pages with the manwe-sulimo.html template
structure. Preserves character-specific <main> content while applying the
standardized design plus header.js / footer.js integration.
Same pattern as update_maiar_pages.py.
"""

import os
import re
from pathlib import Path

TEMPLATE_FILE = "public/characters/manwe-sulimo.html"
QUENDI_FOLDER = "public/characters/Elf/Quendi"

CHARACTER_MAP = {
    "ficha_de_personaje_aegnor_silk":            {"es": "Aegnor",              "en": "Aegnor"},
    "ficha_de_personaje_amrod_y_amras_silk":     {"es": "Amrod y Amras",       "en": "Amrod and Amras"},
    "ficha_de_personaje_angrod_silk":            {"es": "Angrod",              "en": "Angrod"},
    "ficha_de_personaje_aredhel_ar_feiniel_silk":{"es": "Aredhel Ar-Feiniel",  "en": "Aredhel Ar-Feiniel"},
    "ficha_de_personaje_caranthir_silk":         {"es": "Caranthir",           "en": "Caranthir"},
    "ficha_de_personaje_celegorm_silk":          {"es": "Celegorm",            "en": "Celegorm"},
    "ficha_de_personaje_curufin_silk":           {"es": "Curufin",             "en": "Curufin"},
    "ficha_de_personaje_finarfin_silk":          {"es": "Finarfin",            "en": "Finarfin"},
    "ficha_de_personaje_finduilas_silk":         {"es": "Finduilas",           "en": "Finduilas"},
    "ficha_de_personaje_fingon_el_valiente_silk":{"es": "Fingon el Valiente",  "en": "Fingon the Valiant"},
    "ficha_de_personaje_finrod_felagund_silk":   {"es": "Finrod Felagund",     "en": "Finrod Felagund"},
    "ficha_de_personaje_finw_silk":              {"es": "Finwë",               "en": "Finwë"},
    "ficha_de_personaje_galadriel_silk":         {"es": "Galadriel",           "en": "Galadriel"},
    "ficha_de_personaje_idril_celebrindal_silk": {"es": "Idril Celebrindal",   "en": "Idril Celebrindal"},
    "ficha_de_personaje_m_riel_serind_silk":     {"es": "Míriel Serindë",      "en": "Míriel Serindë"},
    "ficha_de_personaje_maedhros_silk":          {"es": "Maedhros",            "en": "Maedhros"},
    "ficha_de_personaje_maglor_silk":            {"es": "Maglor",              "en": "Maglor"},
    "ficha_de_personaje_orodreth_silk":          {"es": "Orodreth",            "en": "Orodreth"},
    "ficha_de_personaje_turgon_el_sabio_silk":   {"es": "Turgon el Sabio",     "en": "Turgon the Wise"},
}

def extract_main_content(html_content):
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL)
    return match.group(1).strip() if match else None

def update_character_page(folder_name, current_html_path, template_content):
    with open(current_html_path, 'r', encoding='utf-8') as f:
        current_content = f.read()

    main_content = extract_main_content(current_content)
    if not main_content:
        print(f"  [WARN] sin <main> en {folder_name}")
        return False

    char_name = CHARACTER_MAP.get(folder_name, {}).get("es", "Character")
    new_html = template_content
    new_html = re.sub(r'<title>.*?</title>',
                      f'<title>{char_name} - Beleriand Archive</title>',
                      new_html, flags=re.IGNORECASE)
    new_html = re.sub(r'<main[^>]*>(.*?)</main>',
                      lambda m: f'<main class="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">{main_content}</main>',
                      new_html, flags=re.DOTALL)

    with open(current_html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    return True

def main():
    print("Actualizando fichas de los Quendi...\n")
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template_content = f.read()

    updated = 0
    for folder_name, info in CHARACTER_MAP.items():
        code_file = Path(QUENDI_FOLDER) / folder_name / "code.html"
        if not code_file.exists():
            print(f"[WARN] {folder_name}: code.html no existe")
            continue
        if update_character_page(folder_name, str(code_file), template_content):
            print(f"  OK {info['es']}")
            updated += 1

    print(f"\nListo: {updated}/{len(CHARACTER_MAP)} fichas actualizadas.")

if __name__ == "__main__":
    main()
