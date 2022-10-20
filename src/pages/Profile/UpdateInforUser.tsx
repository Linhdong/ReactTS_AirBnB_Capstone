import React from "react";

type Props = {};

export default function UpdateInforUser({}: Props) {
  const avatar = require("./../../assets/img/Imag_1.png");
  return (
    <div className="update-user container my-3 p-4 rounded-4">
      <div className="title ms-4">
        <h3>Update Your Information</h3>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12 image-user">
          <div className="avatar" style={{margin:'25px'}}>
            <img
              src={avatar}
              className="rounded-circle"
              alt="..."
              style={{ width: "120px", height: "131px" }}
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="form-group my-1">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email adrress"
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Phone</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="form-group my-1">
            <label className="form-label">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your name"
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Password</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Type your password"
            />
          </div>
          <div className="gender my-3">
            <label className="form-label me-3">Gender</label>
            <div className="form-check form-check-inline mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div className="btnSubmit d-md-flex justify-content-md-end">
            <button
              className="btn btn-outline-success btn-md me-4 rounded-pill px-4"
              type="button"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
