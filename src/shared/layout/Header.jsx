import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useMobileMenu } from "./hooks/useMobileMenu";
import MobileMenuOverlay from "../components/MobileMenuOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Header() {
  const { isOpen, closeMenu, toggleMenu } = useMobileMenu();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, closeMenu]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full xl:px-40 z-20 shadow-header-footer bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-1 ">
            <Link to="/">
              <img src="/src/assets/icons/logo.svg" alt="logo" />
            </Link>

            <button
              className="sm:hidden relative w-5 h-5 overflow-hidden"
              onClick={toggleMenu}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src="/src/assets/icons/close-icon.svg"
                      className="w-5 h-5"
                      alt="close-icon"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="hamburger"
                    initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src="/src/assets/icons/hamberger-menu.svg"
                      className="w-full h-full"
                      alt="hamberger-menu"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="hidden sm:block">
              <NavLinks className={"hidden sm:flex sm:gap-6"} />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full h-screen z-10 bg-white overflow-y-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <MobileMenuOverlay onClose={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
