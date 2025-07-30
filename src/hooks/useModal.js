import { useState } from "react";
import useScrollLock from "./useScrollLock";

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isClosing, setIsClosing] = useState(false);

  useScrollLock(isOpen);

  const open = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const toggleModal = () => setIsOpen((prev) => !prev);

  return { isOpen, isClosing, open, close, toggleModal };
}
