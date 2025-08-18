      {/* SELECTED WORK (Portfolio) */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-4 text-xs tracking-widest uppercase" style={{ color: '#DC2626' }}>
          Selected Work
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>
          Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Founder Launch System",
              image: "/src/assets/logos/client1.png",
              desc: "12-video sprint → $450k pipeline"
            },
            {
              title: "Shorts Engine",
              image: "/src/assets/react.svg",
              desc: "90-day cadence • daily distribution"
            },
            {
              title: "LinkedIn Authority",
              image: "/src/assets/wideangle.png",
              desc: "From 0 → consistent inbound"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#18181b] via-[#232326] to-[#101012] overflow-hidden flex flex-col justify-end min-h-[260px] group hover:border-white/20 transition"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition pointer-events-none"
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="absolute inset-0" style={{background: "linear-gradient(180deg,rgba(10,10,10,0.1) 40%,rgba(10,10,10,0.95) 100%)", zIndex: 1}} />
              <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full w-full">
                <div className="font-bold text-xl md:text-2xl text-white mb-1 leading-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{item.title}</div>
                <div className="text-white/80 text-sm font-normal">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

import { Link } from "react-router-dom";

export default function Articles() {
  const brand = {
    black: "#0A0A0A",
    red: "#DC2626",
    redDark: "#B91C1C",
    ink: "#FAFAFA",
  };

  return (
    <div style={{ backgroundColor: brand.black, color: brand.ink, fontFamily: "Inter, system-ui" }}>
      {/* Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700&display=swap');`}</style>

      {/* NAV (copied from AdamSalmanov) */}
      <nav
        className="sticky top-0 z-40 border-b border-white/10"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.6))" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="inline-flex items-center text-lg gap-0" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span className="text-white">&lt;</span>
            <span className="text-red-600 -mx-[1px]">SALMANOV</span>
            <span className="text-white -ml-[2px]">/&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="/">Home</a>
            <a href="/articles" className="hover:text-white transition">Articles</a>
            <a href="#contact">Contact</a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5" style={{ backgroundColor: brand.red, color: brand.black }}>Book a Call</a>
          </div>
        </div>
      </nav>

      {/* HERO IMAGE (like front page) */}
      <header
        className="relative grid place-items-center text-center overflow-hidden"
        style={{
          minHeight: "60svh",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.75)), url('src/assets/logos/adam6.jpg') ",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
        }}
      >
        <div>
          <h1 className="leading-[1.02] font-semibold mt-12 mb-2" style={{ fontSize: "clamp(32px,6vw,64px)", fontFamily: "Space Grotesk, Inter, system-ui" }}>
            Articles
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mt-3">
            My thoughts, breakdowns, and stories on content, business, and life.
          </p>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg,transparent,#0A0A0A)" }} />
      </header>

      {/* ARTICLES LIST */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {/* Article data array */}
          {[
            {
              slug: "agency-at-16",
              title: "How I Built a 6-Figure Content Agency at 16",
              date: "August 2025",
              headerImage: "/src/assets/logos/adam6.jpg",
              desc: "Lessons, mistakes, and systems from my journey scaling a founder-led content business as a teenager."
            },
            {
              slug: "founder-led-content",
              title: "The Power of Founder-Led Content",
              date: "July 2025",
              headerImage: "/src/assets/logos/client1.png",
              desc: "Why founders should be the face of their brand, and how to build trust and authority online."
            }
          ].map((article, i) => (
            <Link
              to={`/articles/${article.slug}`}
              key={article.slug}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#18181b] via-[#232326] to-[#101012] p-6 hover:border-white/20 transition block group overflow-hidden"
              style={{ textDecoration: 'none' }}
            >
              <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                <img
                  src={article.headerImage}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute left-0 right-0 bottom-0 h-16" style={{ background: "linear-gradient(180deg,transparent,#101012 90%)" }} />
              </div>
              <div className="font-bold text-2xl mb-1 text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{article.title}</div>
              <div className="text-white/80 text-sm mb-2">{article.date}</div>
              <div className="text-white/60 text-base">{article.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER (copied from AdamSalmanov) */}
      <footer className="border-t border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span>&lt;</span><span style={{ color: brand.red }}>SALMANOV</span><span>/&gt;</span>
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} Adam Salmanov — Founder-Led Marketing • NYC</div>
        </div>
      </footer>
    </div>
  );
}
