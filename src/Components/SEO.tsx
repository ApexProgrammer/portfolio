import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ryan Casey - Software Developer | Professional Portfolio",
  description = "Ryan Casey is a skilled software developer specializing in React, TypeScript, full-stack web development, and cybersecurity. Explore my professional portfolio featuring innovative projects and technical expertise.",
  keywords = "Ryan Casey, Software Developer, Web Developer, React Developer, TypeScript, Full Stack Developer, Frontend Developer, JavaScript, Portfolio, Cybersecurity, Professional Developer, Software Engineer, Web Applications, ryancasey.us",
  image = "https://ryancasey.us/avatar.png",
  url = "https://ryancasey.us/",
  type = "website"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
