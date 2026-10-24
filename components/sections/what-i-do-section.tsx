'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/content/site-data';

interface ServiceLineProps {
  number: string;
  title: string;
  technologies: string[];
  index: number;
}

function ServiceLine({ number, title, technologies, index }: ServiceLineProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 20 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-12">
        <motion.span
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-800 group-hover:text-[#00ff41] transition-colors"
        >
          {number}
        </motion.span>
        <motion.div
          className="flex-1 h-px bg-zinc-800 group-hover:bg-[#00ff41] transition-colors"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.1, duration: 0.8 }}
        />
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 pl-20 sm:pl-32">
        <span className="text-zinc-400 group-hover:text-[#00ff41] transition-colors">
          {title}
        </span>
      </div>

      <div className="pl-20 sm:pl-32 flex flex-wrap gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-zinc-800 rounded-full border border-zinc-700 group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function WhatIDoSection() {
  const services = [
    {
      number: '01',
      title: 'Applications web',
      technologies: ['React', 'Next.js', 'Laravel', 'NestJS', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
    },
    {
      number: '02',
      title: 'Applications desktop',
      technologies: ['Python']
    },
    {
      number: '03',
      title: 'Bases de données',
      technologies: siteData.skills.databases
    },
    {
      number: '04',
      title: 'Outils',
      technologies: siteData.skills.tools
    }
  ];

  return (
    <section id="faire" className="min-h-[100svh] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <ServiceLine
              key={service.number}
              number={service.number}
              title={service.title}
              technologies={service.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
