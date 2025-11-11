import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useMobileMenu } from "../hooks/useMobileMenu";
import MobileMenuOverlay from "./MobileMenuOverlay";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import RickLogo from "/src/assets/icons/logo.svg";
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
      <header className="fixed top-0 left-0 w-full xl:px-40 z-20 shadow-header-footer bg-header">
        <div className="px-4 mx-auto container">
          <div className="flex justify-between items-center py-1">
            <div className="flex gap-4">
              <Link to="/">
                <div className="rounded-full">
                  <img src={RickLogo} className="w-10 sm:w-12" alt="logo" />
                </div>
              </Link>
              <DarkModeToggle />
            </div>

            <button
              className="sm:hidden relative w-9 h-9 overflow-hidden"
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
                    <IoCloseOutline className="w-8 h-8 text-secondary-100 mt-0.5" />
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
                    <IoIosMenu className="w-8 h-8 text-secondary-100 mt-0.5" />
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
