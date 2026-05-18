export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Scan",
      body: "Point your phone, connect a drone, or use our IoT sensor network. CropSense captures multispectral imagery of your fields.",
    },
    {
      num: "2",
      title: "Analyze",
      body: "Our vision model processes imagery against 12M training samples. Threat type, location, and severity are identified in real time.",
    },
    {
      num: "3",
      title: "Act",
      body: "You receive a precise treatment prescription — exact location, recommended compound, and minimum effective dose. No more blanket spraying.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: "#faf9f6" }}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase mb-4 text-center" style={{ color: "#9a9a9a" }}>How It Works</p>
        <h2 className="text-3xl md:text-4xl tracking-tight text-center mb-4 font-normal" style={{ color: "#1a1a1a" }}>
          From field to recommendation in under 4 hours.
        </h2>
        <p className="text-lg text-center mb-16 max-w-xl mx-auto" style={{ color: "#6b6b6b" }}>
          A simple three-step loop that keeps your crops protected without chemical overload.
        </p>

        <div className="relative grid md:grid-cols-3 gap-0">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute h-px top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)]"
            style={{ backgroundColor: "#d4cfc7" }}
          />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center px-8 mb-10 md:mb-0">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium mb-6 relative z-10"
                style={{
                  border: "2px solid #1a5c3a",
                  backgroundColor: "#e8f3ed",
                  color: "#1a5c3a",
                }}
              >
                {s.num}
              </div>
              <p className="text-xl tracking-tight mb-3 font-normal" style={{ color: "#1a1a1a" }}>{s.title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
