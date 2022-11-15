import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { getStoreJSON } from "../../../util/setting";
import AdminBookingHistory from "./AdminBookingHistory";
import AdminProfileForm from "./AdminProfileForm";

type Props = {};

export default function HomeAdmin({}: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);

  const userLogin = getStoreJSON("userLogin");

  return (
    <>
      <div className="row justify-content-between">
        <div className="admin-profile-box col-5 col-lg-4">
          <div className="admin-avatar">
            <div className="admin-avatar__img">
              <img src={"https://i.pravatar.cc/200"} alt="admin's name" />
            </div>
            <button className="admin-avatar__icon">
              <i className="fa fa-upload"></i>
            </button>
          </div>
          <div className="admin-info">
            <strong>admin name</strong>
            <div className="admin-info__item">
              <i className="fas fa-envelope-open me-2"></i>
              <span>adminemail@gmail.com</span>
            </div>
            <div className="admin-info__item">
              <i className="fas fa-phone me-2"></i>
              <span>0987654321</span>
            </div>
          </div>
          <div className="admin-profile-function mt-3">
            <button
              className="btn btn-dark me-md-2 me-0"
              onClick={() => setOpenModal(true)}
            >
              Edit profile
            </button>
            <button className="btn btn-secondary">Log out</button>
          </div>
        </div>
        <div className="col-6 col-lg-7">
          <AdminBookingHistory />
        </div>
      </div>

      <Modal show={openModal} size="lg" className="modal-dialog-scrollable">
        <Modal.Header>
          <Modal.Title>Thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminProfileForm handleCloseModal={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
