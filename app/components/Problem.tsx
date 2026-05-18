export default function Problem() {
  const stats = [
    { number: "₹90,000Cr", label: "lost annually to crop disease in India", sub: "Wheat, rice & cotton hit hardest" },
    { number: "40%", label: "of pesticide use in India is unnecessary", sub: "India is the 4th largest pesticide consumer globally" },
    { number: "146M", label: "farming households in India", sub: "Avg. farm size just 1.1 hectares — every acre counts" },
  ];

  return (
    <section id="problem" className="py-24" style={{ backgroundColor: "#faf9f6" }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#9a9a9a" }}>The Problem</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl mb-6 font-normal" style={{ color: "#1a1a1a" }}>
          Farmers are over-applying pesticides — and they know it.
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "#6b6b6b" }}>
          India uses over 60,000 tonnes of pesticides annually — and up to 40% of it is applied without
          a confirmed threat. With 146 million farming households and average land holdings under 1.1 hectares,
          every rupee wasted on unnecessary chemicals hits hard. The cost is financial, environmental, and irreversible.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.number} className="p-8 rounded-2xl border" style={{ backgroundColor: "#fff", borderColor: "#e8e4de" }}>
              <p className="text-4xl font-light tracking-tight mb-2" style={{ color: "#1a1a1a" }}>{s.number}</p>
              <p className="text-sm font-medium mb-1" style={{ color: "#1a1a1a" }}>{s.label}</p>
              <p className="text-xs" style={{ color: "#9a9a9a" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Diamond divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: "#e8e4de" }} />
          <span style={{ color: "#1a5c3a" }}>◆</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e8e4de" }} />
        </div>
      </div>
    </section>
  );
}
