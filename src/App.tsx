/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import CasoBravo from "./pages/CasoBravo";
import Equipo from "./pages/Equipo";

// Custom helper helper to jump to top on navigation (uniquely premium detail)
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div id="flujo-negro-root-wrapper" className="flex flex-col min-h-screen bg-brand-dark text-gray-200 relative">
        {/* Navigation Core */}
        <Navbar />

        {/* Content body offset on desktop to make room for fixed sidebar */}
        <div className="flex flex-col flex-grow md:pl-72 min-h-screen">
          {/* Core Subpages */}
          <main id="app-content-body" className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/caso" element={<CasoBravo />} />
              <Route path="/equipo" element={<Equipo />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>

        {/* Shared Adhesive WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
