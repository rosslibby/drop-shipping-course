import React from "react";

const Modal = ({ children, toggle, visible }) => {
  return (
    <div className={`portal-modal ${visible ? "portal-modal--visible" : ""}`}>
      <div className="portal-modal__background">
        <div className="portal-modal__box">
          <div className="portal-modal__close" onClick={toggle}>
            x
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
