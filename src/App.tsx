import { useState, useEffect } from "react";
import { TopAppBar } from "./components/TopAppBar";
import { SideNavBar } from "./components/SideNavBar";
import { HomeView } from "./components/HomeView";
import { TimelineView } from "./components/TimelineView";
import { CharactersView } from "./components/CharactersView";
import { AtlasView } from "./components/AtlasView";
import { translations } from "./translations";

type TabType = "encyclopedia" | "timeline" | "characters" | "atlas";

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const tabParam = params.get("tab");
    if (tabParam === "encyclopedia" || tabParam === "timeline" || tabParam === "characters" || tabParam === "atlas") {
      return tabParam as TabType;
    }
    return "encyclopedia";
  });
  const [selectedCharId, setSelectedCharId] = useState<string | null>(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    return params.get("id") || null;
  });
  
  // Custom language switcher state: "es" (default) or "en"
  const [lang, setLang] = useState<"es" | "en">(() => {
    return (localStorage.getItem("lang") as "es" | "en") || "es";
  });
  
  // High-fidelity dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Smooth scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab]);

  // Synchronize HTML element class tag and localStorage for Tailwind V4 Dark selection
  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Sync language selection to localStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Deep-linking callback from real-time Search Engine
  const handleSearchSelect = (
    type: "character" | "battle" | "milestone",
    id: string
  ) => {
    if (type === "character") {
      setCurrentTab("characters");
      setSelectedCharId(id);
    } else if (type === "battle") {
      setCurrentTab("atlas");
    } else if (type === "milestone") {
      setCurrentTab("timeline");
      setSelectedCharId(null);
    }
  };

  const handleTabChange = (tab: string, argCharId?: string) => {
    setCurrentTab(tab as TabType);
    if (argCharId) {
      setSelectedCharId(argCharId);
    } else {
      setSelectedCharId(null);
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans transition-all duration-300 antialiased overflow-x-hidden">
      
      {/* 1. Global sticky top header app bar */}
      <TopAppBar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onSearchSelect={handleSearchSelect}
        lang={lang}
        onLangChange={setLang}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />

      {/* 2. Main content container structure */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full relative">
        
        {/* Left Side Navigation (Hidden on mobile/tablet) */}
        <SideNavBar currentTab={currentTab} onTabChange={handleTabChange} lang={lang} />

        {/* Core display workspace */}
        <main className="flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto">
          {currentTab === "encyclopedia" && (
            <HomeView onTabChange={handleTabChange} lang={lang} />
          )}

          {currentTab === "timeline" && <TimelineView lang={lang} />}

          {currentTab === "characters" && (
            <CharactersView
              selectedCharId={selectedCharId}
              onSelectChar={setSelectedCharId}
              lang={lang}
            />
          )}

          {currentTab === "atlas" && (
            <AtlasView onTabChange={handleTabChange} lang={lang} />
          )}
        </main>
      </div>

      {/* 3. Global Scholar Footer matching templates */}
      <footer className="bg-surface-container py-12 md:py-16 border-t border-outline-variant/30 mt-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <div className="font-headline text-3xl font-black italic text-primary tracking-tighter select-none">
            {lang === "es" ? "Archivo de Beleriand" : "Beleriand Archive"}
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-on-surface-variant font-medium text-xs md:text-sm">
            <button
              onClick={() => handleTabChange("encyclopedia")}
              className="hover:text-primary transition-all cursor-pointer"
            >
              {lang === "es" ? "Archivos" : "Archives"}
            </button>
            <button
              onClick={() => handleTabChange("timeline")}
              className="hover:text-primary transition-all cursor-pointer"
            >
              {lang === "es" ? "El Silmarillion" : "The Silmarillion"}
            </button>
            <button
              onClick={() => handleTabChange("atlas")}
              className="hover:text-primary transition-all cursor-pointer"
            >
              {lang === "es" ? "Mapa de Beleriand" : "Map of Beleriand"}
            </button>
          </nav>

          <div className="h-0.5 w-16 bg-outline-variant/30 rounded-full neo-pressed"></div>

          <div className="text-on-surface-variant/85 text-xs md:text-sm font-medium leading-relaxed max-w-xl">
            {t.firstAgeSociety}
          </div>

          {/* Social and Ornate sigils */}
          <div className="flex gap-4 mt-2">
            <div
              onClick={() => handleTabChange("timeline")}
              className="w-10 h-10 neo-button rounded-full flex items-center justify-center text-primary cursor-pointer hover:opacity-85 select-none"
            >
              <span className="material-symbols-outlined text-sm">history_edu</span>
            </div>
            <div
              onClick={() => handleTabChange("encyclopedia")}
              className="w-10 h-10 neo-button rounded-full flex items-center justify-center text-primary cursor-pointer hover:opacity-85 select-none"
            >
              <span className="material-symbols-outlined text-sm">auto_stories</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. Floating bottom navigation bar (Shown on mobile views matching the templates) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-40">
        <div className="neomorph-raised flex justify-around items-center p-3.5 rounded-3xl backdrop-blur-md bg-surface/90 border border-white/50 shadow-xl">
          <button
            onClick={() => handleTabChange("encyclopedia")}
            className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
              currentTab === "encyclopedia" ? "text-primary font-bold" : "text-on-surface-variant/75"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            <span className="text-[9px] uppercase font-bold tracking-tight">{t.encyclopedia}</span>
          </button>
          <button
            onClick={() => handleTabChange("timeline")}
            className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
              currentTab === "timeline" ? "text-primary font-bold" : "text-on-surface-variant/75"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">history_toggle_off</span>
            <span className="text-[9px] uppercase font-bold tracking-tight">{t.timeline}</span>
          </button>
          <button
            onClick={() => handleTabChange("characters")}
            className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
              currentTab === "characters" ? "text-primary font-bold" : "text-on-surface-variant/75"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">crown</span>
            <span className="text-[9px] uppercase font-bold tracking-tight">{t.characters}</span>
          </button>
          <button
            onClick={() => handleTabChange("atlas")}
            className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${
              currentTab === "atlas" ? "text-primary font-bold" : "text-on-surface-variant/75"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            <span className="text-[9px] uppercase font-bold tracking-tight">{t.atlas}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
