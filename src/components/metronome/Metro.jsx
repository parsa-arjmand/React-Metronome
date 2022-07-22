import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./Metro.css";
import { motion } from "framer-motion/dist/framer-motion";
import play from "../../assets/Shape.svg";
import pause from "../../assets/pause.svg";
import BlinkBar from "./BlinkBar";
function Metro({
  counter,
  measure,
  isPlaying,
  setIsPlaying,
  audio1Ref,
  audio2Ref,
}) {
  const [count, setCount] = useState(1);

  const playFunc = useCallback(() => {
    if (count % measure === 0) {
      audio1Ref.current.play();
      audio1Ref.current.currentTime = 0;
      setCount(1);
    } else {
      audio2Ref.current.play();
      audio2Ref.current.currentTime = 0;
      setCount((prevCount) => prevCount + 1);
    }
  }, [audio1Ref, audio2Ref, count, measure]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(playFunc, (60 / counter) * 1000);
    }
    //when the user pauses reset everything to start fresh
    else {
      setCount(1);
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter, isPlaying, playFunc]);

  return (
    <>
      <section className="metro">
        <motion.button
          aria-label="play button"
          animate={
            count === measure ? { scale: 1.1, backgroundColor: "#6100ff" } : {}
          }
          className="play-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img className="play-img" src={isPlaying ? pause : play} alt="" />
        </motion.button>
        <BlinkBar counter={counter} isPlaying={isPlaying} />
      </section>
    </>
  );
}

export default Metro;
