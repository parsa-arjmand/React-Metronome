import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
function Counter({ counter, setCounter, isPlaying, setIsPlaying }) {
  const playCheck = () => isPlaying && setIsPlaying(false);
  const counterPlus = () => {
    setCounter((prevCount) => prevCount + 1);
    playCheck();
  };
  const counterMinus = () => {
    setCounter((prevCount) => prevCount - 1);
    playCheck();
  };
  return (
    <div className="counter-wrapper">
      <button
        aria-label="decrease bpm"
        className="btn"
        onClick={counterMinus}
        disabled={counter === 30 ? true : false}
      >
        <img className="minus-icon" src={minus} alt="" />
      </button>
      <span className="num">{counter}</span>
      <span className="bpm">BPM</span>
      <button
        aria-label="increase bpm"
        className="btn"
        onClick={counterPlus}
        disabled={counter === 250 ? true : false}
      >
        <img className="plus-icon" src={plus} alt="" />
      </button>
    </div>
  );
}

export default Counter;
