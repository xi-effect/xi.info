import { useEffect, useState } from "react";

const COOKIE_ACCEPTED = "cookie-accepted";

const useCookieBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_ACCEPTED);
    
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_ACCEPTED, "true");
    setIsOpen(false);
  };

  return { 
    isOpen, 
    acceptCookies, 
  };
};

export { useCookieBanner };
