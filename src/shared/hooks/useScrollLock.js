import { useLayoutEffect } from "react";

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export default function useScrollLock(lock = false) {
  useLayoutEffect(() => {
    const body = document.body;
    const scrollbarWidth = getScrollbarWidth();

    if (lock) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [lock]);
}
