import React from "react";
import Detail from "./Detail";
import "./Footer.css";
import Theme from "./Theme";
import { useState, useEffect } from "react";
function Footer({ theme, setTheme, isPlaying }) {
  const [timer, setTimer] = useState(0);
  const [currentTimer, setCurrentTimer] = useState(0);
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer((prevCount) => prevCount + 1);
        setCurrentTimer((prevCount) => prevCount + 1);
      }, 60000);
    } else {
      setCurrentTimer(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  console.log(timer);
  console.log(currentTimer);
  return (
    <section className="footer">
      <Theme theme={theme} setTheme={setTheme} />
      <Detail title="practice session:" min={currentTimer} />
      <Detail title="Total practice session:" min={timer} />
    </section>
  );
}

export default Footer;
