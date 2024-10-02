import "./Modal.css";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="dev-modal">
      <div className="dev-modal-content">
        <div className="dev-modal-header">
          <span onClick={onClose} className="close-modal">
            &times;
          </span>
          {header ? header : <h3>This is header</h3>}
        </div>
        <div className="dev-modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is modal body</p>
            </div>
          )}
        </div>
        <div className="dev-modal-footer">
          {footer ? footer : <h3>This is footer</h3>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
