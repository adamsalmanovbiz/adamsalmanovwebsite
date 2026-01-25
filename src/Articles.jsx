import { Link } from "react-router-dom";
import adam6 from './assets/logos/adam6.jpg';
import adamnyc from './assets/logos/adamnyc.jpg';
import client1 from './assets/logos/client1.png';
import hero from "./assets/logos/adam6.jpg";

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
              <Link to="/">Home</Link>
            <a
  href="https://cal.com/adamsal/salmanovmedia"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
  style={{ backgroundColor: brand.red, color: brand.black }}
>
  Book a Call
</a>

          </div>
        </div>
      </nav>

      {/* HERO IMAGE (like front page) */}
      <header
        className="relative grid place-items-center text-center overflow-hidden"
        style={{
          minHeight: "60svh",
             backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.75)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "80% center",
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
            // {
            //   slug: "agency-at-16",
            //   title: "How I Built a 6-Figure Content Agency at 16",
            //   date: "August 2025",
            //   headerImage: client1,
            //   desc: "Lessons, mistakes, and systems from my journey scaling a founder-led content business as a teenager."
            // },
            {
              slug: "founder-led-content",
              title: "The Power of Founder-Led Content",
              date: "July 2025",
              headerImage: client1,
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
