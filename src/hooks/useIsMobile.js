import { useEffect, useState } from "react";

const TABLET_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${TABLET_BREAKPOINT - 1}px)`
    );

    const handleViewportChange = () => {
      setIsMobile(window.innerWidth < TABLET_BREAKPOINT);
    };

    mediaQuery.addEventListener("change", handleViewportChange);
    handleViewportChange();

    setIsMobile(window.innerWidth < TABLET_BREAKPOINT);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return !!isMobile;
}
