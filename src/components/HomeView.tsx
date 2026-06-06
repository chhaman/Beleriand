import React from "react";
import { motion } from "motion/react";
import { translations, Language } from "../translations";

interface HomeViewProps {
  onTabChange: (tab: string, arg?: string) => void;
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({ onTabChange, lang }) => {
  const t = translations[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-12 animate-fade-in"
    >
      {/* Hero Header Section */}
      <section className="relative">
        <div className="relative w-full h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-neo-flat border-4 md:border-8 border-surface transition-transform duration-700">
          <img
            alt="Thangorodrim y las Tierras de Beleriand"
            className="w-full h-full object-cover brightness-[0.70] contrast-125 saturate-100 hover:scale-[1.03] transition-transform duration-[2.5s] ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI2fTxv1jNS5l4IOg_ZLsjsOYKAUq1Y8a7jabQ-RMSjiJ5BLCzsdQRnJuh1zoLXl-Q6vwJlh6r9TRIXEEee3o17sqUE8l8dLNTxnctTi1c0ZEsbUEbdn5tPmXqOfkYwNy_b8YCP54umuhG3S2tcrTVa7SIr2BSvAvkGwCo8Q0qMks20Y77CHaeZAGhQnFR6vwIXxYnBqXXKmk6d4RTrAzvhciILETl99gnLkWQE4zG56IKS_z-97cweeJ1INZxaoTgXYUAX5AS4A"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md font-headline">
              {t.beleriandEnc}
            </h2>
            <p className="text-sm md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed font-body">
              {t.youngWorldQuote}
            </p>
          </div>
        </div>
      </section>

      {/* Ornate Divider */}
      <div className="flex items-center justify-center gap-8 py-2">
        <div className="h-1 bg-surface-container-highest rounded-full flex-1 neo-pressed"></div>
        <div className="w-12 h-12 rounded-full neo-button flex items-center justify-center text-primary border border-white/5 shadow-md">
          <span className="material-symbols-outlined text-primary text-xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        </div>
        <div className="h-1 bg-surface-container-highest rounded-full flex-1 neo-pressed"></div>
      </div>

      {/* Featured Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Main Story Card: Chronicles of Silmarils */}
        <div className="md:col-span-8 group relative rounded-3xl neo-card p-8 md:p-10 overflow-hidden border border-white/10 flex flex-col justify-between">
          <div className="relative z-10">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">{t.cantarGestas}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight font-headline">
              {t.cronicasSilmarils}
            </h3>
            <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed text-sm md:text-base font-body">
              {t.cronicasDesc}
            </p>
          </div>
          <div className="relative z-10">
            <button
              onClick={() => onTabChange("characters", "feanor")}
<<<<<<< HEAD
              className="px-6 py-3.5 rounded-xl neo-button text-primary font-bold text-xs md:text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer uppercase tracking-wider border border-white/5"
=======
              className="inline-flex items-center gap-3 bg-white/20 dark:bg-black/40 hover:bg-primary dark:hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-xl font-bold text-xs md:text-sm shadow-md transition-all active:scale-95 cursor-pointer uppercase tracking-wider border border-white/10"
>>>>>>> f70f251b6fd7c0ea7a3b3540a328d8265f790281
            >
              {t.consultFeanor} <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <img
<<<<<<< HEAD
            className="absolute -right-8 -bottom-8 w-1/3 md:w-1/2 h-1/2 object-contain opacity-40 md:opacity-55 group-hover:scale-115 group-hover:opacity-75 transition-all duration-700 pointer-events-none filter brightness-110 contrast-110"
=======
            className="absolute -right-8 -bottom-8 w-1/3 md:w-1/2 h-1/2 object-contain opacity-15 md:opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 pointer-events-none"
>>>>>>> f70f251b6fd7c0ea7a3b3540a328d8265f790281
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4unGPKxe2wferSv9Nvui4UmU-c4xouvhfkL7DEgCEhKV8fymiqJY1QMltcF1kbTBoYuN4CmZdjgBVXeYJv-Z0EkMusu6-_qKG6MgceHFUuE-x4cyZuSy1QsaXQ4cMMqZsgTEqSKbTP5JXt6xdRNA-KLyFt6lMyjHHZkf-nzS_o9yiiL88Ut8ef8OJ1xgOwkeR77c0EVnmS2jUxe6Q3zwOOyPsE02g05nOjrN2FEF1n-q82bJ1ZLyGv_5uc6WfJ5hdD5golKmHzQ"
            alt="Silmaril visual silhouette decoration"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Secondary Column: Edain Realms + Shadow of the North */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Edain Realms card */}
          <div className="rounded-3xl neo-card p-6 border border-white/10 flex flex-col justify-between flex-1">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 block">{t.soberaniaHombres}</span>
              <h3 className="text-lg font-bold text-primary mb-3">{t.reinosEdain}</h3>
              <p className="text-xs md:text-sm text-on-surface-variant mb-4 leading-relaxed font-body">
                {t.reinosEdainDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container rounded-full shadow-inner text-[10px] font-extrabold text-secondary uppercase tracking-widest border border-white/10">
                Hithlum
              </span>
              <span className="px-3 py-1 bg-surface-container rounded-full shadow-inner text-[10px] font-extrabold text-secondary uppercase tracking-widest border border-white/10">
                Dor-lómin
              </span>
              <span className="px-3 py-1 bg-surface-container rounded-full shadow-inner text-[10px] font-extrabold text-secondary uppercase tracking-widest border border-white/10">
                Brethil
              </span>
            </div>
          </div>

          {/* Shadow of the North card */}
<<<<<<< HEAD
          <div className="rounded-3xl neo-card p-6 border border-white/10 flex flex-col justify-between flex-1 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 block">{t.pitsOfIron}</span>
              <h3 className="text-lg font-bold mb-3 font-headline text-primary">{t.sombraNorte}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed font-body">
                {t.sombraDesc}
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-on-surface-variant/5 dark:text-white/5 group-hover:rotate-12 group-hover:scale-110 transition-transform pointer-events-none select-none">
=======
          <div className="rounded-3xl bg-inverse-surface text-white p-6 shadow-neo-elevated relative overflow-hidden group flex-1">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold text-primary-fixed uppercase tracking-widest block mb-1">{t.pitsOfIron}</span>
              <h3 className="text-lg font-bold mb-2 font-headline text-primary-fixed-dim">{t.sombraNorte}</h3>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-body">
                {t.sombraDesc}
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-white/5 opacity-50 group-hover:rotate-12 group-hover:scale-110 transition-transform pointer-events-none select-none">
>>>>>>> f70f251b6fd7c0ea7a3b3540a328d8265f790281
              skull
            </span>
          </div>
        </div>
      </div>

      {/* Atlas Banner Section */}
      <section className="rounded-3xl neo-pressed p-1 bg-surface-container-low/50">
        <div className="flex flex-col lg:flex-row gap-8 items-center p-8 md:p-12 bg-surface/50 rounded-2xl border border-white/10">
          <div className="lg:w-1/2 space-y-4">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{t.legendaryCartography}</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight font-display">
              {t.firstAgeCartography}
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-body">
              {t.cartographyDesc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onTabChange("atlas")}
                className="px-6 py-3.5 rounded-xl neo-button text-primary font-bold text-xs md:text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[18px]">map</span>
                {t.openAtlas}
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-neo-flat border-4 md:border-6 border-surface group">
              <img
                alt="Beleriand Cartography preview"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYZWttlIX-7qp-JYKdutO83hv1rHpeorkHDy3DkAebDZ19gJqD3SyImGD-lURgGW5jh8moYHS1MuyRyq3LEB4UXbopynbK4clym4BSfd9sRMHZ3pWKa1eivCXz_sFwlqF1EtHfNJe0XcVWHpvhPq8m3F8ZLO-a6-TeW_0PYPVz28G8bk0c_151MkDDixPu7gZzgAqma-wmpoHf5XhPAYtjcWuXpMmUadDZIoIS5Li-4GhV_1jcYuG4stvH1oL60PGN6GenQsUsSw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Scholar Quote Footer */}
      <section className="p-6 md:p-8 rounded-2xl neo-flat text-center border border-white/10">
        <p className="text-xs md:text-sm text-on-surface-variant italic leading-relaxed font-body max-w-2xl mx-auto">
          {t.gondolinQuote}
        </p>
        <span className="block mt-2 text-[9px] font-bold text-primary tracking-widest uppercase">{t.loreMastersPrefix}</span>
      </section>
    </motion.div>
  );
};
