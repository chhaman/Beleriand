import React, { useState, useEffect } from "react";
import { characters, battles, timelineEvents } from "../data";
import { Character, Battle, TimelineEvent } from "../types";
import { translations, getLocalizedCharacters, getLocalizedBattles, getLocalizedTimeline } from "../translations";

interface TopAppBarProps {
  currentTab: string;
  onTabChange: (tab: string, selectedId?: string) => void;
  onSearchSelect: (type: "character" | "battle" | "milestone", id: string) => void;
  lang: "es" | "en";
  onLangChange: (lang: "es" | "en") => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  currentTab,
  onTabChange,
  onSearchSelect,
  lang,
  onLangChange,
  darkMode,
  onDarkModeToggle,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState<{
    characters: Character[];
    battles: Battle[];
    milestones: TimelineEvent[];
  }>({ characters: [], battles: [], milestones: [] });

  const t = translations[lang];

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults({ characters: [], battles: [], milestones: [] });
      return;
    }

    const term = searchTerm.toLowerCase();

    const activeCharacters = getLocalizedCharacters(characters, lang);
    const activeBattles = getLocalizedBattles(battles, lang);
    const activeMilestones = getLocalizedTimeline(timelineEvents, lang);

    const filteredChars = activeCharacters.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.subtitle.toLowerCase().includes(term) ||
        c.race.toLowerCase().includes(term) ||
        c.realm.toLowerCase().includes(term)
    );

    const filteredBattles = activeBattles.filter(
      (b) =>
        b.title.toLowerCase().includes(term) ||
        b.year.toLowerCase().includes(term) ||
        b.outcome.toLowerCase().includes(term)
    );

    const filteredMilestones = activeMilestones.filter(
      (m) =>
        m.title.toLowerCase().includes(term) ||
        m.description.toLowerCase().includes(term)
    );

    setResults({
      characters: filteredChars,
      battles: filteredBattles,
      milestones: filteredMilestones,
    });
  }, [searchTerm, lang]);

  const hasResults =
    results.characters.length > 0 ||
    results.battles.length > 0 ||
    results.milestones.length > 0;

  return (
    <header className="bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        <div
          onClick={() => onTabChange("encyclopedia")}
          className="font-headline text-2xl font-black italic tracking-tight text-primary cursor-pointer hover:opacity-95 active:scale-95 transition-all select-none"
        >
          {lang === "es" ? "Archivo de Beleriand" : "Beleriand Archive"}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onTabChange("encyclopedia")}
            className={`text-sm font-bold tracking-wide transition-all cursor-pointer ${
              currentTab === "encyclopedia"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {t.encyclopedia}
          </button>
          <button
            onClick={() => onTabChange("timeline")}
            className={`text-sm font-bold tracking-wide transition-all cursor-pointer ${
              currentTab === "timeline"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {t.timeline}
          </button>
          <button
            onClick={() => onTabChange("characters")}
            className={`text-sm font-bold tracking-wide transition-all cursor-pointer ${
              currentTab === "characters"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {t.characters}
          </button>
          <button
            onClick={() => onTabChange("atlas")}
            className={`text-sm font-bold tracking-wide transition-all cursor-pointer ${
              currentTab === "atlas"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {t.atlas}
          </button>
        </nav>

        <div className="flex items-center gap-3 relative">
          <div className="neo-inset px-4 py-2 rounded-full flex items-center gap-2 max-w-xs md:max-w-md">
            <span className="material-symbols-outlined text-outline select-none text-[20px]">
              search
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none focus:ring-auto text-xs md:text-sm text-on-surface placeholder:text-outline w-24 sm:w-32 md:w-40"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setShowDropdown(false);
                }}
                className="text-on-surface-variant hover:text-primary text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Real-time search recommendation dropdown panel */}
          {showDropdown && searchTerm.trim() && (
            <div className="absolute right-0 top-14 w-72 md:w-96 bg-surface-container rounded-2xl shadow-xl p-4 z-50 border border-outline-variant/30 max-h-96 overflow-y-auto">
              <div className="flex justify-between items-center pb-2 mb-2 border-b border-outline-variant/30">
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                  {t.archiveResults}
                </span>
                <button
                  onClick={() => setShowDropdown(false)}
                  className="text-xs hover:text-primary font-bold cursor-pointer"
                >
                  {t.close}
                </button>
              </div>

              {!hasResults ? (
                <div className="py-4 text-center text-xs text-on-surface-variant">
                  {t.noResults}
                </div>
              ) : (
                <div className="space-y-4">
                  {results.characters.length > 0 && (
                    <div>
                      <div className="text-[9px] font-black uppercase text-primary tracking-widest mb-1.5 pl-1">
                        {t.heroesAndLegends}
                      </div>
                      <div className="space-y-1">
                        {results.characters.map((c) => (
                          <div
                            key={c.id}
                            onClick={() => {
                              onSearchSelect("character", c.id);
                              setShowDropdown(false);
                              setSearchTerm("");
                            }}
                            className="flex items-center gap-2 p-2 hover:bg-surface rounded-lg cursor-pointer transition-all"
                          >
                            <img
                              src={c.image}
                              alt={c.name}
                              className="w-8 h-8 rounded-full object-cover border border-outline-variant/40"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="text-xs font-bold text-on-surface">
                                {c.name}
                              </div>
                              <div className="text-[10px] text-on-surface-variant">
                                {c.subtitle}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.battles.length > 0 && (
                    <div>
                      <div className="text-[9px] font-black uppercase text-tertiary tracking-widest mb-1.5 pl-1">
                        {t.greatBattles}
                      </div>
                      <div className="space-y-1">
                        {results.battles.map((b) => (
                          <div
                            key={b.id}
                            onClick={() => {
                              onSearchSelect("battle", b.id);
                              setShowDropdown(false);
                              setSearchTerm("");
                            }}
                            className="flex items-center gap-2 p-2 hover:bg-surface rounded-lg cursor-pointer transition-all"
                          >
                            <span className="material-symbols-outlined text-tertiary text-lg">
                              swords
                            </span>
                            <div>
                              <div className="text-xs font-bold text-on-surface">
                                {b.title}
                              </div>
                              <div className="text-[10px] text-on-surface-variant">
                                {b.year} — {b.outcome.substring(0, 32)}...
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.milestones.length > 0 && (
                    <div>
                      <div className="text-[9px] font-black uppercase text-secondary tracking-widest mb-1.5 pl-1">
                        {t.milestones}
                      </div>
                      <div className="space-y-1">
                        {results.milestones.map((m) => (
                          <div
                            key={m.id}
                            onClick={() => {
                              onSearchSelect("milestone", m.id);
                              setShowDropdown(false);
                              setSearchTerm("");
                            }}
                            className="flex items-center gap-2 p-2 hover:bg-surface rounded-lg cursor-pointer transition-all"
                          >
                            <span className="material-symbols-outlined text-secondary text-lg">
                              history_toggle_off
                            </span>
                            <div>
                              <div className="text-xs font-bold text-on-surface">
                                {m.title}
                              </div>
                              <div className="text-[10px] text-on-surface-variant line-clamp-1">
                                {m.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Language Switcher Button */}
          <button
            onClick={() => onLangChange(lang === "es" ? "en" : "es")}
            className="px-3 h-10 rounded-full neo-button flex items-center justify-center gap-1.5 text-xs font-bold text-on-surface hover:text-primary transition-all select-none cursor-pointer"
            title="Cambiar idioma / Change language"
          >
            <span className="material-symbols-outlined text-[18px]">
              language
            </span>
            <span>{lang === "es" ? "ESP" : "ENG"}</span>
          </button>

          {/* Light/Dark Toggle Button */}
          <button
            onClick={onDarkModeToggle}
            className="w-10 h-10 rounded-full neo-button flex items-center justify-center text-on-surface hover:text-primary transition-all cursor-pointer"
            title="Modo Oscuro / Dark Mode"
          >
            <span className="material-symbols-outlined transition-transform duration-300 hover:rotate-[30deg]">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Menu book button */}
          <button
            onClick={() => onTabChange("encyclopedia")}
            className="w-10 h-10 rounded-full neo-button flex items-center justify-center text-primary group transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
              menu_book
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
