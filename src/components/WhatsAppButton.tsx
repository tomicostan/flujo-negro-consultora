/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_CTA } from "../constants";

export default function WhatsAppButton() {
  return (
    <div id="whatsapp-sticky-container" className="fixed bottom-6 right-6 z-50">
      <motion.a
        id="whatsapp-sticky-button"
        href={WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex items-center gap-3 bg-accent hover:bg-accent-hover text-brand-dark px-5 py-4 rounded-full font-bold shadow-xl shadow-accent/10 transition-colors group border border-brand-dark/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-dark"></span>
        </span>
        
        <MessageCircle className="h-6 w-6 stroke-[2.5]" />
        
        <span className="text-sm font-extrabold tracking-tight uppercase">
          Escribinos por WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
