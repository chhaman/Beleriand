#!/usr/bin/env python3
"""
Update The Shadow (Creatures of Darkness) character pages with the
manwe-sulimo.html template structure. Same pattern as update_quendi_pages.py.
"""

import re
from pathlib import Path

TEMPLATE_FILE = "public/characters/manwe-sulimo.html"
SHADOW_FOLDER = "public/characters/Shadow"

CHARACTER_MAP = {
    "ficha_de_personaje_ancalagon_silk":     {"es": "Ancalagon el Negro",  "en": "Ancalagon the Black"},
    "ficha_de_personaje_carcharoth_silk":    {"es": "Carcharoth",          "en": "Carcharoth"},
    "ficha_de_personaje_glaurung_silk":      {"es": "Glaurung",            "en": "Glaurung"},
    "ficha_de_personaje_gothmog_silk":       {"es": "Gothmog",             "en": "Gothmog"},
    "ficha_de_personaje_sauron_silk":        {"es": "Sauron (Gorthaur)",   "en": "Sauron (Gorthaur)"},
    "ficha_de_personaje_thuringwethil_silk": {"es": "Thuringwethil",       "en": "Thuringwethil"},
    "ficha_de_personaje_ungoliant_silk":     {"es": "Ungoliant",           "en": "Ungoliant"},
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
    print("Actualizando fichas de La Sombra...\n")
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template_content = f.read()
    updated = 0
    for folder_name, info in CHARACTER_MAP.items():
        code_file = Path(SHADOW_FOLDER) / folder_name / "code.html"
        if not code_file.exists():
            print(f"[WARN] {folder_name}: no existe")
            continue
        if update_character_page(folder_name, str(code_file), template_content):
            print(f"  OK {info['es']}")
            updated += 1
    print(f"\nListo: {updated}/{len(CHARACTER_MAP)} fichas actualizadas.")

if __name__ == "__main__":
    main()
