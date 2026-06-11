#!/usr/bin/env python3
"""
Script to update all Maiar character pages with manwe-sulimo.html template structure.
Preserves character-specific content while applying standardized design and header.js integration.
"""

import os
import re
from pathlib import Path
from bs4 import BeautifulSoup

# Template file
TEMPLATE_FILE = "public/characters/manwe-sulimo.html"
MAIAR_FOLDER = "public/characters/maiar"

# Character mapping with folder names and titles
CHARACTER_MAP = {
    "ficha_de_personaje_arien_silk": {
        "es": "Arien",
        "en": "Arien"
    },
    "ficha_de_personaje_curun_r_silk": {
        "es": "Cúrunír (Saruman)",
        "en": "Cúrunír (Saruman)"
    },
    "ficha_de_personaje_e_nw_silk": {
        "es": "Eönwë",
        "en": "Eönwë"
    },
    "ficha_de_personaje_ilmar_silk": {
        "es": "Ilmarë",
        "en": "Ilmarë"
    },
    "ficha_de_personaje_melian_silk": {
        "es": "Melian",
        "en": "Melian"
    },
    "ficha_de_personaje_ol_rin_gandalf_silk": {
        "es": "Olórin (Gandalf)",
        "en": "Olórin (Gandalf)"
    },
    "ficha_de_personaje_oss_silk": {
        "es": "Ossë",
        "en": "Ossë"
    },
    "ficha_de_personaje_radagast_silk": {
        "es": "Radagast el Pardo",
        "en": "Radagast the Brown"
    },
    "ficha_de_personaje_tilion_silk": {
        "es": "Tilion",
        "en": "Tilion"
    },
    "ficha_de_personaje_uinen_silk": {
        "es": "Uinen",
        "en": "Uinen"
    },
}

def read_template():
    """Read the template file"""
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        return f.read()

def extract_main_content(html_content):
    """Extract the <main>...</main> content from HTML"""
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return None

def update_character_page(folder_name, current_html_path, template_content):
    """Update a character page with template structure"""
    # Read current HTML file
    with open(current_html_path, 'r', encoding='utf-8') as f:
        current_content = f.read()

    # Extract main content from current file
    main_content = extract_main_content(current_content)
    if not main_content:
        print(f"  ⚠️  Could not extract main content from {folder_name}")
        return False

    # Get character name
    char_name = CHARACTER_MAP.get(folder_name, {}).get("es", "Character")

    # Create new HTML by replacing main content in template
    new_html = template_content

    # Update title
    new_html = re.sub(
        r'<title>.*?</title>',
        f'<title>{char_name} - Beleriand Archive</title>',
        new_html,
        flags=re.IGNORECASE
    )

    # Replace main content
    new_html = re.sub(
        r'<main[^>]*>(.*?)</main>',
        f'<main class="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">{main_content}</main>',
        new_html,
        flags=re.DOTALL
    )

    # Write updated HTML back
    with open(current_html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

    return True

def main():
    """Main function"""
    print("📚 Updating Maiar character pages with standardized template...\n")

    # Check if template exists
    if not os.path.exists(TEMPLATE_FILE):
        print(f"❌ Template file not found: {TEMPLATE_FILE}")
        return

    # Read template
    template_content = read_template()
    print(f"✅ Template loaded from {TEMPLATE_FILE}\n")

    # Check Maiar folder
    maiar_dir = Path(MAIAR_FOLDER)
    if not maiar_dir.exists():
        print(f"❌ Maiar folder not found: {MAIAR_FOLDER}")
        return

    # Process each character
    updated_count = 0
    for folder_name, char_info in CHARACTER_MAP.items():
        folder_path = maiar_dir / folder_name
        code_file = folder_path / "code.html"

        if not code_file.exists():
            print(f"⚠️  {folder_name}: code.html not found")
            continue

        print(f"📝 Updating {char_info['es']}...", end=" ")

        if update_character_page(folder_name, str(code_file), template_content):
            print("✅")
            updated_count += 1
        else:
            print("❌")

    print(f"\n✨ Update complete! {updated_count}/{len(CHARACTER_MAP)} files updated.")
    print("\nChanges applied:")
    print("  • Standardized header with dynamic nav and search")
    print("  • Dark mode toggle with localStorage persistence")
    print("  • Language toggle (ES/EN) with Google Translate integration")
    print("  • Unified neomorphic design system")
    print("  • Footer with navigation links and action buttons")
    print("  • Smooth animations and interactivity via header.js")

if __name__ == "__main__":
    main()
