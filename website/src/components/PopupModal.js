// /components/PopupModal.js
import React from "react";

function PopupModal({ show, onClose, title, children }) {
  // Bootstrap 5 uses .show on the .modal and "display: block" to control visibility
  const modalClass = show ? "modal fade show d-block" : "modal fade";

  return (
    <div className={modalClass} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: "#4a148c", color: "#fff" }}>
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default PopupModal;
