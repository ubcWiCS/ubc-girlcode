import React from "react";
import Modal from "react-bootstrap/Modal";

export default function WorkshopModal(props) {
  const handleClose = () => {
    props.setShow(false);
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <a href={props.url}>
            <button type="button" className="cta-button">
              Sign up now
            </button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
