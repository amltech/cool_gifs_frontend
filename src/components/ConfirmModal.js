import React, { useState, useEffect } from 'react';



const ConfirmModal = (props) => {
  const [ open, setOpen ] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const onConfirm = (e) => {
    e.preventDefault();
    setOpen(false);
    props.onConfirm();
  };

  return (
    <>
      <a href="#" className={props.className} onClick={openModal}>{props.buttonText}</a>
      <div className={`modal ${open ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Confirmation</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            {props.children}
          </section>
          <footer className="modal-card-foot">
            <button className={`button ${props.confirmClass ? props.confirmClass : 'is-primary'}`} 
                    onClick={onConfirm}>{props.confirmText}</button>
            <button className="button" onClick={closeModal}>Cancel</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal; 
