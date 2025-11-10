import { motion } from "framer-motion";

const PageTransitionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageTransitionWrapper;
