// src/AdamSalmanov.jsx
// Personal site for Adam Salmanov — Founder-Led Content Marketing

import  { Resources } from './components/resources.jsx';
import { Link } from 'react-router-dom';
import PortfolioCarousel from "./components/PortfolioCarousel.jsx";
import adam6 from './assets/logos/adam6.jpg';
import adamnyc from './assets/logos/adamnyc.jpg';
import client1 from './assets/logos/client1.png';

export default function AdamSalmanov() {
  const brand = {
    black: "#0A0A0A",
    red: "#DC2626",
    redDark: "#B91C1C",
    ink: "#FAFAFA",
  };

  // ---------- UI bits ----------
  const Section = ({ id, title, kicker, padding = "py-16 md:py-24", children }) => (
    <section id={id} className={`max-w-7xl mx-auto px-6 md:px-8 ${padding}`}>
      {kicker && (
        <div className="mb-4 text-xs tracking-widest uppercase" style={{ color: brand.red }}>
          {kicker}
        </div>
      )}
      {title && (
        <h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
  const Button = ({ href = "#", variant = "primary", children }) => {
    const styles =
      variant === "primary"
        ? { backgroundColor: brand.red, color: brand.black }
        : { backgroundColor: "transparent", color: brand.ink, border: `1px solid ${brand.redDark}` };
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
        style={styles}
      >
        {children}
      </a>
    );
  };

  const Stat = ({ value, label }) => (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <div className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
        {value}
      </div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );

  const TimelineItem = ({ year, title, text }) => (
    <div className="relative pl-6">
      <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full" style={{ background: brand.red }} />
      <div className="text-xs uppercase tracking-widest text-white/60">{year}</div>
      <div className="font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
        {title}
      </div>
      <p className="text-white/70 text-sm">{text}</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: brand.black, color: brand.ink, fontFamily: "Inter, system-ui" }}>
      {/* Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700&display=swap');`}</style>

      {/* NAV */}
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
            <a href="#work">What I Do</a>
            <a href="#story">Story</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <a href="/adamsalmanovwebsite/articles" className="hover:text-white transition">Articles</a>
            <Button href="#book">Book a Call</Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        className="relative grid place-items-center text-center overflow-hidden"
        style={{
          minHeight: "92svh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.75)), url(${adam6})`,
          backgroundSize: "cover",
          backgroundPosition: "70% center",
        }}
      >
       

        <div >

        <div>
           
          <div
            className="text-[11px] tracking-[.35em] uppercase mb-3"
            style={{ color: brand.red, fontFamily: "JetBrains Mono, ui-monospace" }}
          >
            Founder • Content-marketing
          </div>
          <h1
            className="leading-[1.02] font-semibold"
            style={{ fontSize: "clamp(38px,8vw,96px)", fontFamily: "Space Grotesk, Inter, system-ui" }}
          >
            Adam Salmanov
          </h1>
          <p className="text-white/100 max-w-2xl mx-auto mt-3">
            I help startups generate <span style={{ color: brand.red }}>authority & attention</span> with content marketing
          </p>
          <p className="text-white/60 max-w-2xl mx-auto ">
            Setting the standard for the younger generation.
          </p>
          
          <div className="flex gap-3 mt-6 justify-center">
            <Button href="#book">Book a Call</Button>
            <Button href="#videos" variant="ghost">Watch Videos</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <Stat value="315M+" label="Views driven" />
            <Stat value="6 years" label="Making content" />
            <Stat value="Multi 6 figure" label="Agency ARR" />
            <Stat value="NYC & Remote" label="Where I operate" />
          </div>
        </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg,transparent,#0A0A0A)" }} />
      </header>


      {/* WHAT I DO */}
      <Section id="work" kicker="What I Do" title="Content Marketing">
        <div className="grid md:grid-cols-1 gap-6">
          {[
            { h: "Founder led marketing | B2B ", p: "Your face is the brand. We turn founders into a growth engine. Long-form, clips, podcasts, YouTube, LinkedIn, built to create trust, land B2B deals. Content that makes people want to work with you. If investors can buy into a founder because of who they are, why cant we sell to customers with their story?" },
            { h: "Ghost Creator Campaign | DTC", p: "We engineer viral growth for DTC brands and apps by deploying ghost creators to produce original formats, fresh ideas, and high performing videos built to dominate social. We handle creation and distribution, driving millions of views fast without wasting time on strategy calls." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition">
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>Service</div>
              <div className="font-semibold mb-1" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>{s.h}</div>
              <p className="text-white/70 text-sm">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href="#book">Work with me</Button>
          <Button href="/adamsalmanovwebsite/articles" variant="ghost">Visit articles</Button>
        </div>
      </Section>

       {/* VIDEOS */}
      <Section id="videos" kicker="Recent YouTube" title="Latest videos">
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            
            "https://www.youtube.com/embed/4dD8GxFjM9c?si=gLM_pwTmEu_aXlVB",
            "https://www.youtube.com/embed/Vq78zxx6Vk4?si=gRgktZNQAplmzwkd",
            "https://www.youtube.com/embed/GIG93twUOSs?si=n3W5mjbwy-EX0M7O",
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video">
                <iframe
                  src={src}
                  title={`Adam Salmanov video ${i + 1}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>
              <div className="p-3 text-xs text-white/60">YouTube • @AdamSalmanovBiz</div>
            </div>
          ))}
        </div>
      </Section>


      {/* SHOWREEL */}
      {/* <Section id="reel" kicker="Explainer Video" title="60 seconds: Salmanov Media">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-video w-full grid place-items-center">
            <iframe
              title="Watch 60-second Video"
              src="https://www.youtube.com/embed/4dD8GxFjM9c?si=PchfGeRGWPG_JUnK"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </div>
      </Section> */}

    

      {/* STORY */}
      <Section id="story" kicker="Story" title="From kid creator to 7-fig operator">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <TimelineItem year="2019" title="10: Creating content" text="Daily clips, experiments, wanted to be a youtubers" />
            <TimelineItem year="2020" title="11: First online success" text="Built a tiktok page around minecraft and created a server making $300/month at 11" />
            <TimelineItem year="2022" title="12: Started blowing up online" text="Creating gym content on instagram & yt, getting over 50 mil views" />
            <TimelineItem year="2023" title="13: My first agency" text="Took my content skills & worked with gyms making & getting clients millions of views" />
            <TimelineItem year="2024" title="14-15: Doubling down" text="Got clients views and then helped them convert making me over $50k at 14-15" />
            <TimelineItem year="2025" title="16: Big Leagues" text="Snuck into startup events in NYC & realized that there was a much better market for me, and where my content marketing skills could be more impactful. Resulting in me building a multi 6-figure content marketing agency in 3 months " />
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <img
              src={adamnyc}
              alt="Adam Salmanov portrait"
              className="rounded-xl object-cover w-full"
              style={{ aspectRatio: "4 / 5", objectPosition: "80% center" }}
            />
            <p className="text-white/70 text-sm mt-1">My whole 6-year journey has been documented online</p>
          </div>
        </div>
      </Section>

      
  {/* PORTFOLIO */}
      {/* <Section id="portfolio" kicker="Portfolio" title="Selected Work">
        <div className="grid md:grid-cols-3 gap-6">
          {[
              {
              slug: "agency-at-16",
              title: "Nodes.inc",
              image: client1,
              desc: "12-video sprint → $3 million in extra ARR"
            },
            {
              slug: "founder-led-content",
              title: "Ben Sharf",
              image: client1,
              desc: "90-day cadence • daily distribution"
            },
            {
              slug: "linkedin-authority",
              title: "LinkedIn Authority",
            image: client1,
              desc: "100 million views"
            },
            
          ].map((item, i) => (
            <a
              key={item.slug}
              href={`/articles/${item.slug}`}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#18181b] via-[#232326] to-[#101012] overflow-hidden flex flex-col justify-end min-h-[260px] group hover:border-white/20 transition"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui', textDecoration: 'none' }}
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
            </a>
          ))}
        </div>
  </Section> */}

  {/* <Section id="portfolio" kicker="Portfolio" title="Selected Work">
      <PortfolioCarousel />
    </Section> */}

  {/* PRICING */}
      <Section id="pricing" kicker="Pricing" title="Salmanov Media Services">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Retainer */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>DFY | Founder led marketing</div>
            <div className="text-3xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}><span style={{ color: brand.red }}>$3,000</span>/ month min.</div>
            <p className="text-white/70 text-sm mt-2">Capacity is intentionally small. Organic content that converts requires deep focus.</p>
          </div>

           <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>DFY | Ghost Creator Campaign</div>
            <div className="text-3xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}><span style={{ color: brand.red }}>$3,000</span> budget min.</div>
            <p className="text-white/70 text-sm mt-2">Baseline for the content engine. Pricing increases based on deliverables and revenue impact.</p>
          </div>
       
          {/* Consulting & Team Placement — Setup Fee */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>DWY | Consulting & Team Placement</div>
            <div className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>Discovery‑quoted fee</div>
            {/* <p className="text-white/70 text-sm">Quoted after discovery. Covers org design, role scoping, hiring pipeline, onboarding, training, and governance.</p> */}
            <ul className="text-white/80 text-sm list-disc pl-5 mt-3 space-y-2">
              <li>Recruit & place editors/strategists/lead</li>
              <li>30–60 day ramp with oversight</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-white/60">Capacity is intentionally small. Organic content that converts requires deep focus.</div>
        <div className="mt-6"><Button href="https://cal.com/adamsal/salmanovmedia">Book Content Strategy Call</Button></div>
      </Section>


     
      {/* BOOKING */}
      <Section id="book" kicker="Work Together" title="Consulting & calls">
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>Free intro call</div>
            <div className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>15-minute fit check</div>
            <p className="text-white/70 text-sm mt-1">No pressure. See if I can help and how we’d approach it.</p>
            <div className="mt-4"><Button href="https://cal.com/adamsal/15min">Book 15-min</Button></div>
          </div>
           <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>Done For You</div>
            <div className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>Salmanov Media</div>
            {/* <div className="text-2xl font-bold mt-1">$200</div> */}
            <p className="text-white/70 text-sm mt-1">Intro call related to working with my agency salmanov media</p>
            <div className="mt-4"><Button href="https://cal.com/adamsal/salmanovmedia">Book call with agency</Button></div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="Contact" title="Let’s talk" padding="pt-0 pb-16">
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:adam@salmanovmedia.com">Email</Button>
          <Button href="https://instagram.com/adamsalmanovbiz" variant="ghost">Instagram</Button>
          <Button href="https://youtube.com/@AdamSalmanovBiz" variant="ghost">YouTube</Button>
          <Button href="https://x.com/adamsalmanovbiz" variant="ghost">X / Twitter</Button>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span>&lt;</span><span style={{ color: brand.red }}>SALMANOV</span><span>/&gt;</span>
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} Adam Salmanov • NYC</div>
        </div>
      </footer>
    </div>
  );
}
