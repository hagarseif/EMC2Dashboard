import { createPortal } from "react-dom";
import { Button } from "reactstrap";

function Modal({ children,onClose }) {
  return createPortal (
    <div className="overlay">
      <div className="modalForm">
        <Button className="close-btn" onClick={onClose}>x</Button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
