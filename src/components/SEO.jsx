import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_METADATA } from '../data/studioData';

export default function SEO({ customTitle, customDescription }) {
  const location = useLocation();

  useEffect(() => {
    const meta = SEO_METADATA[location.pathname] || {
      title: "The Velora Studios | Branding & Web Design",
      description: "Build a distinctive brand and a purposeful online presence with The Velora Studios."
    };

    const titleToSet = customTitle || meta.title;
    const descToSet = customDescription || meta.description;

    document.title = titleToSet;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descToSet);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, customTitle, customDescription]);

  return null;
}
