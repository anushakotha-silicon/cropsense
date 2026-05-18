export default function Hero() {
  const cells = Array.from({ length: 48 }, (_, i) => {
    const colors = [
      "bg-green-100", "bg-green-100", "bg-green-100", "bg-green-200",
      "bg-green-200", "bg-green-100", "bg-green-100", "bg-green-100",
      "bg-green-100", "bg-green-200", "bg-green-100", "bg-yellow-100",
      "bg-green-100", "bg-green-100", "bg-green-200", "bg-green-100",
      "bg-green-100", "bg-green-100", "bg-yellow-200", "bg-orange-200",
      "bg-green-100", "bg-green-200", "bg-green-100", "bg-green-100",
      "bg-green-100", "bg-green-100", "bg-red-200", "bg-orange-100",
      "bg-green-100", "bg-green-200", "bg-green-100", "bg-green-100",
      "bg-green-100", "bg-green-100", "bg-green-200", "bg-green-100",
      "bg-green-200", "bg-green-100", "bg-green-100", "bg-green-100",
      "bg-green-100", "bg-green-200", "bg-green-100", "bg-green-100",
      "bg-green-100", "bg-green-100", "bg-green-200", "bg-green-100",
    ];
    return colors[i % colors.length];
  });

  return (
    <section id="hero" className="pt-32 pb-24 md:pt-40 md:pb-32" style={{ backgroundColor: "#faf9f6" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-6"
          style={{ backgroundColor: "#e8f3ed", color: "#1a5c3a" }}
        >
          Computer Vision for Sustainable Farming
        </div>

        <h1 className="text-5xl md:text-7xl leading-[1.02] tracking-tight font-normal mb-6 max-w-4xl mx-auto" style={{ color: "#1a1a1a" }}>
          Cut pesticide use by{" "}
          <span style={{ color: "#1a5c3a" }}>40%.</span>
          <br />
          Without losing a single crop.
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#6b6b6b" }}>
          CropSense&apos;s AI scans Indian fields — wheat, rice, cotton, sugarcane — identifies threats
          before they spread, and recommends the minimum effective treatment in your language.
          Smarter farming. Cleaner soil. More in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="#"
            style={{ backgroundColor: "#1a5c3a" }}
            className="px-7 py-3.5 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Apply for Beta
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3.5 rounded-full text-sm transition-colors"
            style={{ border: "1px solid #d4cfc7", color: "#6b6b6b" }}
          >
            See How It Works →
          </a>
        </div>

        <p className="text-xs" style={{ color: "#9a9a9a" }}>
          Built for India. Tested in Punjab, Haryana & Telangana. Launching Kharif 2025.
        </p>

        {/* CSS Mock Dashboard */}
        <div className="mt-16 rounded-2xl border overflow-hidden shadow-xl mx-auto max-w-3xl" style={{ borderColor: "#e8e4de", backgroundColor: "#fff" }}>
          {/* Window chrome */}
          <div className="h-10 flex items-center px-4 gap-1.5" style={{ backgroundColor: "#f0f0f0" }}>
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-yellow-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
            <span className="ml-4 text-xs" style={{ color: "#9a9a9a" }}>CropSense — Field Scan Dashboard</span>
          </div>
          {/* Dashboard content */}
          <div className="p-5" style={{ backgroundColor: "#f0faf4" }}>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Block 7A — Wheat Field</p>
                <p className="text-xs" style={{ color: "#6b6b6b" }}>Scan completed 4 min ago · 48 zones analyzed</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>
                ● Live
              </span>
            </div>
            {/* Heatmap grid */}
            <div className="grid grid-cols-8 gap-1 mb-4">
              {cells.map((color, i) => (
                <div key={i} className={`${color} rounded aspect-square`} />
              ))}
            </div>
            {/* Detection labels */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#15803d" }}>
                ✓ 89% Healthy
              </span>
              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#ffedd5", color: "#c2410c" }}>
                ⚠ Aphid cluster · Zone 3C
              </span>
              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#e8f3ed", color: "#1a5c3a" }}>
                → Treat 0.4 acres · Min. effective dose
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
