import { useCallback, useState } from "react";
import useScrollLock from "../hooks/useScrollLock";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // scroll locking
  useScrollLock(isOpen);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openMenu, closeMenu, toggleMenu };
}
