export default function Investors() {
  const partners = ["Sequoia Scout", "a16z Bio", "AgFunder", "Breakthrough Energy Fellows"];

  return (
    <section id="investors" className="py-24" style={{ backgroundColor: "#f0faf4" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#9a9a9a" }}>Investors & Partners</p>
        <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-normal" style={{ color: "#1a1a1a" }}>
          Applying to YC W25.
        </h2>
        <p className="text-lg leading-relaxed max-w-xl mx-auto mb-16" style={{ color: "#6b6b6b" }}>
          We&apos;re actively seeking seed investors aligned with sustainable agriculture and climate tech.
        </p>

        {/* YC Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-12" style={{ border: "2px solid #fed7aa", backgroundColor: "#fff7ed" }}>
          <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "#f97316" }}>
            YC
          </div>
          <div className="text-left">
            <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>Y Combinator W25 Applicant</p>
            <p className="text-xs" style={{ color: "#9a9a9a" }}>Winter 2025 batch</p>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {partners.map((p) => (
            <span key={p} className="text-sm font-medium tracking-wide" style={{ color: "#9a9a9a" }}>{p}</span>
          ))}
        </div>

        <p className="text-sm" style={{ color: "#6b6b6b" }}>
          Interested in investing?{" "}
          <a href="mailto:hello@cropsense.ai" style={{ color: "#1a5c3a" }} className="hover:underline">
            hello@cropsense.ai ↗
          </a>
        </p>
      </div>
    </section>
  );
}
