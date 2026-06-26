import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} duration={0.8} as="nav" className="w-full z-20">
        <ul className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <li>
            <button
              onClick={() => handleScrollTo('about')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo('services')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Price
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo('projects')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={onContactClick}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-1 flex flex-col justify-center relative w-full px-6 md:px-10 z-0">
        {/* Massive Title */}
        <div className="overflow-hidden w-full select-none pointer-events-none z-0">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading font-medium uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i’m anhaa
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait (Centered Absolutely) */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
          <FadeIn delay={0.6} y={30} duration={0.9}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-full flex justify-center"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Anhaa Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 relative">
        {/* Left: Positioning statement */}
        <div className="w-full max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <FadeIn delay={0.35} y={20} duration={0.8}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[0.75rem] sm:text-[1vw] md:text-[1.2vw] lg:text-[1.3vw] xl:text-[1.5rem]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
        </div>

        {/* Right: Contact Button */}
        <div>
          <FadeIn delay={0.5} y={20} duration={0.8}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
