import { useEffect, useRef } from "react";

export default function PortfolioCarousel({ items }) {
  // Fallback items so it renders even without props
  const fallback = [
    { slug: "agency-at-16", title: "Nodes.inc", image: "https://images.unsplash.com/photo-1553736026-ff14e0943df1?w=1200&q=60", desc: "12-video sprint → $3M ARR" },
    { slug: "founder-led-content", title: "Ben Sharf", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1200&q=60", desc: "90-day cadence • daily distribution" },
    { slug: "linkedin-authority", title: "LinkedIn Authority", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=60", desc: "100M views" },
    { slug: "growth-systems", title: "Growth Systems", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=60", desc: "Scaled a SaaS from $0 → $2.5M ARR" },
    { slug: "founder-networking", title: "Founder Networking", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=60", desc: "Built 500+ high-value relationships" },
    { slug: "viral-video-lab", title: "Viral Video Lab", image: "https://images.unsplash.com/photo-1602524200254-5a14f765a1e3?w=1200&q=60", desc: "25M+ cross-platform organic reach" },
    { slug: "nyc-startup", title: "NYC Startup Launch", image: "https://images.unsplash.com/photo-1549921296-3a4b186b5d5f?w=1200&q=60", desc: "Raised $1.2M pre-seed in 30 days" },
  ];
  const data = Array.isArray(items) && items.length ? items : fallback;

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Duplicate once for seamless loop
    el.innerHTML += el.innerHTML;

    // smooth marquee
    let x = 0;
    const speed = 0.35; // tweak: smaller = slower

    const step = () => {
      if (!pausedRef.current) {
        x += speed;
        const half = el.scrollWidth / 2;
        if (x >= half) x = 0; // instant wrap, no jump due to duplicate
        el.scrollLeft = x;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    // pause on hover (optional but nice)
    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden px-6 md:px-10">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-hidden hide-scrollbar"
        style={{ whiteSpace: "nowrap" }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none;}`}</style>

        {data.map((item, idx) => (
          <a
            key={`${item.slug}-${idx}`}
            href={`/articles/${item.slug}`}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#18181b] via-[#232326] to-[#101012]
                       overflow-hidden flex flex-col justify-end min-h-[260px] group hover:border-white/20 transition
                       shrink-0 w-[88%] sm:w-[70%] md:w-[46%] lg:w-[32%]"
            style={{ fontFamily: "Space Grotesk, Inter, system-ui", textDecoration: "none" }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition pointer-events-none"
                style={{ zIndex: 0 }}
              />
            )}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg,rgba(10,10,10,0.1) 40%,rgba(10,10,10,0.95) 100%)", zIndex: 1 }}
            />
            <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full w-full">
              <div className="font-bold text-xl md:text-2xl text-white mb-1 leading-tight">{item.title}</div>
              {item.desc && <div className="text-white/80 text-sm font-normal">{item.desc}</div>}
            </div>
          </a>
        ))}
      </div>

      {/* Edge fades to soften the sides */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32"
        style={{ background: "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0) 100%)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32"
        style={{ background: "linear-gradient(270deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0) 100%)" }}
      />
    </div>
  );
}
