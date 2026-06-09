/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Users, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS, WHATSAPP_CTA } from "../constants";

export default function Equipo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen py-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* --- PAGE HEADER --- */}
        <section id="equipo-header" className="max-w-2xl mb-16 md:mb-24">
          <motion.div 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-accent mb-3"
          >
            Quiénes somos
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6"
          >
            El Equipo. <br />
            <span className="text-accent">Experiencia directa de trinchera.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed font-sans"
          >
            No somos teóricos corporativos de pizarrón. Estudiamos sistemas, auditamos redes, optimizamos depósitos y escribimos código en el barro de la operación diaria. Nos guía la honestidad brutal y las metodologías que realmente funcionan.
          </motion.p>
        </section>

        {/* --- MEMBERS GRID (2 col mobile, 3-4 col desktop) --- */}
        <section id="equipo-grid" className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: "#AAFF00" }}
                className="bg-brand-card hover:bg-brand-card-hover border border-brand-border p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between items-center text-center group"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Avatar Selector */}
                  <div className="relative h-18 w-18 rounded-full bg-brand-dark/80 group-hover:bg-accent border border-brand-border group-hover:border-accent text-accent group-hover:text-brand-dark flex items-center justify-center mb-6 transition-all duration-300 font-mono text-lg font-black tracking-tight shadow-inner">
                    <span>{member.initials}</span>
                    <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  </div>

                  <h3 className="text-white group-hover:text-white font-extrabold text-sm md:text-base leading-snug tracking-tight mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[180px]">
                    {member.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border-muted w-full font-mono text-[9px] text-gray-600 uppercase tracking-wider">
                  FN_CONSULTOR_{index + 1}
                </div>
              </motion.div>
            ))}

            {/* Recruiter / Joining placeholder card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-brand-card/50 border border-brand-border-muted border-dashed p-6 rounded-2xl flex flex-col justify-between items-center text-center group"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="h-18 w-18 rounded-full border border-brand-border border-dashed flex items-center justify-center text-gray-500 mb-6 font-mono text-xl">
                  +
                </div>
                <h3 className="text-gray-300 font-bold text-sm uppercase tracking-tight mb-2">
                  ¿Querés sumarte?
                </h3>
                <p className="text-gray-500 text-xs">
                  Buscamos analistas hambrientos de procesos.
                </p>
              </div>
              <div className="mt-6 font-mono text-[9px] text-accent font-bold uppercase tracking-widest cursor-pointer hover:underline" onClick={() => window.open(WHATSAPP_CTA, '_blank')}>
                Postularse
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BOTTOM TEAM CTA --- */}
        <section id="equipo-footer-cta">
          <motion.div 
            variants={itemVariants}
            className="bg-brand-card/30 border border-brand-border/60 py-12 px-6 rounded-3xl text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center justify-center h-10 w-10 bg-accent/5 rounded-full text-accent mb-6">
              <Sparkles className="h-5 w-5" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              ¿Querés trabajar con nosotros?
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-sans">
              No esperes un proceso corporativo burocrático de 6 meses. Mandanos un mensaje directo y charlemos sobre cómo podemos colaborar.
            </p>
            
            <a
              id="team-whatsapp-cta"
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-brand-dark px-8 py-4.5 rounded-full font-extrabold uppercase tracking-wider text-xs shadow-lg shadow-accent/5 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Charlemos por WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
