import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { battles } from "../data";
import { translations, getLocalizedBattles, Language } from "../translations";

interface AtlasViewProps {
  onTabChange: (tab: string) => void;
  lang: Language;
  selectedBattleId?: string | null;
}

export const AtlasView: React.FC<AtlasViewProps> = ({ onTabChange, lang, selectedBattleId }) => {
  const [activeBattleId, setActiveBattleId] = useState<string | null>(selectedBattleId || null);

  const t = translations[lang];
  const localizedBattles = getLocalizedBattles(battles, lang);
  const selectedBattle = localizedBattles.find((b) => b.id === activeBattleId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-12 animate-fade-in"
    >
      {/* Page Title Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary mb-3">
          {t.warAtlasTitle}
        </h1>
        <div className="h-1 w-24 bg-primary/20 mx-auto rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-body">
          {t.warAtlasDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Map Container - LEFT 8 COLS */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] silk-extruded p-3 md:p-6 overflow-hidden border border-white/10">
            <div className="w-full h-full silk-pressed overflow-hidden relative rounded-xl bg-surface-container">
              {/* Cartographic Beleriand parchment background */}
              <img
                alt="Mapa manuscrito de Beleriand"
                className="w-full h-full object-cover mix-blend-multiply opacity-75 grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjopjlgI45OtC09y-8hvLw15rgulugiiyA9jWOJk0NDamwmH8z2WMx_7pOX7a217SCq6x6VH4bgvGeD_L7LgfVuRKME5YR5csFjxF4CuntBx14yMjqB90NLOgYT0hVGw4N-O-6mNs-LtiIducM3vdWjc54QBP6Ig3xtGg04t46lXzE5sCKaeVv1amndvOny_CyefLswxbnkkaZebCXaDZfzXg6qipuH8SFn8kODRXHwD8Hp-22dy4hiK5FhupdIO7WUiQOayRuA"
                referrerPolicy="no-referrer"
              />

              {/* Interaction Map coordinate markers */}
              {localizedBattles.map((b) => {
                const isActive = activeBattleId === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setActiveBattleId(b.id)}
                    style={{
                      left: b.x,
                      top: b.y,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`material-symbols-outlined marker-pulse text-3xl sm:text-4xl transition-colors ${
                          isActive
                            ? "text-primary scale-125 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                            : b.id === "battle-3"
                            ? "text-error hover:text-primary"
                            : b.id === "battle-1"
                            ? "text-tertiary hover:text-primary"
                            : "text-primary hover:text-tertiary"
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {b.icon}
                      </span>
                      {/* Interactive Hover Title Label */}
                      <span className="absolute top-10 whitespace-nowrap bg-on-surface text-white text-[9px] font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                        {b.title} ({b.year})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-[10px] text-center text-on-surface-variant font-bold uppercase tracking-widest pl-2 font-label">
            {t.mapInteractiveTip}
          </p>
        </div>

        {/* Infobox Sidebar Panel - RIGHT 4 COLS */}
        <div className="lg:col-span-4 h-full">
          <div className="neo-flat p-6 rounded-3xl min-h-[400px] flex flex-col justify-between border border-white/10 h-full">
            <AnimatePresence mode="wait">
              {!selectedBattle ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="silk-extruded p-6 rounded-full mb-6 max-w-fit border border-white/5">
                    <span className="material-symbols-outlined text-4xl text-primary animate-spin-slow select-none">
                      explore
                    </span>
                  </div>
                  <p className="text-xs font-bold text-on-surface-variant px-4 uppercase tracking-widest leading-loose">
                    {t.mapSelectPrompt}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={selectedBattle.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] block mb-1">
                      {selectedBattle.year} &bull; {t.warChronicles}
                    </span>
                    <h2 className="font-headline text-2xl font-extrabold text-on-surface leading-tight">
                      {selectedBattle.title}
                    </h2>

                    {/* Scenic Illustration Banner */}
                    <div className="my-4 silk-extruded p-1.5 border border-white/10">
                      <div className="rounded-xl overflow-hidden silk-pressed">
                        <img
                          alt={selectedBattle.title}
                          className="w-full h-32 md:h-40 object-cover grayscale brightness-90 saturate-50 hover:grayscale-0 transition-all duration-500"
                          src={selectedBattle.image}
                        />
                      </div>
                    </div>

                    {/* Troop Lists */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 mb-2">
                          {t.shadowForces}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedBattle.shadowForces.map((f, i) => (
                            <div
                              key={i}
                              className="silk-pressed px-3 py-1 text-[9px] font-bold text-tertiary uppercase tracking-wider bg-surface-container"
                            >
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-secondary/20 pb-1 mb-2">
                          {t.freeForces}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedBattle.freeForces.map((f, i) => (
                            <div
                              key={i}
                              className="silk-pressed px-3 py-1 text-[9px] font-bold text-primary uppercase tracking-wider bg-surface-container"
                            >
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcome Panel Block */}
                  <div className="silk-pressed p-4 rounded-xl border border-white/5 mt-4">
                    <p className="text-[9px] font-extrabold text-primary/70 uppercase tracking-widest mb-1.5 font-label">
                      {t.strategicOutcome}
                    </p>
                    <p className="text-xs text-on-surface-variant italic leading-relaxed font-body">
                      {selectedBattle.outcome}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Strategies Grid below Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Estrategias de la Luz Card */}
        <div className="silk-extruded p-8 flex flex-col gap-4 border border-white/10">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined font-bold">castle</span>
            <h3 className="font-headline font-bold text-lg">{t.lightStrategies}</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="text-xs">
                <span className="font-bold text-primary-container">
                  {lang === "es" ? "El Cerco de Angband:" : "The Siege of Angband:"}
                </span>
                <p className="text-on-surface-variant mt-1 leading-relaxed font-body">
                  {t.lightStrategiesDesc1}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-xs">
                <span className="font-bold text-primary-container">
                  {lang === "es" ? "Unión de Maedhros:" : "Union of Maedhros:"}
                </span>
                <p className="text-on-surface-variant mt-1 leading-relaxed font-body">
                  {t.lightStrategiesDesc2}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Maquinaria de la Sombra Card */}
        <div className="silk-extruded p-8 flex flex-col gap-4 border border-white/10">
          <div className="flex items-center gap-3 text-tertiary">
            <span className="material-symbols-outlined font-bold">local_fire_department</span>
            <h3 className="font-headline font-bold text-lg">{t.shadowMachinery}</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="text-xs">
                <span className="font-bold text-tertiary">
                  {lang === "es" ? "Llamas del Bragollach:" : "Flames of the Bragollach:"}
                </span>
                <p className="text-on-surface-variant mt-1 leading-relaxed font-body">
                  {t.shadowMachineryDesc1}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-xs">
                <span className="font-bold text-tertiary">
                  {lang === "es" ? "Glaurung el Dorado:" : "Glaurung the Golden:"}
                </span>
                <p className="text-on-surface-variant mt-1 leading-relaxed font-body">
                  {t.shadowMachineryDesc2}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Cronistas de Beleriand Card */}
        <div className="silk-extruded p-8 flex flex-col justify-between border border-white/10">
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block font-label">{t.ancientTestimonies}</span>
            <h3 className="font-headline font-bold text-lg text-primary mb-3">{t.chroniclesBeleriand}</h3>
            <p className="text-on-surface-variant italic text-xs leading-relaxed font-body">
              {t.chroniclesBeleriandDesc}
            </p>
          </div>
          <button
            onClick={() => onTabChange("encyclopedia")}
            className="mt-6 w-full bg-primary text-white py-3 rounded-xl font-bold text-xs shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
          >
            {t.consultArchivesButton}
          </button>
        </div>

      </div>
    </motion.div>
  );
};
