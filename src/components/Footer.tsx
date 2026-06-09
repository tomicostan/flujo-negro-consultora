/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_CTA } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-brand-dark border-t border-brand-border py-12 md:py-16 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo Brand Title */}
          <div>
            <div className="font-sans font-extrabold text-xl tracking-tighter uppercase mb-2">
              <span className="text-accent">Flujo</span>
              <span className="text-white">Negro</span>
            </div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
              Del caos al flujo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link to="/" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link to="/servicios" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors">
              Servicios
            </Link>
            <Link to="/caso" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors">
              Caso Bravo
            </Link>
            <Link to="/equipo" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-accent transition-colors">
              El Equipo
            </Link>
          </div>
        </div>

        {/* Technical details block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-brand-border-muted gap-4">
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider">
            &copy; {currentYear} FLUJO NEGRO CONSULTORA. Hecho para transformación digital directa.
          </p>
          <div className="flex items-center gap-6 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              [Soporte Técnico]
            </a>
            <span className="text-gray-800">|</span>
            <span>Estilo Premium Dark v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
