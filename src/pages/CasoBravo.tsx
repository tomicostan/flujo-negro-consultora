/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Unlink, 
  FileText, 
  Keyboard, 
  MessageSquareOff, 
  ShieldAlert, 
  Compass, 
  FileCheck2, 
  Users, 
  MapPin, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { WHATSAPP_CTA } from "../constants";

export default function CasoBravo() {
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

  const findings = [
    {
      id: 1,
      title: "Fragmentación total",
      description: "Sitrack, Google Drive, planillas Excel paralelas, el Portal Puma y la AFIP operan en silos rigurosos. Ningún sistema dialoga con otro, forzando transcripciones interminables.",
      icon: <Unlink className="h-5 w-5 text-accent" />
    },
    {
      id: 2,
      title: "Dependencia del papel",
      description: "Los remitos físicos manuscritos son el núcleo de registro de los viajes. Su extravío o demora en la recepción arruina la cadena de facturación y retrasa la caja.",
      icon: <FileText className="h-5 w-5 text-accent" />
    },
    {
      id: 3,
      title: "Carga manual agotadora",
      description: "Cada viaje implica cargar manualmente datos idénticos en múltiples portales del Estado (AFIP/ARCA). El personal administrativo está saturado y sin margen para escalar.",
      icon: <Keyboard className="h-5 w-5 text-accent" />
    },
    {
      id: 4,
      title: "Comunicación sin trazabilidad",
      description: "La coordinación del despacho operativo se realiza de forma libre a través de chats de WhatsApp individuales y llamadas de voz. Cero historial formal o protocolos auditarles.",
      icon: <MessageSquareOff className="h-5 w-5 text-accent" />
    },
    {
      id: 5,
      title: "Sin seguridad informática",
      description: "La información crítica de la empresa (tarifas, rutas sensibles, base de clientes) descansa en carpetas de Drive genéricas, sin roles de acceso definidos ni plan de contingencia.",
      icon: <ShieldAlert className="h-5 w-5 text-accent" />
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen py-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in">

        {/* --- PAGE HEADER --- */}
        <section id="caso-header" className="mb-16 md:mb-24 text-center md:text-left">
          <motion.div 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-accent mb-3"
          >
            Estudio de Situación
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Un caso real. <span className="text-accent block md:inline">Sin maquillaje.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-wider block mt-2"
          >
            Estudio de diagnóstico inicial elaborado por Flujo Negro
          </motion.p>
        </section>

        {/* --- BLOCK 1: SITUACIÓN --- */}
        <section id="block-client" className="mb-16 md:mb-24">
          <motion.h2 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-brand-border pb-2 flex items-center gap-2"
          >
            <Briefcase className="h-4 w-4 text-accent" />
            El Cliente
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="bg-brand-card border border-brand-border p-6 md:p-8 rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
              B.L.Y.T S.R.L. <span className="text-gray-400 text-sm font-normal">/ Jorge Bravo Transporte y Logística</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Empresa familiar especializada en el transporte terrestre de cargas sumamente peligrosas (combustibles y derivados líquidos). Con sede operativa en Bahía Blanca, Provincia de Buenos Aires.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>Nómina aproximada: ~25 empleados permanentes.</span>
                </div>
              </div>
              
              <div className="bg-brand-dark/50 border border-brand-border-muted p-4 rounded-xl space-y-3 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span><strong>Base:</strong> Bahía Blanca</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" />
                  <span><strong>Operación:</strong> Bahía Blanca–Campana–Córdoba</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" />
                  <span><strong>Choferes:</strong> 18 especializados (LNH activa)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-accent" />
                  <span><strong>Clientes clave:</strong> Puma Energy / Trafigura</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- BLOCK 2: DIAGNÓSTICO --- */}
        <section id="block-diagnostico" className="mb-16 md:mb-24">
          <motion.h2 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-brand-border pb-2 flex items-center gap-2"
          >
            <FileCheck2 className="h-4 w-4 text-accent" />
            Lo que encontramos
          </motion.h2>

          <div className="space-y-4">
            {findings.map((finding) => (
              <motion.div 
                key={finding.id}
                variants={itemVariants}
                className="bg-brand-card hover:bg-brand-card-hover border border-brand-border p-6 rounded-xl transition-colors flex gap-4 md:gap-6 items-start"
              >
                <div className="h-10 w-10 bg-accent/5 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  {finding.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg uppercase tracking-tight mb-2 flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-600">{`[0${finding.id}]`}</span>
                    {finding.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {finding.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- BLOCK 3: MÉTODO --- */}
        <section id="block-method" className="mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 border-b border-brand-border pb-2 flex items-center gap-2"
          >
            <Compass className="h-4 w-4 text-accent" />
            Cómo lo analizamos
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="bg-brand-card/30 border border-brand-border/60 p-6 md:p-8 rounded-2xl relative overflow-hidden"
          >
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Para B.L.Y.T S.R.L. implementamos nuestra arquitectura metodológica uniendo relevamiento de infraestructura cloud, auditoría de silos de TI corporativa y auditoría de madurez digital Industry 4.0. El entregable consistió en el mapeo integral de cuellos de botella mediante una entrevista estructurada de 22 puntos específicos y el modelado posterior de un framework tecnológico de transformación.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-brand-border-muted font-mono text-[10px] text-gray-500 uppercase tracking-wider">
              <div>
                <span className="text-accent font-bold block mb-1">MÉTODO 01</span>
                <span>Infraestructura Cloud</span>
              </div>
              <div>
                <span className="text-accent font-bold block mb-1">MÉTODO 02</span>
                <span>Análisis de Madurez</span>
              </div>
              <div>
                <span className="text-accent font-bold block mb-1">MÉTODO 03</span>
                <span>Auditoría de 22 Preguntas</span>
              </div>
              <div>
                <span className="text-accent font-bold block mb-1">MÉTODO 04</span>
                <span>Roadmap Estratégico</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- COMPLIANCE NOTE ABOUT NO RESULT SIMULATION --- */}
        <section id="compliance-note" className="mb-12">
          <motion.div 
            variants={itemVariants}
            className="bg-accent/5 border border-accent/20 rounded-xl p-5 text-xs text-accent font-mono leading-relaxed"
          >
            <div className="font-extrabold uppercase mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent rounded-full animate-ping" />
              Estado actual del proyecto
            </div>
            Entregamos el diagnóstico integral y la Hoja de Ruta de Transformación al cliente Jorge Bravo. El plan contempla el orden prioritario de automatizaciones y el presupuesto correspondiente. De acuerdo a nuestra ética profesional e instrucciones organizacionales, no simulamos resultados de implementaciones previas a su ejecución real.
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              id="caso-whatsapp-final-cta"
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-brand-dark px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-200"
            >
              Consultá sobre el Roadmap de Bravo
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
