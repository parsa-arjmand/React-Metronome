import { Header, Metro, Footer } from "./components";
import { Audio1, Audio2 } from "./audio";
import "./App.css";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState(
    () => parseInt(window.localStorage.getItem("counter")) || 100
  );
  const [measure, setMeasure] = useState(4);
  const [audio1, setAudio1] = useState(Audio1);
  const [audio2, setAudio2] = useState(Audio2);
  const audio1Ref = useRef();
  const audio2Ref = useRef();
  useEffect(() => {
    window.localStorage.setItem("counter", counter);
  }, [counter]);
  return (
    <div className="app" data-theme={theme}>
      <div className="content">
        <Header
          counter={counter}
          setCounter={setCounter}
          setMeasure={setMeasure}
          setIsPlaying={setIsPlaying}
          measure={measure}
          setAudio1={setAudio1}
          setAudio2={setAudio2}
        />
        <Metro
          audio1Ref={audio1Ref}
          audio2Ref={audio2Ref}
          counter={counter}
          measure={measure}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />

        <Footer theme={theme} setTheme={setTheme} isPlaying={isPlaying} />
        <audio ref={audio1Ref} src={audio1}></audio>
        <audio ref={audio2Ref} src={audio2}></audio>
      </div>
    </div>
  );
};
export default App;
