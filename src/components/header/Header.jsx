import "./Header.css";
import { useState } from "react";
import MeasureBtns from "../modal/MeasureBtns";
import Modal from "../modal/Modal";
import Counter from "./Counter";
import TuneBtns from "../modal/TuneBtns";
function Header({
  counter,
  setCounter,
  setMeasure,
  measure,
  isPlaying,
  setIsPlaying,
  setAudio1,
  setAudio2,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalTune, setShowModalTune] = useState(false);
  const clickMeasureSet = () => {
    setShowModal(true);
    setIsPlaying(false);
  };
  const clickTuneSet = () => {
    setShowModalTune(true);
    setIsPlaying(false);
  };
  return (
    <header className="header">
      <div className="header-container">
        <Counter
          counter={counter}
          setCounter={setCounter}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
        <div className="buttons">
          <button className="left" onClick={clickMeasureSet}>
            {measure}
          </button>
          <button className="right" onClick={clickTuneSet}>
            tune
          </button>
        </div>
      </div>
      <Modal
        modalClass="modal"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <MeasureBtns setMeasure={setMeasure} />
      </Modal>
      <Modal
        modalClass="modal modal-tune"
        showModal={showModalTune}
        setShowModal={setShowModalTune}
      >
        <TuneBtns setAudio1={setAudio1} setAudio2={setAudio2} />
      </Modal>
    </header>
  );
}

export default Header;
