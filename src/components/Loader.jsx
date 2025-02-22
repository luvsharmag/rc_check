import { motion } from "framer-motion";

const Loader = () => (
  <motion.div
    className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mt-6"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1 }}
  />
);

export default Loader;
