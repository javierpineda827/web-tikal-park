import PropTypes from "prop-types";

import ReactDOM from "react-dom";
import "./Modal.modules.css"; // Importar el CSS para el modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return false;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button text-white  btnClose"
          style={{ right: "1.5vw", fontSize: "3.5rem" }}
          onClick={onClose}
        ></button>
        <div className="container mx-auto">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

Modal.protoTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.children,
};

export default Modal;
