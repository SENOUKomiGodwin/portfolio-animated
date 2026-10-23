import { siteData } from '@/content/site-data';

export function getWhatsAppLink(): string | null {
  if (!siteData.whatsapp || !siteData.whatsappMessage) {
    return null;
  }
  return `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.whatsappMessage)}`;
}

export function getMailtoLink(): string | null {
  if (!siteData.email || !siteData.emailSubject || !siteData.emailBody) {
    return null;
  }
  return `mailto:${siteData.email}?subject=${encodeURIComponent(siteData.emailSubject)}&body=${encodeURIComponent(siteData.emailBody)}`;
}

export function getLinkedInLink(): string | null {
  if (!siteData.linkedin) {
    return null;
  }
  return siteData.linkedin;
}
