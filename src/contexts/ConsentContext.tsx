import React, { createContext, useContext, useState, useEffect } from 'react';

type ConsentContextType = {
  hasConsent: boolean;
  acceptConsent: () => void;
  rejectConsent: () => void;
  showBanner: boolean;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    } else {
      setHasConsent(consent === 'accepted');
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setHasConsent(true);
    setShowBanner(false);
    
    // Initialize tracking scripts
    if (typeof window !== 'undefined') {
      // GA4 initialization would go here
      // Meta Pixel initialization would go here
    }
  };

  const rejectConsent = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setHasConsent(false);
    setShowBanner(false);
  };

  return (
    <ConsentContext.Provider value={{ hasConsent, acceptConsent, rejectConsent, showBanner }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}