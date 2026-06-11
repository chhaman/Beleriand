#!/usr/bin/env python3
"""
Script to update all character pages with standardized header, navigation, and footer
matching the main React application design.
"""

import os
import re
from pathlib import Path

# Define the character folders
MAIAR_FOLDER = "public/characters/maiar"

# Character names mapping
CHARACTER_NAMES = {
    "melian": {"es": "Melian (Reina de Doriath)", "en": "Melian (Queen of Doriath)"},
    "eonwe": {"es": "Eönwë", "en": "Eönwë"},
    "ilmare": {"es": "Ilmarë", "en": "Ilmarë"},
    "osse": {"es": "Ossë", "en": "Ossë"},
    "uinen": {"es": "Uinen", "en": "Uinen"},
    "olorin": {"es": "Olórin (Gandalf)", "en": "Olórin (Gandalf)"},
    "arien": {"es": "Arien", "en": "Arien"},
    "tilion": {"es": "Tilion", "en": "Tilion"},
    "curunir": {"es": "Cúrunír (Saruman)", "en": "Cúrunír (Saruman)"},
    "radagast": {"es": "Radagast el Pardo", "en": "Radagast the Brown"},
}

def create_new_header():
    """Create the new standardized header"""
    return '''<header class="sticky top-0 w-full z-50 bg-background shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(0,0,0,0.1)]">
<nav class="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
<div class="flex items-center gap-2">
<a href="/" class="text-2xl font-black tracking-tighter font-headline"><span class="text-on-surface">Beleriand</span> <span class="text-primary">Archive</span></a>
</div>
<div class="hidden md:flex items-center space-x-1">
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-surface-container/50" href="/?tab=encyclopedia">Enciclopedia / Encyclopedia</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-surface-container/50" href="/?tab=timeline">Cronología / Timeline</a>
<a class="text-primary font-semibold bg-surface-container shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1)] rounded-lg px-4 py-2" href="/?tab=characters">Personajes / Characters</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-surface-container/50" href="/?tab=atlas">Atlas</a>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-lg text-secondary hover:text-primary transition-all active:scale-95" onclick="toggleDarkMode()">
<span class="material-symbols-outlined dark:hidden">dark_mode</span>
<span class="material-symbols-outlined hidden dark:block">light_mode</span>
</button>
<button class="p-2 rounded-lg text-secondary hover:text-primary transition-all active:scale-95" onclick="toggleLanguage()">
<span class="font-bold text-sm">ES/EN</span>
</button>
</div>
</nav>
</header>'''

def create_new_footer():
    """Create the new standardized footer"""
    return '''<footer class="bg-surface-container py-12 md:py-16 border-t border-outline-variant/30 mt-16 w-full">
<div class="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
<div class="font-headline text-3xl md:text-4xl font-black tracking-tighter select-none">
<span class="text-on-surface">Beleriand</span>
<span class="text-primary ml-2">Archive</span>
</div>

<nav class="flex flex-wrap justify-center gap-6 md:gap-12 text-on-surface-variant font-medium text-sm md:text-base">
<a href="/?tab=encyclopedia" class="hover:text-primary transition-all cursor-pointer">Enciclopedia / Encyclopedia</a>
<a href="/?tab=timeline" class="hover:text-primary transition-all cursor-pointer">Cronología / Timeline</a>
<a href="/?tab=characters" class="hover:text-primary transition-all cursor-pointer">Personajes / Characters</a>
<a href="/?tab=atlas" class="hover:text-primary transition-all cursor-pointer">Atlas</a>
</nav>

<div class="text-on-surface-variant/75 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
© SOCIEDAD DE SABIOS DE LA PRIMERA EDAD. TODAS LAS INSCRIPCIONES EN QUENYA. / © FIRST AGE SCHOLARLY SOCIETY. ALL INSCRIPTIONS IN QUENYA.
</div>

<div class="flex gap-4 md:gap-6">
<a href="/?tab=encyclopedia" class="w-10 h-10 md:w-12 md:h-12 neo-button rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer hover:opacity-85 select-none" title="Enciclopedia">
<span class="material-symbols-outlined text-lg">menu_book</span>
</a>
<a href="/?tab=timeline" class="w-10 h-10 md:w-12 md:h-12 neo-button rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer hover:opacity-85 select-none" title="Cronología">
<span class="material-symbols-outlined text-lg">history_toggle_off</span>
</a>
<a href="/?tab=characters" class="w-10 h-10 md:w-12 md:h-12 neo-button rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer hover:opacity-85 select-none" title="Personajes">
<span class="material-symbols-outlined text-lg">group</span>
</a>
<a href="/?tab=atlas" class="w-10 h-10 md:w-12 md:h-12 neo-button rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer hover:opacity-85 select-none" title="Atlas">
<span class="material-symbols-outlined text-lg">library_books</span>
</a>
</div>
</div>
</footer>'''

def create_scripts():
    """Create JavaScript for dark mode and language toggle"""
    return '''<script>
// Dark mode toggle
function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    } else {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    }
}

// Language toggle
function toggleLanguage() {
    const current = localStorage.getItem('lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', next);
    // Note: Full language switching would require React context
    alert('Language preference saved. Reload page to see changes.');
}

// Load saved preferences
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.documentElement.classList.add('dark');
    }
});

// Neomorphic button interactions
document.querySelectorAll('.neomorphic-raised').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.remove('neomorphic-raised');
        button.classList.add('neomorphic-inset');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('neomorphic-inset');
        button.classList.add('neomorphic-raised');
    });
});
</script>'''

def update_character_html(file_path):
    """Update a character HTML file with new header and footer"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove old header
    content = re.sub(
        r'<header class="sticky top-0.*?</header>',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove old footer
    content = re.sub(
        r'<footer class="w-full mt-20.*?</footer>',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove old mobile nav
    content = re.sub(
        r'<nav class="md:hidden fixed bottom-6.*?</nav>',
        '',
        content,
        flags=re.DOTALL
    )

    # Insert new header before <main>
    new_header = create_new_header()
    content = content.replace('<main', f'{new_header}\n<main', 1)

    # Insert new footer before </body>
    new_footer = create_new_footer()
    content = content.replace('</body>', f'{new_footer}\n</body>', 1)

    # Update scripts
    scripts = create_scripts()
    content = content.replace('</body>', f'{scripts}\n</body>', 1)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated: {file_path}")

# Main execution
if __name__ == "__main__":
    maiar_dir = Path(MAIAR_FOLDER)

    if maiar_dir.exists():
        for folder in maiar_dir.iterdir():
            if folder.is_dir():
                code_file = folder / "code.html"
                if code_file.exists():
                    update_character_html(str(code_file))
        print("\nAll character pages updated successfully!")
    else:
        print(f"Directory {MAIAR_FOLDER} not found")
