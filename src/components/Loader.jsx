import { motion } from "framer-motion";

const Loader = () => (
  <motion.div
    className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mt-4 mx-auto"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1 }}
  />
);

export default Loader;
