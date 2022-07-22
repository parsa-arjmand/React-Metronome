import React from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function BlinkBar({ counter, isPlaying }) {
  return (
    <div className="blink">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          exit={{ opacity: 0 }}
          className="blink-dot"
          transition={
            isPlaying
              ? {
                  duration: 60 / counter,
                  repeat: Infinity,
                  repeatType: "loop",
                  type: "spring",
                }
              : {}
          }
          animate={isPlaying ? { x: 123 } : {}}
        />
      </AnimatePresence>
    </div>
  );
}

export default BlinkBar;
