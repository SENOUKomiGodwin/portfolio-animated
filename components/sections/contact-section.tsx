'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { EditorFrame } from '@/components/editor-frame';
import { MagneticButton } from '@/components/magnetic-button';
import { siteData } from '@/content/site-data';
import { getWhatsAppLink, getMailtoLink, getLinkedInLink } from '@/lib/contact-links';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(siteData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink = getWhatsAppLink();
  const mailtoLink = getMailtoLink();
  const linkedinLink = getLinkedInLink();

  const lines = ['Travaillons', 'ensemble.'];

  const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9l.8-1.9-3.4-2 1.4-1.4 2.2 3.4" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0-19.44 0A5.44 5.44 0 0 0 3.56 13.22c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  const CopyIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );

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
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* Email Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2"
              >
                {mailtoLink ? (
                  <EditorFrame label="EMAIL">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-sm sm:text-base"
                    >
                      <EmailIcon />
                      {siteData.email}
                    </a>
                  </EditorFrame>
                ) : (
                  <span className="text-zinc-600 text-sm">Email non configuré</span>
                )}
                <MagneticButton
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center px-2 sm:px-3 py-2 sm:py-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors text-sm sm:text-base"
                >
                  {copied ? (
                    !prefersReducedMotion ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[#00ff41]"
                      >
                        ✓
                      </motion.span>
                    ) : (
                      <span className="text-[#00ff41]">✓</span>
                    )
                  ) : (
                    <CopyIcon />
                  )}
                </MagneticButton>
              </motion.div>

              {/* WhatsApp Button */}
              {whatsappLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <EditorFrame label="WHATSAPP">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-sm sm:text-base"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  </EditorFrame>
                </motion.div>
              )}

              {/* LinkedIn Button */}
              {linkedinLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <EditorFrame label="LINKEDIN">
                    <a
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-sm sm:text-base"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </EditorFrame>
                </motion.div>
              )}

              {/* GitHub Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <EditorFrame label="GITHUB">
                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-sm sm:text-base"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                </EditorFrame>
              </motion.div>
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
