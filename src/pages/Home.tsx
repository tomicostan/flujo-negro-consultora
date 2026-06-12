/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, AlertTriangle, MonitorX, HelpCircle as SiloIcon } from "lucide-react";
import { WHATSAPP_CTA } from "../constants";

export default function Home() {
  // Animation presets for staggered entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      {/* Corner Stats / Micro Labels matching theme */}
      <div className="absolute top-6 right-8 hidden xl:flex gap-12 text-[10px] uppercase tracking-widest text-white/30 z-30">
        <div className="flex flex-col gap-1 text-right">
          <span className="text-white/60 font-bold">Ubicación</span>
          <span>Buenos Aires, ARG</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-white/60 font-bold">Concepto</span>
          <span>Del Caos al Flujo</span>
        </div>
      </div>

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section id="hero" className="text-center mb-24 md:mb-32">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-normal text-white uppercase leading-tight md:leading-[0.95] mb-8"
          >
            Tu empresa no fracasa por <span className="italic">falta de ganas.</span> 
            <span className="block text-accent mt-4">Fracasa porque no sabe por dónde empezar.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transformamos el caos operativo en flujo digital continuo. Diseñamos un método honesto a medida de tu realidad, sin promesas mágicas ni recetas de manual.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              id="hero-whatsapp-cta"
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-brand-dark font-extrabold text-sm md:text-base tracking-wider uppercase px-8 py-5 rounded-full shadow-lg shadow-accent/10 transition-all duration-200 group"
            >
              Iniciar diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>

        {/* --- VIDEO SECTION --- */}
        <section id="video-presentation" className="mb-24 md:mb-32">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              Presentación Ejecutiva
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              ¿Qué es Flujo Negro? Mirá cómo trabajamos
            </h3>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative w-full aspect-video bg-zinc-900 rounded-2xl border border-brand-border overflow-hidden shadow-2xl group flex flex-col justify-between p-6 md:p-8"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-brand-dark/0 to-brand-dark/0 opacity-60" />

            {/* Simulated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            {/* Video Header metadata */}
            <div className="relative z-20 flex justify-between items-start font-mono text-[10px] text-gray-500 tracking-wider">
              <div>
                <span>VIDEO_REF: FN_INTRO_M_2026</span>
                <span className="block text-accent">STATUS: READY_TO_PLAY</span>
              </div>
              <div>
                <span>[0:00 / 2:45]</span>
              </div>
            </div>

            {/* Play Button Widget */}
            <div className="relative z-20 self-center flex flex-col items-center justify-center gap-4 cursor-pointer">
              <motion.div 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-accent/10 border border-accent flex items-center justify-center relative group-hover:bg-accent group-hover:border-accent transition-colors duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open(WHATSAPP_CTA, "_blank");
                }}
              >
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping group-hover:opacity-0 transition-opacity" />
                <Play className="h-6 w-6 md:h-8 md:w-8 fill-accent text-accent group-hover:fill-brand-dark group-hover:text-brand-dark transition-colors duration-300 translate-x-0.5" />
              </motion.div>
              <span className="text-xs uppercase font-mono tracking-widest text-gray-400 group-hover:text-accent transition-colors">
                Reproducir Método
              </span>
            </div>

            {/* Tech Specs block indicating the placeholder */}
            <div className="relative z-20 flex flex-col md:flex-row justify-between items-end md:items-center gap-4 pt-4 border-t border-brand-border/40">
              <div className="font-mono text-[11px] text-gray-400">
                <span className="text-accent underline cursor-pointer hover:text-white" onClick={() => window.open(WHATSAPP_CTA, '_blank')}>
                  [HACE CLIC PARA CONSULTAR DETALLES POR WHATSAPP]
                </span>
              </div>
              <div className="font-mono text-[9px] text-gray-600 uppercase text-right leading-tight max-w-[280px]">
                {/* Clear Placeholder Marker for Code Maintainer */}
                Código Fuente: Reemplazar este componente por &lt;iframe&gt; o etiqueta &lt;video&gt; con URL_VIDEO_YOUTUBE_O_RUTA_ARCHIVO
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- THE PROBLEM SECTION --- */}
        <section id="the-problem" className="mb-12">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              El Estorbo Operativo
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
              La transformación digital no es comprar licencias
            </h3>
            <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm md:text-base">
              Comprar un software caro no arregla un proceso roto. Al contrario, lo acelera. Para fluir, primero hay que entender por qué se traba el motor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Problem card 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-brand-card hover:bg-brand-card-hover border border-brand-border rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="text-6xl font-black text-accent/15 leading-none mb-4 select-none">"</div>
                <p className="text-white font-semibold text-base italic leading-snug mb-5">
                  Sabemos que hay que cambiar algo, pero por dónde empezamos...
                </p>
                <div className="h-px w-8 bg-accent/30 mb-5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sin diagnóstico claro, la lista de urgencias crece sola y ninguna decisión arranca.
                </p>
              </div>
              <div className="px-8 py-4 border-t border-brand-border-muted flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-accent/60" />
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Bloqueo 01 / Prioridad</span>
              </div>
            </motion.div>

            {/* Problem card 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-brand-card hover:bg-brand-card-hover border border-brand-border rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="text-6xl font-black text-accent/15 leading-none mb-4 select-none">"</div>
                <p className="text-white font-semibold text-base italic leading-snug mb-5">
                  Ya tenemos el sistema, pero nadie lo usa...
                </p>
                <div className="h-px w-8 bg-accent/30 mb-5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Herramientas costosas que el equipo rechaza. Todos terminan de vuelta en planillas Excel ocultas.
                </p>
              </div>
              <div className="px-8 py-4 border-t border-brand-border-muted flex items-center gap-3">
                <MonitorX className="h-4 w-4 text-accent/60" />
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Bloqueo 02 / Adopción</span>
              </div>
            </motion.div>

            {/* Problem card 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-brand-card hover:bg-brand-card-hover border border-brand-border rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="text-6xl font-black text-accent/15 leading-none mb-4 select-none">"</div>
                <p className="text-white font-semibold text-base italic leading-snug mb-5">
                  Ventas pide algo que ya tiene logística, pero nadie se entera...
                </p>
                <div className="h-px w-8 bg-accent/30 mb-5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cada área opera con su versión de la realidad. Cero visibilidad compartida.
                </p>
              </div>
              <div className="px-8 py-4 border-t border-brand-border-muted flex items-center gap-3">
                <SiloIcon className="h-4 w-4 text-accent/60" />
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Bloqueo 03 / Trazabilidad</span>
              </div>
            </motion.div>
          </div>

          {/* Under-the-Problem CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-brand-card/50 border border-brand-border/60 py-10 px-6 rounded-2xl max-w-2xl mx-auto"
          >
            <h4 className="text-white font-bold text-lg mb-2">
              ¿Te suena familiar este lío operativo?
            </h4>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              No dejes que el desorden frene el crecimiento. Hablemos de forma directa, sin chamuyo técnico.
            </p>
            <a
              id="problem-whatsapp-cta"
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-dark bg-accent hover:bg-accent-hover px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-200"
            >
              Hablemos sin compromisos
            </a>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
