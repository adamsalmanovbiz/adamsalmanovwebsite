import React from "react";
import { useParams, Link } from "react-router-dom";
import adam6 from './assets/logos/adam6.jpg';
import client1 from './assets/logos/client1.png';
import wideangle from './assets/wideangle.png';
import reactsvg from './assets/react.svg';

// Example article data (in a real app, fetch from API or file)
const articles = [
  {
    slug: "agency-at-16",
    title: "How I Built a 6-Figure Content Agency at 16",
    date: "August 2025",
    headerImage: adam6,
    content: `Lessons, mistakes, and systems from my journey scaling a founder-led content business as a teenager.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.`
  },
  {
    slug: "founder-led-content",
    title: "The Power of Founder-Led Content",
    date: "July 2025",
    headerImage: client1,
    content: `Why founders should be the face of their brand, and how to build trust and authority online.\n\nAliquam erat volutpat. Etiam vitae nisi sit amet lorem accumsan porta. Duis nec velit nec nulla dictum euismod.`
  },
  {
    slug: "linkedin-authority",
    title: "LinkedIn Authority: From 0 to Consistent Inbound",
    date: "June 2025",
    headerImage: wideangle,
    content: `How to build consistent inbound through LinkedIn — systems, cadence, and creative formats.`
  },
  {
    slug: "weekly-long-form",
    title: "Weekly Long-Form: Why It Works",
    date: "May 2025",
    headerImage: client1,
    content: `Why publishing a weekly long-form asset powers all downstream shorts and distribution.`
  },
  {
    slug: "shorts-machine",
    title: "Shorts Machine: Turning Long Form Into Daily Clips",
    date: "April 2025",
    headerImage: wideangle,
    content: `A practical workflow for extracting hooks, retention edits, and platform-native clips at scale.`
  },
  {
    slug: "distribution",
    title: "Distribution That Scales",
    date: "March 2025",
    headerImage: reactsvg,
    content: `Repurposing, cadence, and tracking KPIs that connect content to pipeline.`
  }
];

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div>
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link to="/articles" className="text-red-500 underline">Back to Articles</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FAFAFA", fontFamily: "Inter, system-ui" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-white/10" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.85), rgba(10,10,10,0.6))" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="inline-flex items-center text-lg gap-0" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span className="text-white">&lt;</span>
            <span className="text-red-600 -mx-[1px]">SALMANOV</span>
            <span className="text-white -ml-[2px]">/&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link to="/">Home</Link>
            <Link to="/articles" className="hover:text-white transition">Articles</Link>
            <a href="#contact">Contact</a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "#DC2626", color: "#0A0A0A" }}>Book a Call</a>
          </div>
        </div>
      </nav>

      {/* HEADER IMAGE */}
      <header className="relative w-full h-64 md:h-96 flex items-end justify-center overflow-hidden" style={{ background: `linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.75)), url('${article.headerImage}') center/cover no-repeat` }}>
        <div className="absolute left-0 right-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg,transparent,#0A0A0A)" }} />
        <div className="relative z-10 pb-8 text-center w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{article.title}</h1>
          <div className="text-white/70 text-base">{article.date}</div>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg" style={{ fontFamily: 'Inter, system-ui' }}>
          {article.content.split('\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-8">
          <Link to="/articles" className="text-red-500 underline">← Back to Articles</Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span>&lt;</span><span style={{ color: "#DC2626" }}>SALMANOV</span><span>/&gt;</span>
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} Adam Salmanov — Founder-Led Marketing • NYC</div>
        </div>
      </footer>
    </div>
  );
}
