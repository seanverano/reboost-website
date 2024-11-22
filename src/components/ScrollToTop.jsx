import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  const scrollToSection = useCallback(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    scrollToSection();
  }, [pathname, hash, scrollToSection]);

  return null;
};

export default ScrollToTop;
