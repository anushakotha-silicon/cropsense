export default function Team() {
  const founders = [
    {
      initials: "AK",
      name: "Anusha Kotha",
      title: "Founder & CEO",
      bio: "Visionary behind CropSense's AI platform for India. Deep roots in Indian agriculture — building technology that puts precision tools in the hands of small and marginal farmers across Telangana, Punjab, and beyond.",
    },
    {
      initials: "DD",
      name: "Dheeraj Dudipala",
      title: "Co-founder & CTO",
      bio: "Engineer driving CropSense's computer vision stack. Focused on making precision agriculture accessible across India's diverse crop regions — from Vidarbha cotton to AP paddy — in local languages, on any smartphone.",
    },
  ];

  return (
    <section id="team" className="py-24" style={{ backgroundColor: "#faf9f6" }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#9a9a9a" }}>The Team</p>
        <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-normal" style={{ color: "#1a1a1a" }}>
          Built by people who&apos;ve spent time in the field.
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "#6b6b6b" }}>
          A rare combination of deep ML research and real-world agricultural experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <div
              key={f.name}
              className="p-8 rounded-2xl border flex gap-6"
              style={{ backgroundColor: "#fff", borderColor: "#e8e4de" }}
            >
              <div
                className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-light"
                style={{ backgroundColor: "#e8f3ed", color: "#1a5c3a" }}
              >
                {f.initials}
              </div>
              <div>
                <p className="text-lg font-medium tracking-tight" style={{ color: "#1a1a1a" }}>{f.name}</p>
                <p className="text-sm mb-3" style={{ color: "#1a5c3a" }}>{f.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{f.bio}</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-xs hover:text-[#1a1a1a] transition-colors" style={{ color: "#9a9a9a" }}>LinkedIn ↗</a>
                  <a href="#" className="text-xs hover:text-[#1a1a1a] transition-colors" style={{ color: "#9a9a9a" }}>Twitter ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid #e8e4de" }}>
          <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#9a9a9a" }}>Advisors</p>
          <p className="text-sm" style={{ color: "#6b6b6b" }}>
            Dr. Ravi Kumar, ICAR Plant Pathology
            <span className="mx-3" style={{ color: "#d4cfc7" }}>·</span>
            Dr. Meena Rao, ICRISAT AgriTech
            <span className="mx-3" style={{ color: "#d4cfc7" }}>·</span>
            Suresh Patel, former VP UPL Limited
          </p>
        </div>
      </div>
    </section>
  );
}
