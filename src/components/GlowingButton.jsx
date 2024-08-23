import React from "react";
import { motion } from "framer-motion";

const GlowingButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      animate={{
        boxShadow: [
          "0 0 10px rgba(255, 99, 71, 0.5)",
          "0 0 20px rgba(255, 99, 71, 0.9)",
        ],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      className="bg-customOrange text-white font-semibold py-2 px-4 rounded-full"
    >
      Join the Waitlist
    </motion.button>
  );
};

export default GlowingButton;
