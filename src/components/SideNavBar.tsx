import React from "react";
import { translations, Language } from "../translations";

interface SideNavBarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  lang: Language;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
  currentTab,
  onTabChange,
  lang,
}) => {
  const t = translations[lang];

  return (
    <aside className="hidden lg:flex flex-col sticky top-20 h-[calc(100vh-80px)] w-64 pt-8 gap-4 px-6 border-r border-outline-variant/30 transition-all duration-300">
      <div className="mb-6">
        <h2 className="font-headline text-lg font-bold text-primary">{t.runesOfKnowledge}</h2>
        <p className="text-xs text-on-surface-variant">{t.archivesOfNargothrond}</p>
      </div>

      <nav className="flex flex-col gap-3">
        {/* Library Card Link */}
        <button
          onClick={() => onTabChange("encyclopedia")}
          className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all group cursor-pointer ${
            currentTab === "encyclopedia"
              ? "text-primary bg-white/20 dark:bg-black/20 silk-extruded shadow-sm font-bold"
              : "text-on-surface-variant hover:bg-surface-container hover:shadow-xs"
          }`}
        >
          <span
            className={`material-symbols-outlined text-xl transition-transform group-hover:scale-105 ${
              currentTab === "encyclopedia" ? "text-primary" : "text-outline"
            }`}
          >
            menu_book
          </span>
          <span className="text-sm font-medium">{t.encyclopedia}</span>
        </button>

        {/* Timeline Link */}
        <button
          onClick={() => onTabChange("timeline")}
          className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all group cursor-pointer ${
            currentTab === "timeline"
              ? "text-primary bg-white/20 dark:bg-black/20 silk-extruded shadow-sm font-bold"
              : "text-on-surface-variant hover:bg-surface-container hover:shadow-xs"
          }`}
        >
          <span
            className={`material-symbols-outlined text-xl transition-transform group-hover:scale-105 ${
              currentTab === "timeline" ? "text-primary" : "text-outline"
            }`}
          >
            history_toggle_off
          </span>
          <span className="text-sm font-medium">{t.timeline}</span>
        </button>

        {/* Bestiary (Characters) Link */}
        <button
          onClick={() => onTabChange("characters")}
          className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all group cursor-pointer ${
            currentTab === "characters"
              ? "text-primary bg-white/20 dark:bg-black/20 silk-extruded shadow-sm font-bold"
              : "text-on-surface-variant hover:bg-surface-container hover:shadow-xs"
          }`}
        >
          <span
            className={`material-symbols-outlined text-xl transition-transform group-hover:scale-105 ${
              currentTab === "characters" ? "text-primary" : "text-outline"
            }`}
          >
            raven
          </span>
          <span className="text-sm font-medium">{t.characters}</span>
        </button>

        {/* Cartography (Atlas/Map) Link */}
        <button
          onClick={() => onTabChange("atlas")}
          className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all group cursor-pointer ${
            currentTab === "atlas"
              ? "text-primary bg-white/20 dark:bg-black/20 silk-extruded shadow-sm font-bold"
              : "text-on-surface-variant hover:bg-surface-container hover:shadow-xs"
          }`}
        >
          <span
            className={`material-symbols-outlined text-xl transition-transform group-hover:scale-105 ${
              currentTab === "atlas" ? "text-primary" : "text-outline"
            }`}
          >
            map
          </span>
          <span className="text-sm font-medium">{t.atlas}</span>
        </button>
      </nav>

      {/* Finarfin Sigil Block */}
      <div className="mt-auto pb-8 border-t border-outline-variant/20 pt-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold select-none shadow-sm shadow-primary/20">
            Φ
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">{t.scribeOfNoldor}</p>
            <p className="text-xs font-semibold">{t.finrodSigil}</p>
          </div>
        </div>

        <div className="w-full h-16 rounded-2xl neo-inset p-2 flex items-center justify-center overflow-hidden border border-white/10">
          <img
            alt="Sigil of the House of Finarfin"
            className="w-10 h-10 object-cover rounded-full shadow-inner opacity-85 hover:scale-110 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs0vmWGsfRX0VN-v6ySwzisxv8778Em5mVnYvLIySir1xUC4k7AbUQFh2EzUaFN_txaF1waGx2yN0gnCTARJjsfokZxjN-uZumwC5yojjDxPqvhchRy4mcUAhTxjnyctkWKzgN7fvfclfIOJjc7L_NUGyukfdAQpRUXxBQxrNmEpcvwdMAGp8wjUVYFcr_z-AMqcyjejx-irT2d1z2PuVslu9Ga6Anv6TNadX3xyMWk888ar1O5_t7B5Jjb8RGdWYIanI8zbGoYQ"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </aside>
  );
};
