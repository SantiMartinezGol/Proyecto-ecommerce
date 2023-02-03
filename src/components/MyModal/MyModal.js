import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyModal = ({show, handleClose, title,body, close, save}) => {

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {(close)?(<Button variant="secondary" onClick={handleClose}>
            {close}
          </Button>):('')}
          <Button variant="primary" onClick={handleClose}>
            {save}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal