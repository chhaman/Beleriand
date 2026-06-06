// Shared Header & Navigation script for Beleriand Archive Character Pages
// v2 — Full-page dark mode + complete translation support
document.addEventListener("DOMContentLoaded", () => {
  // ============================================================
  // 1. Initial State Loading from LocalStorage
  // ============================================================
  let darkMode = localStorage.getItem("darkMode") === "true";
  let lang = localStorage.getItem("lang") || "es";
  let searchData = { characters: [], battles: [], timelineEvents: [] };

  // Set initial dark mode class on html tag IMMEDIATELY
  if (darkMode) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }

  // ============================================================
  // 2. Inject Dynamic CSS — Full-Page Dark Mode + GT Cleanup
  // ============================================================
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    /* ============================================================
       FULL-PAGE DARK MODE OVERRIDES
       Covers ALL neomorphic class naming variants used across pages:
         .neomorphic-raised / .neomorphic-inset  (manwe, ulmo, nienna…)
         .raised-neomorphic / .inset-neomorphic  (aule, mandos, lorien…)
         .neo-raised / .neo-pressed / .neo-icon  (varda, yavanna, este…)
       ============================================================ */

    /* --- Body & Root --- */
    html.dark body {
      background-color: #12131a !important;
      color: #e2e4ea !important;
    }

    /* --- All neomorphic raised variants --- */
    html.dark .neomorphic-raised,
    html.dark .raised-neomorphic,
    html.dark .neo-raised {
      background-color: #1a1b26 !important;
      background: #1a1b26 !important;
      box-shadow: 6px 6px 14px rgba(0,0,0,0.45), -4px -4px 10px rgba(255,255,255,0.025) !important;
    }

    /* --- All neomorphic inset/pressed variants --- */
    html.dark .neomorphic-inset,
    html.dark .inset-neomorphic,
    html.dark .neo-pressed,
    html.dark .neo-inset,
    html.dark .active-inset {
      background-color: #13141c !important;
      background: #13141c !important;
      box-shadow: inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(255,255,255,0.02) !important;
    }

    /* --- Neo icon buttons --- */
    html.dark .neo-icon {
      background-color: #1a1b26 !important;
      box-shadow: 3px 3px 7px rgba(0,0,0,0.45), -3px -3px 7px rgba(255,255,255,0.025) !important;
    }

    /* --- Glass panels --- */
    html.dark .glass-panel,
    html.dark .glass-glow {
      background: rgba(26, 27, 38, 0.55) !important;
      border-color: rgba(255,255,255,0.06) !important;
    }

    /* --- Background utilities --- */
    html.dark .bg-surface,
    html.dark .bg-background {
      background-color: #1a1b26 !important;
    }
    html.dark .bg-surface-container {
      background-color: #1e1f2d !important;
    }
    html.dark .bg-surface-container-low {
      background-color: #191a27 !important;
    }
    html.dark .bg-surface-container-lowest {
      background-color: #14151f !important;
    }
    html.dark .bg-surface-container-high {
      background-color: #22233a !important;
    }
    html.dark .bg-surface-container-highest {
      background-color: #26273e !important;
    }
    html.dark .bg-tertiary-fixed {
      background-color: #2d1f4f !important;
    }

    /* --- Text utilities --- */
    html.dark .text-on-surface       { color: #e2e4ea !important; }
    html.dark .text-on-background    { color: #e2e4ea !important; }
    html.dark .text-on-surface-variant { color: #a5a7b8 !important; }
    html.dark .text-on-secondary-fixed-variant { color: #b8baca !important; }
    html.dark .text-secondary        { color: #a5a7b8 !important; }
    html.dark .text-outline          { color: #686a7f !important; }

    /* --- Headings & paragraphs (broad fallback) --- */
    html.dark h1, html.dark h2, html.dark h3,
    html.dark h4, html.dark h5, html.dark h6 {
      color: #e2e4ea;
    }
    html.dark p   { color: #c8cad8; }
    html.dark li  { color: #c8cad8; }
    html.dark span { color: inherit; }
    html.dark blockquote { color: #a5a7b8 !important; }
    html.dark cite { color: #8a8c9a !important; }

    /* Override explicit text-on-surface so primary/tertiary still pop */
    html.dark .text-primary    { color: #818cf8 !important; }
    html.dark .text-tertiary   { color: #a78bfa !important; }
    html.dark .text-error      { color: #f87171 !important; }

    /* --- Border utilities --- */
    html.dark .border-outline-variant,
    html.dark [class*="border-outline-variant"] {
      border-color: rgba(255,255,255,0.08) !important;
    }
    html.dark .border-b,
    html.dark .border-t {
      border-color: rgba(255,255,255,0.07) !important;
    }

    /* --- Footer --- */
    html.dark footer {
      background-color: #14151f !important;
      border-color: rgba(255,255,255,0.07) !important;
      box-shadow: 0px -6px 16px rgba(0,0,0,0.4) !important;
    }

    /* --- Hero gradient overlay --- */
    html.dark .from-background\\/90,
    html.dark [class*="from-background"] {
      --tw-gradient-from: rgba(18, 19, 26, 0.92) !important;
    }
    html.dark .from-surface\\/90,
    html.dark [class*="from-surface"] {
      --tw-gradient-from: rgba(26, 27, 38, 0.92) !important;
    }

    /* --- Inline style overrides via attribute selector --- */
    html.dark [style*="background-color: #e8eaf0"],
    html.dark [style*="background-color:#e8eaf0"] {
      background-color: #1a1b26 !important;
    }
    html.dark [style*="color: #2e3040"],
    html.dark [style*="color:#2e3040"] {
      color: #e2e4ea !important;
    }

    /* ============================================================
       GOOGLE TRANSLATE CLEANUP (hide GT toolbar)
       ============================================================ */
    .goog-te-banner-frame.skiptranslate,
    .goog-te-banner-frame,
    .goog-te-banner,
    #goog-gt-tt,
    .goog-te-balloon-frame,
    .goog-te-menu-value,
    .skiptranslate,
    iframe.skiptranslate {
      display: none !important;
      visibility: hidden !important;
    }
    body { top: 0px !important; }
    .goog-text-highlight {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }

    /* ============================================================
       SMOOTH TRANSITION for theme switching
       ============================================================ */
    body, body * {
      transition: background-color 0.25s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
    }
  `;
  document.head.appendChild(styleEl);

  // ============================================================
  // 3. Inject Google Translate Infrastructure
  // ============================================================
  const translateDiv = document.createElement("div");
  translateDiv.id = "google_translate_element";
  translateDiv.style.display = "none";
  document.body.appendChild(translateDiv);

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: "es",
        includedLanguages: "en,es",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  const gtScript = document.createElement("script");
  gtScript.type = "text/javascript";
  gtScript.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gtScript);

  function setLanguageCookie(langCode) {
    // Set on both root path and /characters path to cover both contexts
    document.cookie = `googtrans=/es/${langCode}; path=/`;
    document.cookie = `googtrans=/es/${langCode}; path=/characters`;
  }

  // Apply language cookie on load
  if (lang === "en") {
    setLanguageCookie("en");
  } else {
    setLanguageCookie("es");
  }

  // ============================================================
  // 4. Build & Inject the Navigation Header
  // ============================================================
  const headerPlaceholder = document.getElementById("app-header");
  if (!headerPlaceholder) return;

  headerPlaceholder.outerHTML = `
    <header id="site-header" class="bg-surface/85 dark:bg-[#1a1b26]/85 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-50 transition-all duration-300 w-full" style="background-color: rgba(232,234,240,0.92);">
      <div class="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        <!-- Logo -->
        <a href="/" class="font-headline text-2xl font-black italic tracking-tight text-primary cursor-pointer hover:opacity-95 active:scale-95 transition-all select-none">
          <span id="nav-logo">Archivo de Beleriand</span>
        </a>

        <!-- Nav Tabs -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="/?tab=encyclopedia" class="text-sm font-bold tracking-wide transition-all cursor-pointer text-on-surface-variant hover:text-primary" id="tab-encyclopedia">Enciclopedia</a>
          <a href="/?tab=timeline"     class="text-sm font-bold tracking-wide transition-all cursor-pointer text-on-surface-variant hover:text-primary" id="tab-timeline">Cronología</a>
          <a href="/?tab=characters"   class="text-sm font-bold tracking-wide transition-all cursor-pointer text-primary border-b-2 border-primary pb-1" id="tab-characters">Personajes</a>
          <a href="/?tab=atlas"        class="text-sm font-bold tracking-wide transition-all cursor-pointer text-on-surface-variant hover:text-primary" id="tab-atlas">Atlas</a>
        </nav>

        <!-- Search & Controls -->
        <div class="flex items-center gap-3 relative">
          <!-- Search box -->
          <div class="neomorphic-inset neo-pressed px-4 py-2 rounded-full flex items-center gap-2 max-w-xs md:max-w-md relative" style="box-shadow: inset 3px 3px 7px rgba(0,0,0,0.08), inset -3px -3px 7px rgba(255,255,255,0.5);">
            <span class="material-symbols-outlined text-outline select-none text-[20px]">search</span>
            <input
              id="nav-search-input"
              type="text"
              class="bg-transparent border-none outline-none focus:ring-0 text-xs md:text-sm text-on-surface placeholder:text-outline w-24 sm:w-32 md:w-40"
              placeholder="Buscar en los archivos..."
            />
            <button id="search-clear-btn" class="hidden text-on-surface-variant hover:text-primary text-xs cursor-pointer">✕</button>

            <!-- Dropdown -->
            <div id="search-dropdown" class="hidden absolute right-0 top-14 w-72 md:w-96 rounded-2xl shadow-xl p-4 z-50 border border-outline-variant/30 max-h-96 overflow-y-auto" style="background-color: #e8eaf0;">
              <div class="flex justify-between items-center pb-2 mb-2 border-b border-outline-variant/30">
                <span class="text-[10px] font-bold text-outline uppercase tracking-wider" id="results-label">Resultados del Archivo</span>
                <button id="close-search-btn" class="text-xs hover:text-primary font-bold cursor-pointer text-on-surface-variant">Cerrar</button>
              </div>
              <div id="search-results-list" class="space-y-4"></div>
            </div>
          </div>

          <!-- Language Button -->
          <button id="lang-toggle-btn" class="px-3 h-10 rounded-full active:scale-95 transition-transform flex items-center justify-center gap-1.5 text-xs font-bold text-on-surface hover:text-primary cursor-pointer" style="box-shadow: 6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6);">
            <span class="material-symbols-outlined text-[18px]">language</span>
            <span id="lang-text">ESP</span>
          </button>

          <!-- Light/Dark Toggle -->
          <button id="dark-mode-toggle-btn" class="w-10 h-10 rounded-full active:scale-95 transition-transform flex items-center justify-center text-on-surface hover:text-primary cursor-pointer" style="box-shadow: 6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6);">
            <span id="dark-mode-icon" class="material-symbols-outlined transition-transform duration-300 hover:rotate-[30deg]">dark_mode</span>
          </button>

          <!-- Book / Back to index -->
          <a href="/?tab=characters" class="w-10 h-10 rounded-full active:scale-95 transition-transform flex items-center justify-center text-primary cursor-pointer" style="box-shadow: 6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6);">
            <span class="material-symbols-outlined text-primary">menu_book</span>
          </a>
        </div>
      </div>
    </header>
  `;

  // Immediately style the header for dark mode if needed
  const siteHeader = document.getElementById("site-header");
  function applyHeaderStyle() {
    if (siteHeader) {
      siteHeader.style.backgroundColor = darkMode
        ? "rgba(26,27,38,0.92)"
        : "rgba(232,234,240,0.92)";
    }
    // Also fix the search dropdown background
    const dropdown = document.getElementById("search-dropdown");
    if (dropdown) {
      dropdown.style.backgroundColor = darkMode ? "#1a1b26" : "#e8eaf0";
    }
    // Fix the neomorphic buttons in the header
    const neoBtns = document.querySelectorAll(
      "#site-header button, #site-header a"
    );
    neoBtns.forEach((btn) => {
      if (btn.style.boxShadow.includes("rgba(255,255,255,0.6)")) {
        btn.style.boxShadow = darkMode
          ? "6px 6px 12px rgba(0,0,0,0.4), -6px -6px 12px rgba(255,255,255,0.02)"
          : "6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6)";
      }
    });
  }

  // ============================================================
  // 5. UI Element References
  // ============================================================
  const searchInput       = document.getElementById("nav-search-input");
  const searchClearBtn    = document.getElementById("search-clear-btn");
  const searchDropdown    = document.getElementById("search-dropdown");
  const closeSearchBtn    = document.getElementById("close-search-btn");
  const searchResultsList = document.getElementById("search-results-list");
  const langToggleBtn     = document.getElementById("lang-toggle-btn");
  const langText          = document.getElementById("lang-text");
  const darkModeToggleBtn = document.getElementById("dark-mode-toggle-btn");
  const darkModeIcon      = document.getElementById("dark-mode-icon");

  // ============================================================
  // 6. Fetch Search Data
  // ============================================================
  fetch("/characters/searchData.json")
    .then((res) => res.json())
    .then((data) => {
      searchData = data;
    })
    .catch((err) => console.error("Error loading search database:", err));

  // ============================================================
  // 7. Search Functionality
  // ============================================================
  function performSearch(term) {
    if (!term.trim()) {
      searchResultsList.innerHTML = `<div class="py-4 text-center text-xs text-on-surface-variant">${
        lang === "es" ? "Escribe algo para buscar..." : "Type to search..."
      }</div>`;
      return;
    }

    const t = term.toLowerCase();

    const filteredChars = searchData.characters
      ? searchData.characters.filter(
          (c) =>
            c.name.toLowerCase().includes(t) ||
            (c.subtitle && c.subtitle.toLowerCase().includes(t)) ||
            (c.race && c.race.toLowerCase().includes(t)) ||
            (c.realm && c.realm.toLowerCase().includes(t))
        )
      : [];

    const filteredBattles = searchData.battles
      ? searchData.battles.filter(
          (b) =>
            b.title.toLowerCase().includes(t) ||
            (b.year && b.year.toLowerCase().includes(t)) ||
            (b.outcome && b.outcome.toLowerCase().includes(t))
        )
      : [];

    const filteredMilestones = searchData.timelineEvents
      ? searchData.timelineEvents.filter(
          (m) =>
            m.title.toLowerCase().includes(t) ||
            (m.description && m.description.toLowerCase().includes(t))
        )
      : [];

    let html = "";

    if (
      filteredChars.length === 0 &&
      filteredBattles.length === 0 &&
      filteredMilestones.length === 0
    ) {
      searchResultsList.innerHTML = `<div class="py-4 text-center text-xs text-on-surface-variant">${
        lang === "es"
          ? "No se encontraron pergaminos relacionados."
          : "No related scrolls found."
      }</div>`;
      return;
    }

    if (filteredChars.length > 0) {
      html += `
        <div>
          <div class="text-[9px] font-black uppercase text-primary tracking-widest mb-1.5 pl-1">${
            lang === "es" ? "Héroes y Leyendas" : "Heroes & Legends"
          }</div>
          <div class="space-y-1">
            ${filteredChars
              .map(
                (c) => `
              <div onclick="window.location.href='/?tab=characters&id=${c.id}'" class="flex items-center gap-2 p-2 hover:bg-surface-container rounded-lg cursor-pointer transition-all">
                <img src="${c.image}" alt="${c.name}" class="w-8 h-8 rounded-full object-cover border border-outline-variant/40" />
                <div>
                  <div class="text-xs font-bold text-on-surface">${c.name}</div>
                  <div class="text-[10px] text-on-surface-variant">${c.subtitle || ""}</div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    if (filteredBattles.length > 0) {
      html += `
        <div>
          <div class="text-[9px] font-black uppercase text-tertiary tracking-widest mb-1.5 pl-1">${
            lang === "es" ? "Grandes Batallas (Atlas)" : "Great Battles (Atlas)"
          }</div>
          <div class="space-y-1">
            ${filteredBattles
              .map(
                (b) => `
              <div onclick="window.location.href='/?tab=atlas'" class="flex items-center gap-2 p-2 hover:bg-surface-container rounded-lg cursor-pointer transition-all">
                <span class="material-symbols-outlined text-tertiary text-lg">swords</span>
                <div>
                  <div class="text-xs font-bold text-on-surface">${b.title}</div>
                  <div class="text-[10px] text-on-surface-variant">${b.year || ""} — ${(b.outcome || "").substring(0, 30)}...</div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    if (filteredMilestones.length > 0) {
      html += `
        <div>
          <div class="text-[9px] font-black uppercase text-secondary tracking-widest mb-1.5 pl-1">${
            lang === "es" ? "Hitos del Tiempo" : "Historical Milestones"
          }</div>
          <div class="space-y-1">
            ${filteredMilestones
              .map(
                (m) => `
              <div onclick="window.location.href='/?tab=timeline'" class="flex items-center gap-2 p-2 hover:bg-surface-container rounded-lg cursor-pointer transition-all">
                <span class="material-symbols-outlined text-secondary text-lg">history_toggle_off</span>
                <div>
                  <div class="text-xs font-bold text-on-surface">${m.title}</div>
                  <div class="text-[10px] text-on-surface-variant line-clamp-1">${m.description || ""}</div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    searchResultsList.innerHTML = html;
  }

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value;
    if (term) {
      searchClearBtn.classList.remove("hidden");
      searchDropdown.classList.remove("hidden");
    } else {
      searchClearBtn.classList.add("hidden");
      searchDropdown.classList.add("hidden");
    }
    performSearch(term);
  });

  searchInput.addEventListener("focus", () => {
    if (searchInput.value) searchDropdown.classList.remove("hidden");
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchClearBtn.classList.add("hidden");
    searchDropdown.classList.add("hidden");
  });

  closeSearchBtn.addEventListener("click", () => {
    searchDropdown.classList.add("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !searchInput.contains(e.target) &&
      !searchDropdown.contains(e.target)
    ) {
      searchDropdown.classList.add("hidden");
    }
  });

  // ============================================================
  // 8. Theme Switching
  // ============================================================
  function updateThemeUI() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      if (darkModeIcon) darkModeIcon.innerText = "light_mode";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      if (darkModeIcon) darkModeIcon.innerText = "dark_mode";
    }
    applyHeaderStyle();
  }

  darkModeToggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", String(darkMode));
    updateThemeUI();
  });

  updateThemeUI();

  // ============================================================
  // 9. Translation System
  //    Strategy:
  //      A) A comprehensive dictionary of all known UI + page labels
  //      B) A DOM tree-walker that replaces EVERY matching text node
  //      C) Google Translate cookie auto-translation for long body text
  //    All three layers work together for complete coverage.
  // ============================================================

  // --- 9A: Full Translation Dictionary ---
  const translations = {
    es: {
      logo:              "Archivo de Beleriand",
      encyclopedia:      "Enciclopedia",
      timeline:          "Cronología",
      characters:        "Personajes",
      atlas:             "Atlas",
      searchPlaceholder: "Buscar en los archivos...",
      resultsLabel:      "Resultados del Archivo",
      close:             "Cerrar",
    },
    en: {
      logo:              "Beleriand Archive",
      encyclopedia:      "Encyclopedia",
      timeline:          "Timeline",
      characters:        "Characters",
      atlas:             "Atlas",
      searchPlaceholder: "Search archives...",
      resultsLabel:      "Archive Results",
      close:             "Close",
    },
  };

  // Full bilingual dictionary: ES → EN (and EN → ES)
  // All labels, titles, table fields, bento titles, footer links across all 14 pages
  const dictionaryEsToEn = {
    // ── General UI Labels ──────────────────────────────────────
    "Ficha Técnica":             "Technical Profile",
    "Detalles de la Entidad":    "Entity Details",
    "Resumen de Entidad":        "Entity Summary",
    "Perfil de la Aratar":       "Profile of the Aratar",
    "El Herrero de los Valar":   "The Smith of the Valar",
    "Consultar Archivos":        "Consult Archives",
    "Conclusión":                "Conclusion",
    "Hechos Memorables":         "Memorable Facts",
    "Hazañas Notables":          "Notable Deeds",
    "Atributo":                  "Attribute",
    "Instrumento":               "Instrument",
    "Instrumento Principal":     "Main Instrument",
    "Elemento Dominante":        "Dominant Element",
    "Entidades Relacionadas":    "Related Entities",
    "Residencia":                "Residence",

    // ── Field names ────────────────────────────────────────────
    "NOMBRE": "NAME",   "Nombre": "Name",
    "ROL":    "ROLE",   "Rol":    "Role",
    "RAZA":   "RACE",   "Raza":   "Race",
    "ATRIBUTOS": "ATTRIBUTES", "Atributos": "Attributes",
    "ESTADO": "STATUS", "Estado": "Status",
    "Atributo": "Attribute",

    // ── Status values ──────────────────────────────────────────
    "Eterno":              "Eternal",
    "Eterno en Valinor":   "Eternal in Valinor",
    "Eterna en Taniquetil":"Eternal at Taniquetil",
    "Activo (Ekkaia)":     "Active (Ekkaia)",
    "Activo en sus mansiones de Valinor": "Active in his mansions in Valinor",

    // ── Race values ────────────────────────────────────────────
    "Valar (Aratar)":  "Valar (Aratar)",
    "Valië (Aratar)":  "Valië (Aratar)",
    "Deidad Única":    "Sole Deity",
    "Deidad Suprema":  "Supreme Deity",

    // ── Specific entity names / subtitles ──────────────────────
    "El Rey de Arda, Señor del Aliento":     "The King of Arda, Lord of the Breath",
    "El Uno, Padre de Todo • Deidad Única":  "The One, Father of All • Sole Deity",
    "El Señor de las Aguas":                 "The Lord of Waters",
    "Rey del Mar • Vala (Ainu)":             "King of the Sea • Vala (Ainu)",
    "El Hacedor, Señor de la Tierra • Vala (Ainu)": "The Maker, Lord of Earth • Vala (Ainu)",
    "La Reina de las Estrellas":             "The Queen of the Stars",
    "Señora de la Luz • Valië (Ainu) de las Estancias de Taniquetil.": "Lady of Light • Valië (Ainu) of the Halls of Taniquetil.",
    "La Reina de la Tierra":                 "The Queen of the Earth",
    "La Llorosa, Señora de la Compasión":    "The Weeper, Lady of Compassion",
    "La Sanadora, Señora del Reposo":        "The Healer, Lady of Rest",
    "La Tejedora del Tiempo":                "The Weaver of Time",
    "La Siempre Joven":                      "The Ever-young",
    "La Bailarina de los Valar":             "The Dancer of the Valar",
    "El Juez de los Valar":                  "The Judge of the Valar",
    "El Señor de los Sueños":               "The Lord of Dreams",
    "El Campeón de los Valar":               "The Champion of the Valar",

    // ── Specific section titles (per page) ─────────────────────
    "Señor del Aliento de Arda":  "Lord of the Breath of Arda",
    "El Corazón de la Sabiduría": "The Heart of Wisdom",
    "Protector de los Hijos":     "Protector of the Children",
    "Juicio de Melkor":           "Judgment of Melkor",
    "Envío de Águilas":           "Sending of Eagles",
    "Sol y Luna":                 "Sun and Moon",
    "La Protectora de la Luz":    "The Protector of Light",
    "Oído Absoluto de Arda":      "Absolute Hearing of Arda",
    "Madre de las Constelaciones":"Mother of Constellations",
    "La Hifini de las Lámparas":  "The Filling of the Lamps",
    "El Nacimiento de las Estrellas": "The Birth of the Stars",
    "Consagración de los Silmarils":  "Consecration of the Silmarils",
    "Maestro de la Materia":      "Master of Matter",
    "El Espíritu de la Creación Pura": "The Spirit of Pure Creation",
    "Mentor de los Sabios":       "Mentor of the Wise",
    "La Sumisión de los Enanos":  "The Submission of the Dwarves",
    "La Iluminación del Mundo":   "The Illumination of the World",
    "Los Vasos del Día y la Noche": "The Vessels of Day and Night",
    "El legado del Maestro de Artes": "The Legacy of the Master of Arts",
    "El legado de la Señora de las Estrellas": "The Legacy of the Lady of Stars",

    // ── Instrument / attribute values ──────────────────────────
    "Los Cuernos Ulumúri":           "The Ulumúri Horns",
    "Ekkaia (Mar Exterior)":         "Ekkaia (Outer Sea)",
    "Agua y Música":                 "Water and Music",
    "El Gran Martillo / El Yunque de Arda": "The Great Hammer / The Anvil of Arda",
    "La Luz / El Rocío de los Árboles":     "The Light / The Dew of the Trees",
    "Los Vientos y las Aves / Cetro de Zafiro": "The Winds and Birds / Sapphire Sceptre",

    // ── CTA Buttons ────────────────────────────────────────────
    "Escuchar el Eco del Mar":    "Listen to the Sea's Echo",
    "Ver Mapa de Belegaer":       "View Map of Belegaer",
    "Explorar los Noldor":        "Explore the Noldor",
    "Explorar el Reino de Valinor": "Explore the Realm of Valinor",

    // ── Section subtitles ──────────────────────────────────────
    "La Fuente de la Existencia": "The Source of Existence",
    "El Creador de Arda":         "The Creator of Arda",
    "Creador del Universo":       "Creator of the Universe",
    "La Llama Impercedera":       "The Imperishable Flame",

    // ── Footer links ───────────────────────────────────────────
    "Fuentes Primarias":    "Primary Sources",
    "Genealogías":          "Genealogies",
    "Cronología":           "Timeline",
    "Política Editorial":   "Editorial Policy",
    "Términos del Saber":   "Terms of Lore",
    "Metadatos del Mapa":   "Map Metadata",
    "Privacidad del Archivo": "Archive Privacy",
    "Primary Sources":      "Primary Sources",
    "Genealogies":          "Genealogies",
    "Timeline":             "Timeline",
    "Editorial Policy":     "Editorial Policy",
    "Terms of Lore":        "Terms of Lore",
    "Map Metadata":         "Map Metadata",
    "Archive Privacy":      "Archive Privacy",
  };

  // Reverse map EN → ES for when switching back
  const dictionaryEnToEs = {};
  for (const [es, en] of Object.entries(dictionaryEsToEn)) {
    if (!dictionaryEnToEs[en]) dictionaryEnToEs[en] = es;
  }

  // Slug → character name map
  const valarSlugs = {
    "eru-iluvatar.html":        "Eru Ilúvatar",
    "manwe-sulimo.html":        "Manwë Súlimo",
    "ulmo.html":                "Ulmo",
    "aule-el-herrero.html":     "Aulë el Herrero",
    "tulkas-astaldo.html":      "Tulkas Astaldo",
    "mandos-namo.html":         "Mandos (Námo)",
    "lorien-irmo.html":         "Lórien (Irmo)",
    "varda-elentari.html":      "Varda Elentári",
    "yavanna-kementari.html":   "Yavanna Kementári",
    "nienna.html":              "Nienna",
    "este-la-gentil.html":      "Estë la Gentil",
    "vaire-la-tejedora.html":   "Vairë la Tejedora",
    "vana-la-siempre-joven.html": "Vána la Siempre Joven",
    "nessa-la-bailarina.html":  "Nessa la Bailarina",
  };

  // --- 9B: DOM Tree-Walker Translation ---
  // Walks ALL text nodes in <main> and <footer>, replaces known strings.
  function walkAndTranslate(root, dict) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          // Skip script/style/noscript nodes
          const tag = node.parentElement && node.parentElement.tagName;
          if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") {
            return NodeFilter.FILTER_REJECT;
          }
          return node.textContent.trim()
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      }
    );

    const nodesToUpdate = [];
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent.trim();
      if (dict[text]) {
        nodesToUpdate.push({ node, replacement: dict[text] });
      }
    }
    // Apply replacements after walking (avoids live NodeList issues)
    nodesToUpdate.forEach(({ node, replacement }) => {
      node.textContent = node.textContent.replace(node.textContent.trim(), replacement);
    });
  }

  // --- 9C: Per-character database translation (deeds, quotes, subtitle) ---
  function translateCharacterDB(charName, dbEs, dbEn, targetLang) {
    const activeDb   = targetLang === "es" ? dbEs : dbEn;
    const inactiveDb = targetLang === "es" ? dbEn : dbEs;
    if (!activeDb || !inactiveDb) return;

    // Translate subtitle/title role
    document.querySelectorAll("h2, p, span").forEach((el) => {
      const t = el.textContent && el.textContent.trim();
      if (t && inactiveDb.title && t === inactiveDb.title) {
        el.textContent = activeDb.title;
      }
    });

    // Translate epic quote
    document.querySelectorAll("blockquote, p, cite, q").forEach((el) => {
      const raw = el.textContent && el.textContent.trim().replace(/[«»""\"']/g, "");
      const compareInactive = inactiveDb.epicQuote && inactiveDb.epicQuote.replace(/[«»""\"']/g, "");
      if (raw && compareInactive && raw === compareInactive) {
        el.textContent =
          targetLang === "es"
            ? `«${activeDb.epicQuote.replace(/[«»]/g, "")}»`
            : `"${activeDb.epicQuote.replace(/[«»""]/g, "")}"`;
      }
    });

    // Translate deeds / body items
    document.querySelectorAll("p, span, li, td, th").forEach((el) => {
      const t = el.textContent && el.textContent.trim();
      if (!t || !inactiveDb.deeds) return;
      for (let i = 0; i < inactiveDb.deeds.length; i++) {
        if (inactiveDb.deeds[i] && t === inactiveDb.deeds[i]) {
          el.textContent = activeDb.deeds[i] || t;
        }
      }
    });
  }

  // --- Main translateDOM function ---
  function translateDOM() {
    const t = translations[lang];

    // Update navigation header labels
    const navLogo         = document.getElementById("nav-logo");
    const tabEncyclopedia = document.getElementById("tab-encyclopedia");
    const tabTimeline     = document.getElementById("tab-timeline");
    const tabCharacters   = document.getElementById("tab-characters");
    const tabAtlas        = document.getElementById("tab-atlas");
    const resultsLabel    = document.getElementById("results-label");
    const closeBtn        = document.getElementById("close-search-btn");

    if (navLogo)         navLogo.innerText         = t.logo;
    if (tabEncyclopedia) tabEncyclopedia.innerText  = t.encyclopedia;
    if (tabTimeline)     tabTimeline.innerText      = t.timeline;
    if (tabCharacters)   tabCharacters.innerText    = t.characters;
    if (tabAtlas)        tabAtlas.innerText         = t.atlas;
    if (resultsLabel)    resultsLabel.innerText     = t.resultsLabel;
    if (closeBtn)        closeBtn.innerText         = t.close;
    if (searchInput)     searchInput.placeholder    = t.searchPlaceholder;
    if (langText)        langText.innerText         = lang === "es" ? "ESP" : "ENG";

    // Walk and translate <main> and <footer> using the full dictionary
    const dict = lang === "en" ? dictionaryEsToEn : dictionaryEnToEs;
    const main   = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (main)   walkAndTranslate(main, dict);
    if (footer) walkAndTranslate(footer, dict);

    // Per-character database translation
    const filename = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );
    const charName = valarSlugs[filename];
    if (
      charName &&
      searchData.secondaryLoreDatabaseEs &&
      searchData.secondaryLoreDatabaseEn
    ) {
      const dbEs = searchData.secondaryLoreDatabaseEs[charName];
      const dbEn = searchData.secondaryLoreDatabaseEn[charName];
      if (dbEs && dbEn) {
        translateCharacterDB(charName, dbEs, dbEn, lang);
      }
    }
  }

  // ============================================================
  // 10. Language Toggle Button
  // ============================================================
  langToggleBtn.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    setLanguageCookie(lang);
    window.location.reload(); // Full reload triggers Google Translate auto-translation
  });

  // ============================================================
  // 11. Init on Page Load
  // ============================================================

  // Apply dark mode icon state immediately
  if (darkModeIcon) {
    darkModeIcon.innerText = darkMode ? "light_mode" : "dark_mode";
  }

  // Apply header background immediately
  applyHeaderStyle();

  // Apply translations with a small delay to let the DOM settle
  setTimeout(translateDOM, 80);

  // Apply Google Translate cookie on load (for auto-translation of long body text)
  if (lang === "en") {
    setLanguageCookie("en");
  } else {
    setLanguageCookie("es");
  }

  // Re-apply translations after GT may have manipulated DOM
  setTimeout(translateDOM, 2000);
});
