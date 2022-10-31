import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { hideModal, showModal } from "../../redux/reducers/modalAdminReducer";

type Props = {};

export default function ModalAdmin({}: Props) {
  const { isOpened } = useSelector(
    (state: RootState) => state.modalAdminReducer
  );

  return (
    <>
      <button onClick={showModal}>open</button>
      <Modal show={isOpened}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
