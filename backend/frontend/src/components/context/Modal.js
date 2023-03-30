import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState(null);
  
  useEffect(() => {
    setValue(modalRef.current);
  }, []);
  
  return (
    <ModalContext.Provider value={value}>
      <div>
      {children}
      <div ref={modalRef} />
    </div>
    </ModalContext.Provider>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  
  if (!modalNode) return null;
  
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
      <button id="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    modalNode
  );
}