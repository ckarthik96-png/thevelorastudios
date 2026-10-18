import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_METADATA, STUDIO_CONFIG } from '../data/studioData';

export default function SEO({ customTitle, customDescription, videoData }) {
  const location = useLocation();

  useEffect(() => {
    const meta = SEO_METADATA[location.pathname] || {
      title: "The Velora Studios | Video Production, Advertising, Motion Graphics & AI Agency",
      description: "We create videos that bring brands, products, events, and stories to life. Serving clients in Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad."
    };

    const titleToSet = customTitle || meta.title;
    const descToSet = customDescription || meta.description;
    const canonicalUrl = `https://thevelorastudios.com${location.pathname === '/' ? '' : location.pathname}`;

    // 1. Update Document Title
    document.title = titleToSet;

    // 2. Helper to set meta attribute
    const setMeta = (selector, attr, value) => {
      let elem = document.querySelector(selector);
      if (!elem) {
        elem = document.createElement('meta');
        const [attrName, attrVal] = selector.replace(/[\[\]"]/g, '').split('=');
        elem.setAttribute(attrName, attrVal);
        document.head.appendChild(elem);
      }
      elem.setAttribute(attr, value);
    };

    // 3. Update Standard & Social Meta
    setMeta('meta[name="description"]', 'content', descToSet);
    setMeta('meta[property="og:title"]', 'content', titleToSet);
    setMeta('meta[property="og:description"]', 'content', descToSet);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', titleToSet);
    setMeta('meta[name="twitter:description"]', 'content', descToSet);
    setMeta('meta[name="twitter:url"]', 'content', canonicalUrl);

    // 4. Update / Create Canonical Link
    let canonicalElem = document.querySelector('link[rel="canonical"]');
    if (!canonicalElem) {
      canonicalElem = document.createElement('link');
      canonicalElem.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElem);
    }
    canonicalElem.setAttribute('href', canonicalUrl);

    // 5. Inject Structured Data (Schema.org JSON-LD)
    let schemaScript = document.getElementById('velora-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'velora-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "name": STUDIO_CONFIG.name,
      "alternateName": "The Velora Studios",
      "url": "https://thevelorastudios.com",
      "logo": "https://thevelorastudios.com/favicon.png",
      "description": "Video production, advertising, motion graphics, and AI-powered storytelling agency based in Bangalore, serving clients across Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad.",
      "telephone": "+917483404094",
      "email": "hello@thevelorastudios.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "City", "name": "Bangalore" },
        { "@type": "City", "name": "Hyderabad" }
      ],
      "sameAs": Object.values(STUDIO_CONFIG.socials).filter(Boolean)
    };

    let fullSchema = organizationSchema;

    if (videoData && videoData.videoUrl) {
      const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videoData.title,
        "description": videoData.description,
        "thumbnailUrl": [videoData.image.startsWith('http') ? videoData.image : `https://thevelorastudios.com${videoData.image}`],
        "uploadDate": "2026-01-01T00:00:00+05:30",
        "duration": `PT${videoData.duration.replace(':', 'M')}S`,
        "contentUrl": videoData.videoUrl.startsWith('http') ? videoData.videoUrl : `https://thevelorastudios.com${videoData.videoUrl}`,
        "embedUrl": canonicalUrl
      };
      fullSchema = [organizationSchema, videoSchema];
    }

    schemaScript.textContent = JSON.stringify(fullSchema);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, customTitle, customDescription, videoData]);

  return null;
}
