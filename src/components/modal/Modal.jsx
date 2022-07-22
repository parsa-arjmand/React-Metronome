import "./Modal.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

import close from "../../assets/close.svg";
import ReactDOM from "react-dom";
function Modal({ showModal, setShowModal, modalClass, children }) {
  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          animate={{ opacity: 1 }}
          className="backdrop"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0, x: 0 }}
            animate={{ scale: 1, x: -150 }}
            exit={{ scale: 0 }}
            className={modalClass}
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowModal(false)}
              className="close-btn"
              src={close}
              alt="close"
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
