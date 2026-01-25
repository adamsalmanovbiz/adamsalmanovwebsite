// src/AdamSalmanov.jsx
// Personal site for Adam Salmanov — Founder-Led Content Marketing

import { Resources } from "./components/resources.jsx";
import { Link } from "react-router-dom";
import PortfolioCarousel from "./components/PortfolioCarousel.jsx";
import adam6 from "./assets/logos/adam6.jpg";
import adamn1 from "./assets/logos/adam1.jpg";
import adamnyc from "./assets/logos/adamnyc.jpg";
import client1 from "./assets/logos/client1.png";
import adamWall from "./assets/logos/AdamWall.jpg";
import adammirror from "./assets/logos/AdamMirror.jpg";
import adamwindow from "./assets/logos/AdamWindow.jpg";
import adamtable from "./assets/logos/AdamTable.jpg";
import adamwindow2 from "./assets/logos/AdamWindow2.jpg";
import adamwindow3 from "./assets/logos/AdamWindow3.jpg";
import adamlib from "./assets/logos/AdamLib.jpg";
import adam24 from "./assets/logos/adam24.jpg"; 
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

  // Button that:
  // - jumps to in-page sections like "#book"
  // - lets HashRouter handle "#/route" (e.g., "#/articles")
  // - works for external links (https, mailto), supports target/rel via ...props
  const Button = ({ href = "#", variant = "primary", children, ...props }) => {
    const styles =
      variant === "primary"
        ? { backgroundColor: brand.red, color: brand.black }
        : { backgroundColor: "transparent", color: brand.ink, border: `1px solid ${brand.redDark}` };

    const isSectionHash = href.startsWith("#") && !href.startsWith("#/");

    const handleClick = (e) => {
      if (isSectionHash) {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "auto" });
      }
      // else: let browser/HashRouter handle normally
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
        style={styles}
        {...props}
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

  // helper for nav anchors
  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  };

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
            <a href="#work" onClick={goTo("work")}>What I Do</a>
            <a href="#story" onClick={goTo("story")}>Story</a>
            {/* <a href="#portfolio" onClick={goTo("portfolio")}>Portfolio</a> */}
            <a href="#contact" onClick={goTo("contact")}>Contact</a>
            <Link to="/articles" className="hover:text-white transition">Articles</Link>
            <Button href="#book">Book a Call</Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        className="relative grid place-items-center text-center overflow-hidden"
        style={{
          minHeight: "92svh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.75)), url(${adam24})`,
          backgroundSize: "cover",
          backgroundPosition: "45% 60%",
        }}
      >
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
            I help founders & startups build brands people <span style={{ color: brand.red }}>recognize & trust </span> with content marketing
          </p>
          <p className="text-white/60 max-w-2xl mx-auto ">Setting the standard for the younger generation.</p>

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
        <div
          className="absolute left-0 right-0 bottom-0 h-24"
          style={{ background: "linear-gradient(180deg,transparent,#0A0A0A)" }}
        />
      </header>

      {/* WHAT I DO */}
      <Section id="work" kicker="What I Do" title="Brand Building Through Content">
        <div className="grid md:grid-cols-1 gap-6">
          {[
            {
              h: "Individual Brand Building",
              p: "Your name is already part of the brand. I help operators, founders, and investors turn what they're already doing into a personal brand that builds trust before conversations happen. This isn't about posting more. It's about being clear, consistent, and visible. Without content becoming your job. Storytelling, content, and distribution designed to drive inbound opportunities over time.",
            },
            {
              h: "Company Brand Building",
              p: "Most companies aren't losing because of their product. They're losing because nobody understands them. I help companies turn what they're already building. Product, people, momentum, into a brand that feels clear, human, and trustworthy. Storytelling, content, and distribution designed to drive inbound customers, talent, and attention over time.",
            },
            {
              h: "Systemized Content Team",
              p: "I will build you an in-house content and distribution team.",
            },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition">
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>
                Service
              </div>
              <div className="font-semibold mb-1" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
                {s.h}
              </div>
              <p className="text-white/70 text-sm">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href="#book">Work with me</Button>
          <Button href="#/articles" variant="ghost">
            Visit articles
          </Button>
        </div>
      </Section>

      {/* VIDEOS */}
      <Section id="videos" kicker="Recent YouTube" title="Latest videos">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://www.youtube.com/embed/bfA-jcwIOzQ?si=Koj0hF-TCK2M00gC",
            "https://www.youtube.com/embed/t5Mm5A6seY8?si=oGceok3zzwuCF8au",
            "https://www.youtube.com/embed/pMl37h8mDsU?si=CbLae2V3reckJ-iL",
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

      {/* MY MISSION */}
      <Section id="mission" kicker="My Mission" title="Setting the Standard for My Generation">
        {/* Wide photo banner */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10">
          <div
            className="w-full h-72 md:h-96"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.50)), url(${adamWall})`,
              backgroundSize: "cover",
              backgroundPosition: "center 29%"
            }}
          />
        </div>

        {/* Full-width text section with background */}
        <div className="w-full mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          {/* Key emphasized statement */}
          <div
            className="text-xl md:text-2xl font-semibold mb-8 pb-8 border-b border-white/10"
            style={{ fontFamily: "Space Grotesk, Inter, system-ui", color: brand.ink }}
          >
            The system is designed to keep you average. I'm building the counter-proof.
          </div>

          {/* Mission paragraphs with separators */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-white/90 text-base leading-relaxed">
                Comfortable enough not to rebel, distracted enough not to build, just capable enough to be useful to someone else's vision. It's working. Look around—our generation is weaker, more medicated, less ambitious than any before us. And the people running things want it that way.
              </p>
              <div className="w-12 h-px" style={{ backgroundColor: brand.red }} />
              <p className="text-white/90 text-base leading-relaxed">
                I'm not interested in complaining about it. I'm interested in building the counter-proof. At 14, I took control. Health, skills, income—everything the system said I was too young for. Left school at 15. Built a six-figure business by 16. Living in NYC, working with people I'm inspired by.
              </p>
              <div className="w-12 h-px" style={{ backgroundColor: brand.red }} />
              <p className="text-white/90 text-base leading-relaxed">
                I've been documenting this journey for years. Tried helping people become their best. But I learned something: convincing doesn't work. Preaching about what they should do doesn't move anyone. What works is proof. If a kid with less privilege, fewer connections, and no advantages can do it—what's your excuse?
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-white/90 text-base leading-relaxed">
                Actions lead better than words ever could. That's what I've been doing. Built an audience of over 100,000 young people who are focused on becoming their best selves & not settling for mediocrity. But one story isn't enough to shift a generation.
              </p>
              <div className="w-12 h-px" style={{ backgroundColor: brand.red }} />
              <p className="text-white/90 text-base leading-relaxed">
                So I'm taking it further. "Setting the Standard"—a content series profiling founders, operators, and builders who rejected the path and won. I'm showcasing their stories, their decisions, their lives. Stories that will spread faster and hit harder than I ever could alone.
              </p>
              <div className="w-12 h-px" style={{ backgroundColor: brand.red }} />
              <p className="text-white/90 text-base leading-relaxed">
                We're at a crossroads. With AI eliminating the middle, infinite leverage available, the rules completely rewritten—this is the most vital time. I want to make sure our generation goes down the right path. Not comfort and mediocrity, but strength and greatness to achieve prosperity.
              </p>
            </div>
          </div>

          {/* Context for videos */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/70 text-sm mb-6 text-center">
              New episodes drop monthly starting soon. Until then, my story is below—proof that the path works if you take it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "https://www.youtube.com/embed/bfA-jcwIOzQ?si=Koj0hF-TCK2M00gC",
                "https://www.youtube.com/embed/t5Mm5A6seY8?si=oGceok3zzwuCF8au",
                "https://www.youtube.com/embed/pMl37h8mDsU?si=CbLae2V3reckJ-iL",
              ].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <div className="aspect-video">
                    <iframe
                      src={src}
                      title={`Setting the Standard video ${i + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{ border: 0 }}
                    />
                  </div>
                  <div className="p-3 text-xs text-white/60">YouTube • Setting the Standard</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PORTFOLIO (commented examples kept) */}

      {/* <Section id="portfolio" kicker="Portfolio" title="Selected Work">
              <Resources />

      </Section> */}

      {/* SALMANOV MEDIA */}
      <Section id="salmanov-media" kicker="Salmanov Media" title="Why I Do What I Do">
        {/* Side-by-side: Photo left, Content right */}
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* Left: Vertical photo */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={adamtable}
              alt="Adam Salmanov"
              className="w-full h-full object-cover"
              style={{ minHeight: "400px", aspectRatio: "3 / 4" }}
            />
          </div>

          {/* Right: Text content */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-6">
            <div
              className="text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "Space Grotesk, Inter, system-ui", color: brand.ink }}
            >
              Why I'm Building Salmanov Media
            </div>

            <p className="text-white/90 text-base leading-relaxed">
              Most people start agencies because they see an opportunity. I'm doing this because I don't know how to do anything else—and I mean that in the best way. I've grown up making content. It's not a skill I learned in a course. It's what I've been obsessed with since I was a kid.
            </p>

            <p className="text-white/90 text-base leading-relaxed">
              Now? This is the best way I can serve. Founders and startups need content. I know how to make it. And I get to learn from incredible people while doing what I love.
            </p>

            <p className="text-white/90 text-base leading-relaxed">
              Here's what I'm really building: a media engine that compounds. Every piece of content, every story told, every audience built—it stacks. That attention and storytelling power? It'll let me do whatever I want in the future.
            </p>

            <p className="text-white/90 text-base leading-relaxed">
              But right now, we're not some polished corporate team. We're young content kids who will be your content team. We adapt. We move fast. We figure out what works for your goals.
            </p>

            <p className="text-white/90 text-base leading-relaxed">
              So if this resonates—if you want a content team that's obsessed, hungry, and moves fast—let's talk.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button href="https://salmanovmedia.com" target="_blank" rel="noopener noreferrer">
                Visit Salmanov Media
              </Button>
              <Button href="#book" variant="ghost">
                Get Free Content Piece
              </Button>
            </div>
          </div>
        </div>

        {/* Client videos below */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/70 text-sm mb-6 text-center">
            We're giving out a free content piece to the next 4 founders & startups that apply. See how we work, the content we produce, and if you're a fan, we can figure out how to work together.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://www.youtube.com/embed/bfA-jcwIOzQ?si=Koj0hF-TCK2M00gC",
              "https://www.youtube.com/embed/t5Mm5A6seY8?si=oGceok3zzwuCF8au",
              "https://www.youtube.com/embed/pMl37h8mDsU?si=CbLae2V3reckJ-iL",
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-video">
                  <iframe
                    src={src}
                    title={`Client video ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>
                <div className="p-3 text-xs text-white/60">YouTube • Client Work</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" kicker="Pricing" title="Salmanov Media Services">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-lg font-semibold mb-2" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
             Individual Brand Building
            </div>
            <div className="text-2xl font-semibold mb-2" style={{ color: brand.red }}>
              $$$$/month
            </div>
            <p className="text-white/70 text-sm">Done-for-you content for founders, operators, investors</p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-lg font-semibold mb-2" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
              We'll Build & Run Your Content Team
            </div>
            <div className="text-2xl font-semibold mb-2" style={{ color: brand.red }}>
              Custom Quote
            </div>
            <p className="text-white/70 text-sm">Recruit, train, and place your in-house content team.</p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-lg font-semibold mb-2" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
             For Companies
            </div>
            <div className="text-2xl font-semibold mb-2" style={{ color: brand.red }}>
              $$$$/month
            </div>
            <p className="text-white/70 text-sm">Founder-led teams & startups</p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-lg font-semibold mb-2" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
              One-Off Projects
            </div>
            <div className="text-2xl font-semibold mb-2" style={{ color: brand.red }}>
              Varies
            </div>
            <p className="text-white/70 text-sm">Short-form videos, vlogs, and single projects to show what we can do.</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button href="https://cal.com/adamsal/salmanovmedia" target="_blank" rel="noopener noreferrer">
            Book Content Strategy Call
          </Button>
          <a
            href="https://salmanovmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#FAFAFA", color: brand.black }}
          >
            Visit Website
          </a>
        </div>
      </Section>

      {/* BOOKING */}
      <Section id="book" kicker="Work Together" title="Book a call with me">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>
              Discovery call
            </div>
            <div className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
              15-minute fit check
            </div>
            <p className="text-white/70 text-sm mt-1">No pressure. See if I can help and how we’d approach it.</p>
            <div className="mt-4">
              <Button href="https://cal.com/adamsal/15min" target="_blank" rel="noopener noreferrer">
                Book 15-min
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.red }}>
              Done For You
            </div>
            <div className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, Inter, system-ui" }}>
              Salmanov Media
            </div>
            <p className="text-white/70 text-sm mt-1">Intro call related to working with my agency salmanov media</p>
            <div className="mt-4">
              <Button href="https://cal.com/adamsal/salmanovmedia" target="_blank" rel="noopener noreferrer">
                Book 15-min
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" kicker="Contact" title="Let’s talk" padding="pt-0 pb-16">
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:adam@salmanovmedia.com">Email</Button>
          <Button href="https://instagram.com/adamsalmanovbiz" variant="ghost">
            Instagram
          </Button>
          <Button href="https://youtube.com/@AdamSalmanovBiz" variant="ghost">
            YouTube
          </Button>
          <Button href="https://x.com/adamsalmanovbiz" variant="ghost">
            X / Twitter
          </Button>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, ui-monospace" }}>
            <span>&lt;</span>
            <span style={{ color: brand.red }}>SALMANOV</span>
            <span>/&gt;</span>
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} Adam Salmanov • NYC</div>
        </div>
      </footer>
    </div>
  );
}
