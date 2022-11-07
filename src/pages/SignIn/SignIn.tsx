import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInApi } from "../../redux/reducers/signInReducer";
import { useDispatch, useSelector } from "react-redux";
import {getStore} from "./../../util/setting"
import { AppDispatch, RootState } from "./../../redux/configStore";


type Props = {};

export default function SignIn({}: Props) {
  const { userLogin } = useSelector((state: RootState) => state.signInReducer);
  const navigate = useNavigate();
  const [page, setPage] = useState(getStore("userLogin"));
  const dispatch:AppDispatch = useDispatch()
  const formik = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      
      const action = signInApi(values);
      dispatch(action)
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email!"),
      password: Yup.string()
        .required("Password is required!")
        .min(8, "Password must have at least 8 characters"),
    }),
  });

  useEffect(() => {
    if (userLogin) {
      navigate("/")
    } else {
      navigate("/signin");
    }
  }, [userLogin]);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5   titleSignIn">
                Sign In
              </h5>
              <h3>Welcome to Airbnb</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <label className="my-1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email ? (
                    <p className="text-danger mt-1">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="my-1">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password ? (
                    <p className="text-danger mt-1">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="d-grid">
                  <button className="  btn-login  fw-bold" type="submit">
                    Sign In
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
