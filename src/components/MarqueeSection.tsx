import React, { useRef, useState, useEffect } from 'react';

const IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif'
];

// Row 1: first 11 images
const ROW1_IMAGES = IMAGES.slice(0, 11);
// Row 2: remaining 10 images
const ROW2_IMAGES = IMAGES.slice(11);

// Tripled lists for seamless scroll rendering
const ROW1_TRIPLED = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const ROW2_TRIPLED = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate section top relative to absolute page scroll
      const sectionTop = rect.top + window.scrollY;
      
      // Formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial pass
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Set up offset transitions
  // Row 1: Moves RIGHT on scroll (translateX(offset - 200))
  // We offset it so that it centers properly without leaving empty gaps at the edge
  const row1X = scrollOffset - 200 - 1500; // We offset by a base value so it loops smoothly in the middle
  // Row 2: Moves LEFT on scroll (translateX(-(offset - 200)))
  const row2X = -(scrollOffset - 200) - 1500;

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 Track */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translateX(${row1X}px)`,
              willChange: 'transform',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {ROW1_TRIPLED.map((url, index) => (
              <img
                key={`row1-${index}`}
                src={url}
                alt={`3D showcase ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] flex-shrink-0 object-cover rounded-2xl border border-white/5"
              />
            ))}
          </div>
        </div>

        {/* Row 2 Track */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translateX(${row2X}px)`,
              willChange: 'transform',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {ROW2_TRIPLED.map((url, index) => (
              <img
                key={`row2-${index}`}
                src={url}
                alt={`3D showcase ${index + 12}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] flex-shrink-0 object-cover rounded-2xl border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
