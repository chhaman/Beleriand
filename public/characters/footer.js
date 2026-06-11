// Shared Footer script for Beleriand Archive Character Pages
// Replica exacta del footer de la app principal (App.tsx):
//   logo "Beleriand Archivo/Archive" + nav + copyright + 4 botones neomórficos
// Soporta dark/light mode (clase html.dark, igual que header.js) e idioma ES/EN
// (localStorage "lang"; el toggle de idioma de header.js recarga la página).
// Debe incluirse DESPUÉS de header.js.
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "es";

  const t = {
    es: {
      logoAccent: "Archivo",
      encyclopedia: "Enciclopedia",
      timeline: "Cronología",
      characters: "Personajes",
      atlas: "Atlas",
      copyright:
        "© SOCIEDAD DE SABIOS DE LA PRIMERA EDAD. TODAS LAS INSCRIPCIONES EN QUENYA.",
    },
    en: {
      logoAccent: "Archive",
      encyclopedia: "Encyclopedia",
      timeline: "Timeline",
      characters: "Characters",
      atlas: "Atlas",
      copyright:
        "© FIRST AGE SCHOLARLY SOCIETY. ALL INSCRIPTIONS IN QUENYA.",
    },
  }[lang === "en" ? "en" : "es"];

  // ============================================================
  // 1. CSS del footer (independiente del config Tailwind de cada
  //    página, que varía entre fichas). Light + dark via html.dark.
  // ============================================================
  const css = document.createElement("style");
  css.innerHTML = `
    .bel-footer {
      margin-top: 4rem;
      padding: 3rem 1.5rem 4rem;
      background-color: #e4e6ec;
      border-top: 1px solid rgba(108, 110, 126, 0.18);
      font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
      transition: background-color .3s, color .3s;
    }
    html.dark .bel-footer {
      background-color: #16171f !important;
      border-top-color: rgba(255,255,255,0.07);
    }
    .bel-footer-inner {
      max-width: 80rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    }
    .bel-footer-logo {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -0.05em;
      user-select: none;
    }
    @media (min-width: 768px) { .bel-footer-logo { font-size: 2.25rem; } }
    .bel-footer-logo .bel-logo-main { color: #1a1b26; }
    .bel-footer-logo .bel-logo-accent { color: #6366f1; margin-left: 0.5rem; }
    html.dark .bel-footer-logo .bel-logo-main { color: #e2e4ea; }
    html.dark .bel-footer-logo .bel-logo-accent { color: #a5b4fc; }
    .bel-footer-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }
    @media (min-width: 768px) { .bel-footer-nav { gap: 3rem; } }
    .bel-footer-nav button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      font-weight: 500;
      font-size: 0.875rem;
      color: #5b5d6d;
      cursor: pointer;
      transition: color .2s;
    }
    @media (min-width: 768px) { .bel-footer-nav button { font-size: 1rem; } }
    .bel-footer-nav button:hover { color: #6366f1; }
    html.dark .bel-footer-nav button { color: #9ca0b0; }
    html.dark .bel-footer-nav button:hover { color: #a5b4fc; }
    .bel-footer-copy {
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.6;
      max-width: 42rem;
      color: rgba(91, 93, 109, 0.75);
    }
    @media (min-width: 768px) { .bel-footer-copy { font-size: 0.875rem; } }
    html.dark .bel-footer-copy { color: rgba(156, 160, 176, 0.75); }
    .bel-footer-icons { display: flex; gap: 1rem; }
    @media (min-width: 768px) { .bel-footer-icons { gap: 1.5rem; } }
    .bel-footer-icons button {
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      border-radius: 9999px;
      background-color: #e4e6ec;
      color: #5b5d6d;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      transition: color .2s, transform .15s, box-shadow .3s, opacity .2s;
      box-shadow: 6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6);
    }
    @media (min-width: 768px) {
      .bel-footer-icons button { width: 3rem; height: 3rem; }
    }
    .bel-footer-icons button:hover { color: #6366f1; opacity: .85; }
    .bel-footer-icons button:active { transform: scale(0.95); }
    html.dark .bel-footer-icons button {
      background-color: #16171f;
      color: #9ca0b0;
      box-shadow: 6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(255,255,255,0.04);
    }
    html.dark .bel-footer-icons button:hover { color: #a5b4fc; }
    .bel-footer-icons .material-symbols-outlined { font-size: 1.125rem; }
  `;
  document.head.appendChild(css);

  // ============================================================
  // 2. Limpiar el footer antiguo de la página.
  //    Los bloques con contenido real (h2/h3 + párrafo, p.ej. "El
  //    legado de...") se conservan moviéndolos al final de <main>.
  //    El boilerplate (enlaces href="#", © antiguos, botones
  //    decorativos) se elimina.
  // ============================================================
  const main = document.querySelector("main");
  document.querySelectorAll("footer").forEach((oldFooter) => {
    if (main) {
      oldFooter.querySelectorAll("div").forEach((block) => {
        if (
          block.querySelector("h2, h3") &&
          block.querySelector("p") &&
          !block.querySelector("a[href='#']")
        ) {
          const section = document.createElement("section");
          section.className = oldFooter.className;
          section.appendChild(block);
          main.appendChild(section);
        }
      });
    }
    oldFooter.remove();
  });

  // ============================================================
  // 3. Inyectar el footer estándar (idéntico al de la app)
  // ============================================================
  const tabs = [
    { tab: "encyclopedia", label: t.encyclopedia, icon: "menu_book" },
    { tab: "timeline", label: t.timeline, icon: "history_toggle_off" },
    { tab: "characters", label: t.characters, icon: "group" },
    { tab: "atlas", label: t.atlas, icon: "library_books" },
  ];

  const footer = document.createElement("footer");
  // "notranslate" evita que Google Translate (activado por header.js)
  // retraduzca textos que ya renderizamos en el idioma correcto.
  footer.className = "bel-footer notranslate";
  footer.innerHTML = `
    <div class="bel-footer-inner">
      <div class="bel-footer-logo">
        <span class="bel-logo-main">Beleriand</span><span class="bel-logo-accent">${t.logoAccent}</span>
      </div>
      <nav class="bel-footer-nav">
        ${tabs
          .map(
            (x) =>
              `<button type="button" data-tab="${x.tab}">${x.label}</button>`
          )
          .join("")}
      </nav>
      <div class="bel-footer-copy">${t.copyright}</div>
      <div class="bel-footer-icons">
        ${tabs
          .map(
            (x) =>
              `<button type="button" data-tab="${x.tab}" title="${x.label}" aria-label="${x.label}"><span class="material-symbols-outlined">${x.icon}</span></button>`
          )
          .join("")}
      </div>
    </div>
  `;
  document.body.appendChild(footer);

  // Navegación: misma lógica que el header → SPA con ?tab=
  footer.querySelectorAll("button[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "/?tab=" + btn.dataset.tab;
    });
  });
});
