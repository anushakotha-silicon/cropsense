export default function Solution() {
  const features = [
    {
      icon: "◎",
      title: "Early Detection",
      body: "Identifies 150+ pest and disease signatures — from rice blast and brown plant hopper to cotton bollworm and wheat rust — 7–14 days before visible symptoms.",
    },
    {
      icon: "◈",
      title: "Crop-Specific Diagnosis",
      body: "Models trained per crop: wheat (Punjab/Haryana), paddy (AP/Bengal), cotton (Vidarbha/Telangana), sugarcane (UP/Maharashtra). 94.3% accuracy across all six.",
    },
    {
      icon: "◇",
      title: "Minimal Treatment",
      body: "Recommends the lowest effective dose in local language (Hindi, Telugu, Punjabi). Average 38% reduction in pesticide spend — saving ₹4,000–₹12,000 per acre per season.",
    },
  ];

  return (
    <section id="solution" className="py-24" style={{ backgroundColor: "#f0faf4" }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#9a9a9a" }}>The Solution</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl mb-4 font-normal" style={{ color: "#1a1a1a" }}>
          Computer vision that sees what the human eye misses.
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "#6b6b6b" }}>
          CropSense combines satellite imagery, drone feeds, and smartphone scans with a multi-model AI
          stack trained on 12 million crop images — built specifically for India&apos;s most critical crops:
          wheat, rice, cotton, sugarcane, pulses, and vegetables.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl border" style={{ backgroundColor: "#fff", borderColor: "#e8e4de" }}>
              <p className="text-2xl mb-4" style={{ color: "#1a5c3a" }}>{f.icon}</p>
              <p className="text-lg tracking-tight mb-3 font-normal" style={{ color: "#1a1a1a" }}>{f.title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
