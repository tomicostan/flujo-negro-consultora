/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Eye, Gauge, Route, Check, MessageSquareCode, ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_CTA } from "../constants";

export default function Servicios() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  // Associate Lucide icons dynamically
  const getIcon = (id: string) => {
    switch(id) {
      case "diagnostico":
        return <Eye className="h-6 w-6 text-accent" />;
      case "madurez":
        return <Gauge className="h-6 w-6 text-accent" />;
      case "hoja-ruta":
        return <Route className="h-6 w-6 text-accent" />;
      default:
        return <Check className="h-6 w-6 text-accent" />;
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
        <section id="services-header" className="max-w-2xl mb-16 md:mb-24">
          <motion.div 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-accent mb-3"
          >
            Qué hacemos
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-6"
          >
            Nuestros servicios. <br />
            <span className="text-accent">Metodología práctica, sin maquillaje.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed font-sans"
          >
            No somos revendedores de licencias de software ni venimos a convencerte de comprar una plataforma puntual. Analizamos tu realidad operativa desde la neutralidad absoluta y planteamos un plan realizable. Por eso funcionamos.
          </motion.p>
        </section>

        {/* --- SERVICES GRID --- */}
        <section id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-28">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group bg-brand-card hover:bg-brand-card-hover border border-brand-border p-8 md:p-10 rounded-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="h-12 w-12 bg-accent/5 border border-accent/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent group-hover:text-brand-dark transition-all duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.id)}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits / Focus Areas bullets */}
                <div className="space-y-3 pt-6 border-t border-brand-border-muted mb-8">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                    Foco operativo
                  </span>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  id={`service-cta-${service.id}`}
                  href={WHATSAPP_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-brand-dark hover:bg-accent hover:text-brand-dark text-white border border-brand-border group-hover:border-accent/40 font-bold uppercase tracking-wider text-xs py-3.5 px-5 rounded-xl transition-all duration-200"
                >
                  Consultar por este módulo
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- BOTTOM HIGHLIGHT BANNER --- */}
        <section id="banner-section">
          <motion.div 
            variants={itemVariants}
            className="relative bg-brand-card border border-accent/20 rounded-3xl p-8 md:p-14 overflow-hidden shadow-2xl"
          >
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-60 w-60 bg-accent/2 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] uppercase tracking-wider rounded-md mb-4">
                  Compromiso de Honestidad
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                  ¿Buscás resultados reales o un informe de 200 páginas que nadie va a leer?
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  El primer paso es siempre un diagnóstico con los pies sobre la tierra. No forzamos metodologías que no se adaptan a tu volumen de equipo. No agregamos fricción innecesaria.
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  id="services-bottom-whatsapp-cta"
                  href={WHATSAPP_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-brand-dark px-8 py-5 rounded-full font-extrabold uppercase tracking-widest text-sm shadow-xl shadow-accent/5 transition-transform hover:-translate-y-0.5"
                >
                  <MessageSquareCode className="h-5 w-5" />
                  Escribinos gratis hoy
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
