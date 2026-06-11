import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { characters } from "../data";
import { translations, getLocalizedCharacters, Language } from "../translations";
import {
  secondaryCategories,
  secondaryLoreDatabaseEs,
  secondaryLoreDatabaseEn,
  Member
} from "../data/secondaryLore";

const valarPagesMap: Record<string, string> = {
  "Eru Ilúvatar": "/characters/eru-iluvatar.html",
  "Manwë Súlimo": "/characters/manwe-sulimo.html",
  "Ulmo": "/characters/ulmo.html",
  "Aulë el Herrero": "/characters/aule-el-herrero.html",
  "Aulë the Smith": "/characters/aule-el-herrero.html",
  "Mandos (Námo)": "/characters/mandos-namo.html",
  "Mandos": "/characters/mandos-namo.html",
  "Lórien (Irmo)": "/characters/lorien-irmo.html",
  "Lórien": "/characters/lorien-irmo.html",
  "Tulkas Astaldo": "/characters/tulkas-astaldo.html",
  "Varda Elentári": "/characters/varda-elentari.html",
  "Yavanna Kementári": "/characters/yavanna-kementari.html",
  "Nienna": "/characters/nienna.html",
  "Estë la Gentil": "/characters/este-la-gentil.html",
  "Estë the Gentle": "/characters/este-la-gentil.html",
  "Vairë la Tejedora": "/characters/vaire-la-tejedora.html",
  "Vairë the Weaver": "/characters/vaire-la-tejedora.html",
  "Vána la Siempre Joven": "/characters/vana-la-siempre-joven.html",
  "Vána the Ever-young": "/characters/vana-la-siempre-joven.html",
  "Nessa la Bailarina": "/characters/nessa-la-bailarina.html",
  "Nessa the Dancer": "/characters/nessa-la-bailarina.html",
  "Melian (Reina de Doriath)": "/characters/maiar/ficha_de_personaje_melian_silk/code.html",
  "Melian (Queen of Doriath)": "/characters/maiar/ficha_de_personaje_melian_silk/code.html",
  "Eönwë": "/characters/maiar/ficha_de_personaje_e_nw_silk/code.html",
  "Ilmarë": "/characters/maiar/ficha_de_personaje_ilmar_silk/code.html",
  "Ossë": "/characters/maiar/ficha_de_personaje_oss_silk/code.html",
  "Uinen": "/characters/maiar/ficha_de_personaje_uinen_silk/code.html",
  "Olórin (Gandalf)": "/characters/maiar/ficha_de_personaje_ol_rin_gandalf_silk/code.html",
  "Arien": "/characters/maiar/ficha_de_personaje_arien_silk/code.html",
  "Tilion": "/characters/maiar/ficha_de_personaje_tilion_silk/code.html",
  "Cúrunír (Saruman)": "/characters/maiar/ficha_de_personaje_curun_r_silk/code.html",
  "Cúrunír": "/characters/maiar/ficha_de_personaje_curun_r_silk/code.html",
  "Radagast el Pardo": "/characters/maiar/ficha_de_personaje_radagast_silk/code.html",
  "Radagast the Brown": "/characters/maiar/ficha_de_personaje_radagast_silk/code.html",
  // ── Elfos: Los Quendi ──────────────────────────────────────
  "Finwë": "/characters/Elf/Quendi/ficha_de_personaje_finw_silk/code.html",
  "Míriel Serindë": "/characters/Elf/Quendi/ficha_de_personaje_m_riel_serind_silk/code.html",
  "Maedhros": "/characters/Elf/Quendi/ficha_de_personaje_maedhros_silk/code.html",
  "Maglor": "/characters/Elf/Quendi/ficha_de_personaje_maglor_silk/code.html",
  "Celegorm": "/characters/Elf/Quendi/ficha_de_personaje_celegorm_silk/code.html",
  "Caranthir": "/characters/Elf/Quendi/ficha_de_personaje_caranthir_silk/code.html",
  "Curufin": "/characters/Elf/Quendi/ficha_de_personaje_curufin_silk/code.html",
  "Amrod": "/characters/Elf/Quendi/ficha_de_personaje_amrod_y_amras_silk/code.html",
  "Amras": "/characters/Elf/Quendi/ficha_de_personaje_amrod_y_amras_silk/code.html",
  "Fingon el Valiente": "/characters/Elf/Quendi/ficha_de_personaje_fingon_el_valiente_silk/code.html",
  "Fingon the Valiant": "/characters/Elf/Quendi/ficha_de_personaje_fingon_el_valiente_silk/code.html",
  "Turgon (Señor de Gondolin)": "/characters/Elf/Quendi/ficha_de_personaje_turgon_el_sabio_silk/code.html",
  "Turgon (Lord of Gondolin)": "/characters/Elf/Quendi/ficha_de_personaje_turgon_el_sabio_silk/code.html",
  "Aredhel la Blanca": "/characters/Elf/Quendi/ficha_de_personaje_aredhel_ar_feiniel_silk/code.html",
  "Aredhel the White": "/characters/Elf/Quendi/ficha_de_personaje_aredhel_ar_feiniel_silk/code.html",
  "Idril Celebrindal": "/characters/Elf/Quendi/ficha_de_personaje_idril_celebrindal_silk/code.html",
  "Finarfin": "/characters/Elf/Quendi/ficha_de_personaje_finarfin_silk/code.html",
  "Finrod Felagund": "/characters/Elf/Quendi/ficha_de_personaje_finrod_felagund_silk/code.html",
  "Angrod": "/characters/Elf/Quendi/ficha_de_personaje_angrod_silk/code.html",
  "Aegnor": "/characters/Elf/Quendi/ficha_de_personaje_aegnor_silk/code.html",
  "Galadriel": "/characters/Elf/Quendi/ficha_de_personaje_galadriel_silk/code.html",
  "Orodreth": "/characters/Elf/Quendi/ficha_de_personaje_orodreth_silk/code.html",
  "Finduilas": "/characters/Elf/Quendi/ficha_de_personaje_finduilas_silk/code.html",
};

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

  // Secondary characters & Interactive contributions states
  const [selectedSecondaryMember, setSelectedSecondaryMember] = useState<string | null>(null);
  const [showManuscriptModal, setShowManuscriptModal] = useState(false);
  const [manuscriptForm, setManuscriptForm] = useState({
    senderName: "",
    senderRace: lang === "es" ? "Elfo" : "Elf",
    title: "",
    content: ""
  });
  const [manuscriptSubmitted, setManuscriptSubmitted] = useState(false);

  // Dynamically adapt default race value on language switch
  useEffect(() => {
    setManuscriptForm(prev => ({
      ...prev,
      senderRace: lang === "es" ? "Elfo" : "Elf"
    }));
  }, [lang]);

  const handleMemberClick = (member: Member) => {
    const pageUrl = valarPagesMap[member.name];
    if (pageUrl) {
      window.location.href = pageUrl;
      return;
    }
    if (member.id) {
      onSelectChar(member.id);
    } else {
      setSelectedSecondaryMember(member.name);
    }
  };

  const handleManuscriptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setManuscriptSubmitted(true);
    setTimeout(() => {
      setManuscriptSubmitted(false);
      setShowManuscriptModal(false);
      setManuscriptForm({
        senderName: "",
        senderRace: lang === "es" ? "Elfo" : "Elf",
        title: "",
        content: ""
      });
    }, 4500);
  };

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
                    className={`p-6 flex flex-col gap-5 rounded-2xl group transition-all hover:-translate-y-1 cursor-pointer border ${
                      isSpecial
                        ? "neomorph-card border-red-500/20 shadow-2xl dark:bg-[#111218] dark:border-red-500/30 dark:shadow-red-500/5 dark:hover:border-red-500/50"
                        : "neomorph-card border-white/10"
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
                       <h2 className="font-headline text-2xl font-bold text-on-surface">
                        {char.name}
                       </h2>
                      <p className={`font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${isSpecial ? "text-blue-600 dark:text-blue-400" : "text-primary"}`}>
                        {char.title} &bull; {char.race}
                      </p>
                      <p className="font-body text-xs md:text-sm leading-relaxed line-clamp-3 text-on-surface-variant">
                        {char.bioBlocks && char.bioBlocks[0]?.text}
                      </p>
                    </div>

                    {/* Key deeds summary */}
                    <div className={`mt-auto px-2 pt-4 border-t ${isSpecial ? "border-red-500/20" : "border-outline-variant/30"}`}>
                      <span className={`font-label text-[10px] font-extrabold uppercase tracking-widest block mb-1 ${isSpecial ? "text-red-500 dark:text-red-400" : "text-on-surface-variant"}`}>
                        {t.keyDeedsLabel}:
                      </span>
                      <p className="font-body text-xs italic text-on-surface-variant/80">
                        &ldquo;{char.memorableDeeds && char.memorableDeeds[0]?.title}: {char.memorableDeeds && char.memorableDeeds[0]?.text.slice(0, 60)}...&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* 3. MULTI-RACIAL DIRECTORY (AGREGA EL RESTO DE RAZAS Y PERSONAJES CON BOTONES) */}
            <div className="pt-16 space-y-16 border-t border-outline-variant/30">
              {secondaryCategories.map((cat, idx) => (
                <div key={idx} className="space-y-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-8 rounded-full ${cat.bgDot}`} />
                    <h2 className="font-display text-xl md:text-2xl font-extrabold text-on-surface tracking-tight uppercase">
                      {lang === "es" ? cat.title.es : cat.title.en}
                    </h2>
                  </div>

                  {/* Factions/Groups Grid inside this Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cat.boxes.map((box, bIdx) => {
                      return box.isWide ? (
                        <div key={bIdx} className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl neomorph-card border border-white/10 space-y-6 bg-surface-container-low/40">
                          <h3 className={`font-headline text-lg font-bold border-b pb-2 ${cat.textColor} ${cat.borderColor}`}>
                            {lang === "es" ? box.title.es : box.title.en}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {box.subColumns?.map((col, colIdx) => (
                              <div key={colIdx} className="space-y-4">
                                <h4 className="font-label text-xs font-extrabold uppercase text-on-surface-variant tracking-[0.12em] border-b border-outline-variant/20 pb-1">
                                  {lang === "es" ? col.title.es : col.title.en}
                                </h4>
                                <div className="space-y-2 flex flex-col items-start">
                                  {col.members.map((member, mIdx) => {
                                    const pageUrl = valarPagesMap[member.name];
                                    const Component = pageUrl ? "a" : "button";
                                    return (
                                      <Component
                                        key={mIdx}
                                        {...(pageUrl ? { href: pageUrl } : { onClick: () => handleMemberClick(member) })}
                                        className="group text-left font-body text-sm text-on-surface-variant hover:text-primary transition-all py-1 cursor-pointer flex items-center gap-1.5 hover:underline decoration-primary/40 underline-offset-4"
                                      >
                                        <span>{lang === "es" ? member.name : (member.en || member.name)}</span>
                                        {member.id && (
                                          <span className="material-symbols-outlined text-[13px] text-primary/85 animate-pulse">
                                            auto_awesome
                                          </span>
                                        )}
                                      </Component>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div key={bIdx} className="p-6 rounded-2xl neomorph-card border border-white/10 space-y-4 bg-surface-container-low/40 flex flex-col">
                          <h3 className={`font-headline text-lg font-bold border-b pb-1.5 ${box.titleColor || cat.textColor} ${cat.borderColor}`}>
                            {lang === "es" ? box.title.es : box.title.en}
                          </h3>

                          {box.members && box.members.length > 0 && (
                            <div className="space-y-2 flex flex-col items-start">
                              {box.members.map((member, mIdx) => {
                                const pageUrl = valarPagesMap[member.name];
                                const Component = pageUrl ? "a" : "button";
                                return (
                                  <Component
                                    key={mIdx}
                                    {...(pageUrl ? { href: pageUrl } : { onClick: () => handleMemberClick(member) })}
                                    className="group w-full text-left font-body text-sm text-on-surface-variant hover:text-primary transition-all py-1 cursor-pointer flex flex-col items-start hover:bg-surface-container/30 px-2 -mx-2 rounded-lg"
                                  >
                                    {member.role && (
                                      <span className="block text-[8px] font-extrabold uppercase tracking-widest text-[#725e4c] dark:text-[#be9b7b] mb-0.5">
                                        {lang === "es" ? member.role.es : member.role.en}
                                      </span>
                                    )}
                                    <span className="flex items-center gap-1.5">
                                      <span>{lang === "es" ? member.name : (member.en || member.name)}</span>
                                      {member.id && (
                                        <span className="material-symbols-outlined text-[13px] text-primary/85 animate-pulse">
                                          auto_awesome
                                        </span>
                                      )}
                                    </span>
                                  </Component>
                                );
                              })}
                            </div>
                          )}

                          {box.description && (
                            <p className="font-body text-xs md:text-sm text-on-surface-variant/80 italic leading-relaxed whitespace-pre-line mt-1">
                              {lang === "es" ? box.description.es : box.description.en}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. CONTRIBUTE CTA SECTION (CON CONTRIBUYE AL ARCHIVO EXACTAMENTE COMO ESTÁ) */}
            <div className="neomorph-card rounded-3xl p-8 max-w-2xl mx-auto space-y-6 mt-20 text-center border border-white/5 bg-gradient-to-br from-surface to-surface-container-low">
              <h2 className="text-2xl md:text-3xl font-display font-black text-on-surface tracking-tight">
                {lang === "es" ? "Contribuye al Archivo" : "Contribute to the Archive"}
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                {lang === "es"
                  ? "¿Posees fragmentos perdidos de la historia de los Edain o los Eldar? Envía tus transcripciones para ser revisadas por los sabios de Nargothrond."
                  : "Do you possess lost fragments of the history of the Edain or the Eldar? Send your transcriptions to be reviewed by the loremasters of Nargothrond."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowManuscriptModal(true)}
                  className="neomorph-button px-8 py-4 rounded-full text-xs font-black tracking-widest text-primary uppercase hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                  {lang === "es" ? "ENVIAR MANUSCRITO" : "SEND MANUSCRIPT"}
                </button>
              </div>
            </div>
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

      {/* SECONDARY CHARACTER SCROLL MODAL */}
      <AnimatePresence>
        {selectedSecondaryMember && (() => {
          const secondaryDb = lang === "es" ? secondaryLoreDatabaseEs : secondaryLoreDatabaseEn;
          const entry = secondaryDb[selectedSecondaryMember];
          
          const titleText = entry?.title || (lang === "es" ? "Erudito Venerable de Beleriand" : "Venerable Scholar of Beleriand");
          const raceText = entry?.race || (lang === "es" ? "Raza Legendaria" : "Legendary Race");
          const quoteText = entry?.epicQuote || "";
          const deedsList = entry?.deeds || [
            lang === "es"
              ? "Su nombre y sabiduría quedaron grabados en las piedras rúnicas secundarias del reino."
              : "Their name and legacy are recorded in the secondary runic writings of the land.",
            lang === "es"
               ? "Dejó una marca imborrable a través de las místicas andanzas en la Primera Edad de Arda."
               : "They left an indelible mark through their mystical wanderings in the First Age of Arda."
          ];
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-55 flex items-center justify-center p-4 font-sans"
              onClick={() => setSelectedSecondaryMember(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-surface border border-outline-variant/30 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSecondaryMember(null)}
                  className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high/40 hover:bg-surface-container-high"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>

                {/* Header */}
                <div className="space-y-1.5 pr-8">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    {raceText}
                  </span>
                  <h3 className="text-3xl font-display font-extrabold text-on-surface tracking-tight">
                    {selectedSecondaryMember}
                  </h3>
                  <p className="text-xs md:text-sm text-tertiary italic font-medium">
                    {titleText}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-outline-variant/30 w-full" />

                {/* Quote (if present) */}
                {quoteText && (
                  <p className="font-body text-xs md:text-sm text-on-surface-variant italic leading-relaxed pl-4 border-l-2 border-primary/40 bg-surface-container-low/30 py-2 rounded-r-xl">
                    &ldquo;{quoteText}&rdquo;
                  </p>
                )}

                {/* Deeds */}
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-black uppercase text-on-surface-variant tracking-widest flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-primary">menu_book</span>
                    {lang === "es" ? "CRÓNICAS Y HECHOS" : "CHRONICLES & DEEDS"}
                  </h4>
                  <ul className="space-y-3">
                    {deedsList.map((deed, dIdx) => (
                      <li key={dIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-on-surface-variant leading-relaxed">
                        <span className="material-symbols-outlined text-[14px] text-primary mt-1">history</span>
                        <span>{deed}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Close Button CTA */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedSecondaryMember(null)}
                    className="neomorph-button px-5 py-2.5 rounded-xl text-xs font-extrabold text-primary uppercase cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 font-sans"
                  >
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {lang === "es" ? "Cerrar Pergamino" : "Close Scroll"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* MANUSCRIPT SUBMISSION MODAL */}
      <AnimatePresence>
        {showManuscriptModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-55 flex items-center justify-center p-4 font-sans"
            onClick={() => {
              if (!manuscriptSubmitted) setShowManuscriptModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-surface border border-outline-variant/30 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success state */}
              {manuscriptSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined text-primary text-3xl select-none">
                      history_edu
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black text-on-surface">
                      {lang === "es" ? "¡Manuscrito Guardado!" : "Manuscript Saved!"}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant max-w-xs mx-auto leading-relaxed">
                      {lang === "es" 
                        ? `El sabio principal de Nargothrond ha recibido con reverencia tu pergamino de "${manuscriptForm.title || "Lore"}". Será custodiado en el gran archivo.`
                        : `The chief loremaster of Nargothrond has received with reverence your parchment for "${manuscriptForm.title || "Lore"}". It will be kept safe in the great archives.`}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* Close button */}
                  <button
                    onClick={() => setShowManuscriptModal(false)}
                    className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high/40 hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[12px] animate-pulse">history_edu</span>
                      {lang === "es" ? "NUEVO APORTA DE LORE" : "NEW LORE CONTRIBUTION"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-on-surface tracking-tight">
                      {lang === "es" ? "Registrar Manuscrito" : "Register Manuscript"}
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      {lang === "es"
                        ? "Escribe crónicas, cantares o fragmentos perdidos de tus viajes..."
                        : "Write chronicles, songs or lost fragments of your journeys..."}
                    </p>
                  </div>

                  <form onSubmit={handleManuscriptSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1 font-sans">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
                          {lang === "es" ? "Nombre Escribano" : "Scribe Name"}
                        </label>
                        <input
                          type="text"
                          required
                          value={manuscriptForm.senderName}
                          onChange={(e) => setManuscriptForm({ ...manuscriptForm, senderName: e.target.value })}
                          placeholder={lang === "es" ? "P. ej., Gildor" : "E.g., Gildor"}
                          className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary text-on-surface font-sans"
                        />
                      </div>

                      {/* Race select */}
                      <div className="space-y-1 font-sans">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
                          {lang === "es" ? "Raza / Clan" : "Race / Clan"}
                        </label>
                        <select
                          value={manuscriptForm.senderRace}
                          onChange={(e) => setManuscriptForm({ ...manuscriptForm, senderRace: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-primary text-on-surface cursor-pointer font-sans"
                        >
                          <option value="Elf">{lang === "es" ? "Elfo (Eldar)" : "Elf (Eldar)"}</option>
                          <option value="Man">{lang === "es" ? "Hombre (Edain)" : "Man (Edain)"}</option>
                          <option value="Dwarf">{lang === "es" ? "Enano (Naugrim)" : "Dwarf (Naugrim)"}</option>
                          <option value="Ainu">{lang === "es" ? "Maia / Vala (Ainur)" : "Maia / Vala (Ainur)"}</option>
                          <option value="Other">{lang === "es" ? "Otro" : "Other"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-1 font-sans">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
                        {lang === "es" ? "Título del Pergamino" : "Scroll Title"}
                      </label>
                      <input
                        type="text"
                        required
                        value={manuscriptForm.title}
                        onChange={(e) => setManuscriptForm({ ...manuscriptForm, senderName: manuscriptForm.senderName, senderRace: manuscriptForm.senderRace, title: e.target.value, content: manuscriptForm.content })}
                        placeholder={lang === "es" ? "La caída de Barad Eithel..." : "The fall of Barad Eithel..."}
                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary text-on-surface font-sans"
                      />
                    </div>

                    {/* Content textarea */}
                    <div className="space-y-1 font-sans">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
                        {lang === "es" ? "Fragmento / Crónica" : "Fragment / Chronicle"}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={manuscriptForm.content}
                        onChange={(e) => setManuscriptForm({ ...manuscriptForm, senderName: manuscriptForm.senderName, senderRace: manuscriptForm.senderRace, title: manuscriptForm.title, content: e.target.value })}
                        placeholder={
                          lang === "es"
                            ? "En aquellos días oscuros..."
                            : "In those dark days..."
                        }
                        className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary text-on-surface resize-none whitespace-pre-line font-sans"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full neomorph-button py-3 text-center text-xs font-black tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all rounded-xl cursor-pointer shadow-md inline-flex items-center justify-center gap-1.5 font-sans"
                      >
                        <span className="material-symbols-outlined text-[16px]">draw</span>
                        {lang === "es" ? "SELLAR Y GUARDAR EN ARCHIVOS" : "SEAL AND SAVE TO ARCHIVES"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};