/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen selection:bg-neon-red/30 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-red z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative z-0">
        <Hero />
        <Content />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2026 <span className="text-soft-white font-bold">Ryan.</span> All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-neon-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-red transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-red transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-neon-red/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-neon-red/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>
    </main>
  );
}

