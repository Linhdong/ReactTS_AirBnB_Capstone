import React from "react";
import { Formik, useFormik, FormikProps } from "formik";
import * as Yup from "yup";

type Props = {};

export default function SignUp({}: Props) {

  const formik = useFormik<{
    fullName: string;
    userName: string;
    email: string;
    phone: string;
    password: string;
    confirmPass: boolean;
  }>({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPass: false
    },
    onSubmit: (values): void => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      query: Yup.string(),
    }),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5   titleSignIn">
                Sign Up
              </h5>
              <h3>Welcome to Airbnb</h3>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full name"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="floatingInput">Full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="User name"
                  />
                  <label htmlFor="floatingInput">User name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="floatingInput">Phone</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPass"
                    placeholder="Confirm pasword"
                  />
                  <label htmlFor="floatingPassword">Confirm password</label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button className="  btn-login  fw-bold" type="submit">
                    Sign In
                  </button>
                </div>
                <hr className="my-4" />
                <div className="d-grid">
                  <button className="  btn-login  fw-bold" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
