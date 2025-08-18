// src/components/ClientCarousel.jsx
export default function ClientCarousel({
  logos = [
    'src/assets/logos/client1.png',
    'src/assets/logos/client1.png',
    'src/assets/logos/client1.png',
    'src/assets/logos/client1.png',
    'src/assets/logos/client1.png',
  ],
  speedSec = 28,   // higher = slower
  heightPx = 28,   // logo height
  gapRem = 3,      // spacing between logos
}) {
  return (
    <div id="clients" className="mt-6 mb-2">
      <div className="container mx-auto px-6">
        <div
          className="sm-marquee group py-2"
          style={{ ['--speed']: `${speedSec}s`, ['--h']: `${heightPx}px`, ['--gap']: `${gapRem}rem` }}
        >
          {/* edge fades (optional) */}
          <div className="sm-fadeL" />
          <div className="sm-fadeR" />

          {/* single rail with two identical tracks = seamless */}
          <div className="sm-rail">
            <div className="sm-track">
              {logos.map((src, i) => (
                <img key={`a-${i}`} src={src} alt={`Client ${i + 1}`} className="sm-logo" loading="lazy" />
              ))}
            </div>
            <div className="sm-track" aria-hidden="true">
              {logos.map((src, i) => (
                <img key={`b-${i}`} src={src} alt="" className="sm-logo" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
