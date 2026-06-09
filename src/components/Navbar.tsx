/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_CTA } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Caso Bravo", path: "/caso" },
    { name: "El Equipo", path: "/equipo" },
  ];

  return (
    <header id="app-header" className="sticky top-0 md:fixed md:left-0 md:top-0 md:h-screen md:w-72 z-40 w-full md:w-auto bg-brand-dark/95 backdrop-blur-md border-b border-brand-border md:border-b-0 md:border-r md:border-white/10 transition-all duration-300">
      
      {/* MOBILE HEADER (Only visible below md) */}
      <div className="flex md:hidden h-20 items-center justify-between px-6">
        {/* Typographic Wordmark */}
        <NavLink 
          id="brand-wordmark-mobile"
          to="/" 
          onClick={closeMenu} 
          className="flex items-center select-none outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-0.5"
        >
          <span className="font-sans font-extrabold text-xl tracking-tighter uppercase whitespace-nowrap">
            <span className="text-accent">Flujo</span>
            <span className="text-white">Negro</span>
          </span>
        </NavLink>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="flex items-center justify-center p-2 text-gray-400 hover:text-white rounded-md border border-transparent hover:border-brand-border outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* DESKTOP SIDEBAR (Only visible from md up) */}
      <div className="hidden md:flex flex-col h-full justify-between p-8">
        <div className="space-y-16">
          {/* Wordmark and Concept tagline */}
          <NavLink
            id="brand-wordmark-desktop"
            to="/"
            className="block text-2xl font-black tracking-tighter leading-[0.9] outline-none select-none hover:opacity-90 transition-opacity"
          >
            <span className="text-accent">FLUJO</span>
            <br />
            <span className="text-white">NEGRO</span>
          </NavLink>

          {/* Menu items */}
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 cursor-pointer outline-none transition-all duration-200 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-1.5 h-1.5 transition-colors duration-200 ${isActive ? "bg-accent" : "bg-transparent group-hover:bg-accent"}`} />
                      <span className="text-sm uppercase tracking-widest font-extrabold text-white">
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Sidebar Info */}
        <div className="space-y-4">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] leading-relaxed">
            Consultora de<br />Transformación Digital
          </p>
          <div className="h-px w-8 bg-accent"></div>
          <div className="pt-2">
            <a
              id="sidebar-cta-whatsapp"
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-accent/10 hover:bg-accent border border-accent/20 hover:border-accent text-accent hover:text-brand-dark px-4 py-3 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200"
            >
              Hablemos hoy <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Animated Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden w-full bg-brand-dark/98 border-t border-brand-border overflow-hidden animate-fade-in"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) => 
                        `block text-base font-bold uppercase tracking-wider py-2 border-b border-brand-border-muted ${
                          isActive ? "text-accent" : "text-gray-300"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-4"
              >
                <a
                  id="mobile-nav-cta"
                  href={WHATSAPP_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-accent text-brand-dark font-extrabold uppercase py-4 rounded-xl text-center text-sm shadow-lg shadow-accent/5"
                >
                  Iniciar Conversación <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
