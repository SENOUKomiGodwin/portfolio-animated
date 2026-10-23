'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EditorFrame } from '@/components/editor-frame';
import { MagneticButton } from '@/components/magnetic-button';
import { siteData } from '@/content/site-data';
import { getWhatsAppLink, getMailtoLink, getLinkedInLink } from '@/lib/contact-links';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(siteData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink = getWhatsAppLink();
  const mailtoLink = getMailtoLink();
  const linkedinLink = getLinkedInLink();

  const lines = ['Travaillons', 'ensemble.'];

  return (
    <section id="contact" className="min-h-[100svh] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            {lines.map((line, index) => (
              <motion.h1
                key={index}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            <EditorFrame label="EMAIL">
              <MagneticButton
                onClick={handleCopyEmail}
                className="relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-base sm:text-lg"
              >
                {copied ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    ✓ Copié !
                  </motion.span>
                ) : (
                  siteData.email
                )}
              </MagneticButton>
            </EditorFrame>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#00ff41] transition-colors text-base sm:text-lg"
              >
                GitHub
              </a>
              {linkedinLink && (
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#00ff41] transition-colors text-base sm:text-lg"
                >
                  LinkedIn
                </a>
              )}
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#00ff41] transition-colors text-base sm:text-lg"
                >
                  WhatsApp
                </a>
              )}
            </div>

            <p className="text-zinc-500 text-sm sm:text-base">
              {siteData.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
