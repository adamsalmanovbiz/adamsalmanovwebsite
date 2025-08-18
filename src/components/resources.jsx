export function Resources() {
  const resources = [
    {
      title: "Free Guide: Recording Day",
      desc: "My checklist to get a month of content from one afternoon. Includes shot list + prompts.",
      action: "Download PDF",
    },
    {
      title: "Hook Bank (100+)",
      desc: "A JetBrains Mono-styled bank of hooks for Shorts/Reels/YouTube intros.",
      action: "Copy Template",
    },
    {
      title: "Gear & Setup",
      desc: "Minimal studio setup that looks premium. Camera, lights, audio, and environment.",
      action: "View Kit",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white"
     style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.6))" }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-white/50">
          Resources
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm mt-1">{item.desc}</p>
              </div>
              <button className="mt-6 inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500 transition">
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}