import React, { useState } from "react";
import { motion } from "motion/react";
import { timelineEvents } from "../data";
import { translations, getLocalizedTimeline, Language } from "../translations";

interface TimelineViewProps {
  lang: Language;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ lang }) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  
  const t = translations[lang];
  const localizedTimeline = getLocalizedTimeline(timelineEvents, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-12 animate-fade-in"
    >
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="font-label text-xs font-bold text-primary mb-3 block tracking-[0.3em] uppercase">
          {t.annalsOfElderDays}
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
          {t.timelineTitle}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-12 rounded-full neo-inset"></div>
          <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <div className="h-1 w-12 rounded-full neo-inset"></div>
        </div>
      </div>

      {/* Timeline main flow container */}
      <div className="relative py-12 px-4">
        {/* Central vertical line matching the template */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 timeline-line-neo hidden md:block"></div>

        <div className="space-y-24">
          {localizedTimeline.map((evt, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeEvent === evt.id;

            return (
              <div
                key={evt.id}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } group`}
              >
                {/* Text Block */}
                <div
                  className={`w-full md:w-[45%] flex flex-col ${
                    isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
                  } mb-6 md:mb-0 transition-all duration-500`}
                >
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 font-label">
                    {evt.isClimax ? t.climaxAge : t.historicMilestone}
                  </span>
                  <h3 className="font-headline text-xl md:text-2xl font-black text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {evt.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {evt.description}
                  </p>

                  <button
                    onClick={() => setActiveEvent(isActive ? null : evt.id)}
                    className="mt-3 text-[10px] font-bold text-primary uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer select-none"
                  >
                    {isActive ? t.hideChronicle : t.viewScribesNotes}
                  </button>

                  {/* Expandable neomorphic note block */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 p-4 neo-inset rounded-xl text-left w-full text-xs text-on-surface-variant italic border-l-2 border-primary leading-relaxed"
                    >
                      {t.scribeNoteText}
                    </motion.div>
                  )}
                </div>

                {/* Central Circle Node */}
                <div
                  onClick={() => setActiveEvent(isActive ? null : evt.id)}
                  className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full z-20 flex items-center justify-center cursor-pointer transition-all border-4 border-surface ${
                    isActive ? "node-neo-active" : "node-neo hover:scale-110"
                  } hidden md:flex`}
                >
                  {evt.isClimax ? (
                    <span className="text-[10px] font-black text-white">FA</span>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                  )}
                </div>

                {/* Imagery block */}
                <div className="w-full md:w-[45%] flex justify-center">
                  <div className="p-2 neo-flat rounded-2xl md:rounded-3xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 w-full">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full aspect-video object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pre-Age Divider and Inscription */}
      <div className="mt-24 pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-6">
        <div className="flex items-center w-full max-w-md gap-4">
          <div className="h-px bg-outline-variant/50 flex-1"></div>
          <span className="material-symbols-outlined text-primary text-2xl select-none">
            auto_awesome
          </span>
          <div className="h-px bg-outline-variant/50 flex-1"></div>
        </div>
        <p className="font-label text-xs font-extrabold text-on-surface-variant text-center max-w-sm leading-loose tracking-[0.2em] uppercase">
          {t.endedFirstAge}
        </p>
      </div>
    </motion.div>
  );
};
