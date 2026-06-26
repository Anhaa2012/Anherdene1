import React from 'react';
import { motion } from 'motion/react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
    },
  },
};

export default function ServicesSection() {
  return (
    <section 
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center">
          <FadeIn delay={0} y={40} duration={0.8}>
            <h2 className="font-black uppercase tracking-tight text-[#0C0C0C]" style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: '0.9' }}>
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Services List with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="w-full border-t border-[rgba(12,12,12,0.15)] flex flex-col"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.num}
              variants={itemVariants}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex flex-row items-center gap-6 sm:gap-10 md:gap-16 w-full group hover:bg-[rgba(12,12,12,0.02)] transition-colors duration-300"
            >
              {/* Number Left */}
              <div 
                className="font-black text-[#0C0C0C] flex-shrink-0 select-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: '1' }}
              >
                {service.num}
              </div>

              {/* Stacked Name & Description Right */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 
                  className="font-medium uppercase text-[#0C0C0C] mb-2 group-hover:translate-x-2 transition-transform duration-300"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
