import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatMinSurfaceLabel } from '../data/lots';

const SITE_URL = 'https://espace-verdi.fr';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-espace-verdi.jpg`;

interface PageMetaConfig {
  title: string;
  description: string;
  path: string;
}

const pages: Record<string, PageMetaConfig> = {
  '/': {
    title: 'Espace VERDI — Programme tertiaire Néoules',
    description:
      "Espace VERDI — Programme immobilier tertiaire à Néoules. Bureaux, cabinets médicaux et professions libérales sur l'axe RD 554. Livraison 2028.",
    path: '/',
  },
  '/le-programme': {
    title: 'Le programme — Espace VERDI Néoules',
    description:
      "Découvrez Espace VERDI : immeuble tertiaire modulable à Néoules, parking dédié, accessibilité PMR et livraison bruts de béton en 2028.",
    path: '/le-programme',
  },
  '/offres': {
    title: 'Nos offres — Espace VERDI Néoules',
    description:
      `Lots tertiaires modulables ${formatMinSurfaceLabel()} à Néoules : bureaux, cabinets médicaux et professions libérales. Configurations cumulables selon vos besoins.`,
    path: '/offres',
  },
  '/contact': {
    title: 'Contact — Espace VERDI Néoules',
    description:
      'Contactez Espace VERDI pour votre projet tertiaire à Néoules. Téléphone, email et prise de rendez-vous avec notre équipe.',
    path: '/contact',
  },
};

function setMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonicalLink(href: string) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

/**
 * Met à jour title, description et balises sociales à chaque changement de route.
 */
function PageMeta() {
  const { pathname } = useLocation();
  const meta = pages[pathname] ?? pages['/'];
  const canonicalUrl = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;

  useEffect(() => {
    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);
    setMetaTag('property', 'og:image:alt', "Immeuble tertiaire Espace VERDI sur l'axe RD 554 à Néoules");
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);
    setCanonicalLink(canonicalUrl);
  }, [meta, canonicalUrl]);

  return null;
}

export default PageMeta;
