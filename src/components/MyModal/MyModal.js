import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = (props) => {

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-light btn-confirma"
          variant="secondary"
          onClick={props.handleClose}
        >
          Fechar
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;