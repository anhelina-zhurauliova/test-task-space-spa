import { useEffect, useState } from "react";

const TABLET_BREAKPOINT = 768;
const MOBILE_BREAKPOINT = TABLET_BREAKPOINT - 1;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    window.addEventListener("resize", handleResize);
    // ensure correct initial value on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return !!isMobile;
}
