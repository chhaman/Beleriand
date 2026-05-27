import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { characters } from "../data";
import { translations, getLocalizedCharacters, Language } from "../translations";

interface CharactersViewProps {
  selectedCharId?: string | null;
  onSelectChar: (id: string | null) => void;
  lang: Language;
}

export const CharactersView: React.FC<CharactersViewProps> = ({
  selectedCharId,
  onSelectChar,
  lang,
}) => {
  const t = translations[lang];
  const localizedCharacters = getLocalizedCharacters(characters, lang);

  const defaultRace = lang === "es" ? "Razas (Todas)" : "All Races";
  const defaultRealm = lang === "es" ? "Soberanías (Todas)" : "All Realms";

  const [raceFilter, setRaceFilter] = useState(defaultRace);
  const [realmFilter, setRealmFilter] = useState(defaultRealm);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Sync state filters on language changes
  useEffect(() => {
    setRaceFilter(defaultRace);
    setRealmFilter(defaultRealm);
  }, [lang]);

  // Clear filters if selected character changes externally
  useEffect(() => {
    if (selectedCharId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedCharId]);

  // Extract unique races and realms for filter selects based on translated list
  const races = [
    defaultRace,
    "Elf",
    "Man",
    "Half-Maia",
    "Ainu"
  ];
  
  const realms = [
    defaultRealm,
    "Nargothrond",
    "Gondolin",
    "Doriath",
    "Angband",
    "Hithlum"
  ];

  const filteredCharacters = localizedCharacters.filter((c) => {
    const isAllRaces = raceFilter === "All Races" || raceFilter === "Razas (Todas)";
    const isAllRealms = realmFilter === "All Realms" || realmFilter === "Soberanías (Todas)";
    const matchRace = isAllRaces || c.race === raceFilter;
    const matchRealm = isAllRealms || c.realm === realmFilter;
    return matchRace && matchRealm;
  });

  const selectedChar = localizedCharacters.find((c) => c.id === selectedCharId);

  // Simple mouse move parallax handler for the active hero details portrait
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.012;
    const moveY = (clientY - window.innerHeight / 2) * 0.012;
    setOffset({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-12">
      <AnimatePresence mode="wait">
        {!selectedChar ? (
          /* ========================================================================= */
          /* 1. DIRECTORY LIST GRID VIEW WITH DROPDOWN FILTERS                         */
          /* ========================================================================= */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-12 animate-fade-in"
          >
            {/* Header Section */}
            <section className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
                {t.heroesGallery}
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary/20"></div>
                <span className="material-symbols-outlined text-primary text-xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
                <div className="h-px w-12 bg-primary/20"></div>
              </div>
              <p className="font-body text-base md:text-lg text-on-surface-variant italic leading-relaxed">
                {t.legendsQuote}
              </p>
            </section>

            {/* Filters bar */}
            <section className="flex flex-wrap items-center justify-center gap-6">
              <div className="neomorph-inset px-6 py-2 rounded-full flex items-center gap-3">
                <span className="font-label text-xs font-bold text-primary uppercase select-none">
                  {t.raceFilterLabel}:
                </span>
                <select
                  value={raceFilter}
                  onChange={(e) => setRaceFilter(e.target.value)}
                  className="bg-transparent font-label text-xs md:text-sm border-none outline-none focus:ring-none cursor-pointer text-on-surface-variant pr-8 py-1"
                >
                  {races.map((r) => (
                    <option key={r} value={r} className="text-on-surface bg-surface-container">
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="neomorph-inset px-6 py-2 rounded-full flex items-center gap-3">
                <span className="font-label text-xs font-bold text-primary uppercase select-none">
                  {t.realmFilterLabel}:
                </span>
                <select
                  value={realmFilter}
                  onChange={(e) => setRealmFilter(e.target.value)}
                  className="bg-transparent font-label text-xs md:text-sm border-none outline-none focus:ring-none cursor-pointer text-on-surface-variant pr-8 py-1"
                >
                  {realms.map((rm) => (
                    <option key={rm} value={rm} className="text-on-surface bg-surface-container">
                      {rm}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            {/* Characters grid match */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredCharacters.map((char) => {
                const isSpecial = char.id === "morgoth";
                return (
                  <div
                    key={char.id}
                    onClick={() => onSelectChar(char.id)}
                    onMouseEnter={() => setHoveredCardId(char.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className={`neomorph-card p-6 flex flex-col gap-5 rounded-2xl group transition-all hover:-translate-y-1 cursor-pointer border ${
                      isSpecial
                        ? "bg-inverse-surface border-primary/20 shadow-2xl"
                        : "border-white/10"
                    }`}
                  >
                    {/* Image Wrapper */}
                    <div className="neomorph-inset rounded-xl overflow-hidden aspect-[4/5] p-2 bg-surface-container-low">
                      <img
                        className={`w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ${
                          hoveredCardId === char.id ? "grayscale-0" : "grayscale"
                        }`}
                        src={char.image}
                        alt={char.name}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="px-2">
                       <h2 className={`font-headline text-2xl font-bold ${isSpecial ? "text-surface-bright" : "text-on-surface"}`}>
                        {char.name}
                      </h2>
                      <p className="font-label text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">
                        {char.title} &bull; {char.race}
                      </p>
                      <p className={`font-body text-xs md:text-sm leading-relaxed line-clamp-3 ${isSpecial ? "text-surface-dim" : "text-on-surface-variant"}`}>
                        {char.bioBlocks && char.bioBlocks[0]?.text}
                      </p>
                    </div>

                    {/* Key deeds summary */}
                    <div className={`mt-auto px-2 pt-4 border-t ${isSpecial ? "border-primary/30" : "border-outline-variant/30"}`}>
                      <span className={`font-label text-[10px] font-extrabold uppercase tracking-widest block mb-1 ${isSpecial ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}>
                        {t.keyDeedsLabel}:
                      </span>
                      <p className={`font-body text-xs italic ${isSpecial ? "text-surface-dim/85" : "text-on-surface-variant/80"}`}>
                        &ldquo;{char.memorableDeeds && char.memorableDeeds[0]?.title}: {char.memorableDeeds && char.memorableDeeds[0]?.text.slice(0, 60)}...&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </section>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* 2. SPECIFIC EXPANDED CHARACTER PROFILE VIEW STATE                         */
          /* ========================================================================= */
          <motion.div
            key="details"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="space-y-16 animate-fade-in"
          >
            {/* Navigation back and sub bar link */}
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
              <button
                onClick={() => onSelectChar(null)}
                className="neo-inset px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-primary hover:scale-[1.03] transition-transform flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                {t.closeScrollOf} {selectedChar.name}
              </button>
              <span className="text-xs font-bold text-outline uppercase tracking-widest hidden md:inline">
                {t.scribeChronicle}
              </span>
            </div>

            {/* Custom Interactive Hero Section */}
            <section
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Profile card with subtle rotating parallax */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div
                  style={{
                    transform: `rotate(1deg) translate(${offset.x}px, ${offset.y}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                  className="p-6 neo-flat bg-surface rounded-3xl w-full max-w-md shadow-xl border border-white/10"
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-inner border-4 border-surface-variant/30 bg-surface-container">
                    <img
                      alt={selectedChar.name}
                      style={{ transition: "all 0.5s ease" }}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      src={selectedChar.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Core Titles, Action Buttons, Details */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {selectedChar.title}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight">
                    {selectedChar.name}
                  </h1>
                  <h3 className="text-lg md:text-xl text-on-surface-variant font-medium italic">
                    {selectedChar.subtitle}
                  </h3>
                </div>

                {/* Styled Table Panel */}
                <div className="p-6 rounded-3xl neo-inset space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 text-xs md:text-sm">
                    <span className="text-on-surface-variant font-medium">{t.raceFilterLabel}</span>
                    <span className="font-bold text-primary">{selectedChar.race}</span>
                  </div>
                  {selectedChar.spouse && (
                    <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 text-xs md:text-sm">
                      <span className="text-on-surface-variant font-medium">{t.spouse}</span>
                      <span className="font-bold text-tertiary">{selectedChar.spouse}</span>
                    </div>
                  )}
                  {selectedChar.weapon && (
                    <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30 text-xs md:text-sm">
                      <span className="text-on-surface-variant font-medium">{t.weapon}</span>
                      <span className="font-bold text-on-surface">{selectedChar.weapon}</span>
                    </div>
                  )}
                  {selectedChar.status && (
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-on-surface-variant font-medium">{t.status}</span>
                      <span className="font-bold text-on-surface-variant">
                        {selectedChar.id === "feanor" ? t.feanorMithrim :
                         selectedChar.id === "fingolfin" ? t.fingolfinDoor :
                         selectedChar.id === "luthien" ? t.luthienMortal :
                         selectedChar.id === "beren" ? t.berenTolGalen :
                         selectedChar.id === "morgoth" ? t.morgothVoid :
                         selectedChar.id === "turin" ? t.turinCabed : selectedChar.status}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("detailed-chronicle");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="neomorph-button px-6 py-3.5 rounded-xl text-primary font-bold text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">history</span>
                    {t.readFullBio}
                  </button>
                  <button
                    onClick={() => {
                      alert(t.saveSuccessAlert.replace("{name}", selectedChar.name));
                    }}
                    className="neomorph-button px-6 py-3.5 rounded-xl text-on-surface-variant font-semibold text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">share</span>
                    {t.shareChronicle}
                  </button>
                </div>
              </div>
            </section>

            {/* Custom Bento layout of chronicles & cards info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Detailed bio blocks */}
              {selectedChar.bioBlocks?.map((bio, index) => (
                <div key={index} className="neo-flat p-8 rounded-3xl bg-surface flex flex-col gap-4 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="neo-inset p-3 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-xl select-none">
                        {bio.icon || "explore"}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{bio.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-body">
                    {bio.text}
                  </p>
                </div>
              ))}

              {/* Quote banner embedded neatly */}
              {selectedChar.quote && (
                <div className="neo-inset p-6 rounded-3xl bg-surface flex items-center justify-center text-center italic text-xs md:text-sm text-secondary font-medium border border-white/10 px-8 py-10 col-span-1 md:col-span-2 lg:col-span-3">
                  &ldquo;{selectedChar.quote}&rdquo;
                </div>
              )}
            </div>

            {/* Memorable Deeds timeline list */}
            {selectedChar.memorableDeeds && selectedChar.memorableDeeds.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl select-none">auto_awesome</span>
                  <h2 className="text-2xl font-bold">{t.memorableDeeds}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedChar.memorableDeeds.map((deed, dIdx) => (
                    <div
                      key={dIdx}
                      className={`neo-flat p-8 rounded-[2rem] gap-4 ${
                        deed.error ? "bg-gradient-to-br from-error-container/10 to-surface border border-error/20" : "border border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`material-symbols-outlined ${deed.error ? "text-error" : "text-primary"} text-xl`}>
                          {deed.icon || "auto_awesome"}
                        </span>
                        <h4 className={`font-bold text-xs md:text-sm uppercase tracking-wider ${deed.error ? "text-error" : "text-primary"}`}>
                          {deed.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-body">
                        {deed.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Custom Detailed Chronicle with scenic Illustration */}
            {selectedChar.detailedChronicle && (
              <section id="detailed-chronicle" className="neo-flat p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-surface to-surface-container-low">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="neo-inset p-6 rounded-3xl text-center flex flex-col items-center">
                      <p className="text-4xl font-black text-primary mb-1">{selectedChar.detailedChronicle.numeral}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                        {selectedChar.detailedChronicle.era}
                      </p>
                      <div className="my-6 h-px bg-outline-variant/30 w-full"></div>
                      <p className="text-xs text-on-surface-variant italic leading-relaxed px-4 pt-2">
                        &ldquo;{selectedChar.detailedChronicle.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedChar.detailedChronicle.title}</h2>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {selectedChar.detailedChronicle.text1}
                    </p>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {selectedChar.detailedChronicle.text2}
                    </p>
                    
                    <div className="pt-4 flex items-center gap-2">
                      <button
                        onClick={() => onSelectChar(null)}
                        className="text-primary font-bold text-xs md:text-sm flex items-center gap-2 hover:underline cursor-pointer"
                      >
                        {lang === "es" ? "Volver a la Galería de Leyendas" : "Back to Legends Gallery"}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Fingolfin-specific duel visual widget */}
            {selectedChar.id === "fingolfin" && (
              <section className="bg-gradient-to-br from-error-container/10 to-surface-container p-1 rounded-2xl neo-flat border border-error/15">
                <div className="p-8 md:p-12 rounded-2xl neo-inset bg-surface/30 backdrop-blur-sm text-center space-y-4">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full neo-button flex items-center justify-center text-error border border-white/5">
                      <span className="material-symbols-outlined text-error inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>
                        fireplace
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-black italic">{t.fingolfinDuelTitle}</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed italic font-body">
                    {t.fingolfinDuelDesc}
                  </p>
                </div>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
