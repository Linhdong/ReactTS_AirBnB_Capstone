import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { hideModal, showModal } from "../../redux/reducers/modalAdminReducer";
import { useFormikContext } from "formik";

type Props = {
  show: boolean
};

export default function ModalAdmin({show}: Props) {
  const { isOpened, ChildrenComponent, callbackSubmit } = useSelector(
    (state: RootState) => state.modalAdminReducer
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <Modal show={isOpened} size="lg" className="modal-dialog-scrollable">
      <Modal.Header>
        <Modal.Title>Hi</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ChildrenComponent}</Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(hideModal())}
        >
          Close
        </button>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}
