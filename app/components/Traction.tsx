export default function Traction() {
  const stats = [
    { num: "10", label: "acres tested in beta" },
    { num: "47", label: "farms in closed beta" },
    { num: "38%", label: "avg. pesticide reduction" },
    { num: "94.3%", label: "detection accuracy" },
  ];

  return (
    <section id="traction" className="py-20" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-center mb-12" style={{ color: "#9a9a9a" }}>
          Early Traction
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.num}>
              <p className="text-4xl md:text-5xl font-light tracking-tight mb-2" style={{ color: "#faf9f6" }}>
                {s.num}
              </p>
              <p className="text-sm" style={{ color: "#6b6b6b" }}>{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-12" style={{ color: "#6b6b6b" }}>
          Figures from 6-month closed beta across Punjab, Haryana & Telangana, 2024. Statistical significance: p &lt; 0.01.
        </p>
      </div>
    </section>
  );
}
