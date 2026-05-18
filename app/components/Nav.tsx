"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: scrolled ? "rgba(250,249,246,0.92)" : "transparent" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-300"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span style={{ color: "#1a5c3a" }} className="text-xl">⬡</span>
          <span className="font-medium tracking-tight text-[#1a1a1a]">CropSense</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="hidden sm:block text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">How it works</a>
          <a href="#traction" className="hidden sm:block text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">Results</a>
          <a href="#team" className="hidden sm:block text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">Team</a>
          <a
            href="#hero"
            style={{ backgroundColor: "#1a5c3a" }}
            className="px-5 py-2 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Apply for Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
