import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section 
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Decorative Corner Images */}
      
      {/* Top Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-pulse"
            style={{ animationDuration: '6s' }}
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D element"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:rotate-6 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-transform duration-500"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D group"
            referrerPolicy="no-referrer"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
          />
        </FadeIn>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl px-4">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <FadeIn delay={0} y={40} duration={0.8}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[3rem] sm:text-[6vw] md:text-[9vw] lg:text-[10vw]" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
              About me
            </h2>
          </FadeIn>
        </div>

        {/* Animated paragraph */}
        <div className="max-w-[560px] mb-16 sm:mb-20 md:mb-24 flex justify-center text-center">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed text-center"
          />
        </div>

        {/* Contact Button */}
        <div>
          <FadeIn delay={0.4} y={20} duration={0.8}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
