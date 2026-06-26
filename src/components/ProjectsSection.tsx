import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    url: ''
  },
  {
    num: '04',
    name: 'My music',
    category: 'Music Project',
    col1_img1: '/src/assets/images/my_music_synth_preview_1782439403099.jpg',
    col1_img2: '/src/assets/images/my_music_soundwaves_preview_1782439415714.jpg',
    col2_img: '/src/assets/images/my_music_main_showcase_1782439387905.jpg',
    url: 'https://share.gemini.google/1oczJvgIBExM'
  }
];

export default function ProjectsSection() {
  return (
    <section 
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-40 relative z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center">
          <FadeIn delay={0} y={40} duration={0.8}>
            <h2 className="hero-heading font-black uppercase tracking-tight text-center text-[3rem] sm:text-[6vw] md:text-[9vw] lg:text-[10vw]" style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: '0.9' }}>
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  key?: any;
  project: typeof PROJECTS[0];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific card container to trigger scale down stacking
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start']
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  // Transform scale from 1 to targetScale as the card scrolls past the viewport top
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={cardContainerRef}
      className="h-[85vh] sticky top-24 md:top-32 w-full flex flex-col justify-start select-none"
      style={{ 
        top: `calc(110px + ${index * 28}px)`,
        zIndex: index + 1
      }}
    >
      <FadeIn y={80} scale={0.96} duration={0.9} viewportMargin="0px 0px -150px 0px" className="w-full h-full">
        <motion.div
          style={{ 
            scale,
            transformOrigin: 'top center',
            willChange: 'transform'
          }}
          className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between h-[75vh] box-border shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Top Row */}
          <div className="flex justify-between items-center w-full">
            {/* Left: Number + Category & Name */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <span 
                className="font-black text-zinc-800 leading-none select-none"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col">
                <span className="font-light uppercase text-xs sm:text-sm text-[#D7E2EA] opacity-60 tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-medium uppercase text-[#D7E2EA] text-sm sm:text-xl md:text-2xl tracking-wide">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Right: Live Project Button */}
            <div>
              <LiveProjectButton 
                label="Live Project"
                onClick={() => {
                  if (project.url) {
                    window.open(project.url, '_blank');
                  } else {
                    alert(`Redirecting to live preview for: ${project.name}`);
                  }
                }}
                className="scale-90 sm:scale-100"
              />
            </div>
          </div>

          {/* Bottom Row: Image Grid */}
          <div className="flex gap-4 sm:gap-6 items-stretch w-full flex-1 mt-4 overflow-hidden">
            {/* Left Column (40% width) - 2 Stacked Images */}
            <div className="w-[40%] flex flex-col gap-4 justify-between h-full">
              <div className="overflow-hidden w-full h-1/2 flex rounded-[25px] sm:rounded-[35px] md:rounded-[45px] lg:rounded-[50px] border border-white/5">
                <img
                  src={project.col1_img1}
                  alt={`${project.name} preview 1`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
              <div className="overflow-hidden w-full h-1/2 flex rounded-[25px] sm:rounded-[35px] md:rounded-[45px] lg:rounded-[50px] border border-white/5">
                <img
                  src={project.col1_img2}
                  alt={`${project.name} preview 2`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Right Column (60% width) - 1 Tall Image */}
            <div className="w-[60%] overflow-hidden h-full flex rounded-[25px] sm:rounded-[35px] md:rounded-[45px] lg:rounded-[50px] border border-white/5">
              <img
                src={project.col2_img}
                alt={`${project.name} main showcase`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  );
}
