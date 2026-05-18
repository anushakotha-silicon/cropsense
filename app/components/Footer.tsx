"use client";
import { useState } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: "#1a5c3a" }} className="text-xl">⬡</span>
              <span className="font-medium tracking-tight" style={{ color: "#faf9f6" }}>CropSense</span>
            </div>
            <p className="text-sm" style={{ color: "#6b6b6b" }}>AI-powered precision agriculture. Less pesticide. Better yields.</p>
            <p className="text-xs mt-4" style={{ color: "#6b6b6b" }}>© 2025 CropSense, Inc. All rights reserved.</p>
          </div>

          {/* Right — email capture */}
          <div>
            <p className="text-sm font-medium mb-3" style={{ color: "#faf9f6" }}>Stay informed. No spam.</p>
            {submitted ? (
              <p className="text-sm" style={{ color: "#1a5c3a" }}>✓ We&apos;ll be in touch.</p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#faf9f6",
                  }}
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1a5c3a" }}
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-6 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {["#hero", "#problem", "#solution", "#how-it-works", "#traction", "#team"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs hover:text-[#faf9f6] transition-colors capitalize"
              style={{ color: "#6b6b6b" }}
            >
              {href.replace("#", "").replace(/-/g, " ")}
            </a>
          ))}
          <a href="mailto:hello@cropsense.ai" className="text-xs hover:text-[#faf9f6] transition-colors ml-auto" style={{ color: "#6b6b6b" }}>
            hello@cropsense.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
