import { useFormik } from "formik";
import React from "react";

type Props = {
  handleCloseModal: () => void;
};

export default function AdminProfileForm({ handleCloseModal }: Props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Tên tài khoản</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="phone">Số điện thoại</label>
        <input type="string" className="form-control" id="phone" />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="birthday">DOB</label>
        <input type="string" className="form-control" id="birthday" />
      </div>
      <hr />
      <div className="form-buttons">
        <button className="btn btn-secondary" onClick={handleCloseModal}>
          Close
        </button>
        <button className="btn btn-success ms-2">Submit</button>
      </div>
    </form>
  );
}
