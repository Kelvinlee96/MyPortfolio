'use client';

import { useEffect, useRef } from 'react';

// Extend Window interface for Credly
declare global {
  interface Window {
    CrederlyUtil?: {
      init: () => void;
    };
  }
}

const CredlyBadge = ({ badgeId }: { badgeId: string }) => {
  const credlyBadgeRef = useRef<HTMLDivElement>(null);

  // Set Credly badge HTML once on mount (prevents React from resetting it on re-renders)
  useEffect(() => {
    if (credlyBadgeRef.current && !credlyBadgeRef.current.hasChildNodes()) {
      credlyBadgeRef.current.innerHTML = `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${badgeId}" data-share-badge-host="https://www.credly.com"></div>`;
    }
  }, [badgeId]);

  // Load Credly badge script once on component mount
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const existingScript = document.querySelector('script[src*="credly.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.id = 'credly-embed-script';
      document.body.appendChild(script);
    }
    // Keep script loaded permanently - no cleanup
  }, []);

  return <div ref={credlyBadgeRef} id="credly-badge-container" />;
};

export default CredlyBadge;
