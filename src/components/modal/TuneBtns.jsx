import React from "react";
import { Audio1, Audio2, Audio3, Audio4 } from "../../audio";
function TuneBtns({ setAudio1, setAudio2 }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setAudio1(Audio1);
          setAudio2(Audio2);
        }}
      >
        track 1
      </button>
      <button
        className="btn"
        onClick={() => {
          setAudio1(Audio3);
          setAudio2(Audio4);
        }}
      >
        {" "}
        track 2
      </button>
    </>
  );
}

export default TuneBtns;
