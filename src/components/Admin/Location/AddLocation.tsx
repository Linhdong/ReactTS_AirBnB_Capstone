import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { http } from "../../../util/setting";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function AddLocation({}: Props) {
  const navigate = useNavigate();
  const formik = useFormik<{
    id: number;
    tenVitri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
  }>({
    initialValues: {
      id: 0,
      tenVitri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    // validationSchema: Yup.object().shape({
    //   tenViTri: Yup.string().required("Location is required!"),
    //   tinhThanh: Yup.string().required("City is required!"),
    //   quocGia: Yup.string().required("Country is required!"),
    //   hinhAnh: Yup.string().matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     'Enter correct url!'
    // ).required('Please enter website'),
    // }),
    onSubmit: async (values) => {
      console.log("User: ", values);   
      try {
        let result = await http.post("vi-tri", values);
        alert("Add Location Successfully !");
        console.log(result.data.content);
        console.log("Add Location Successfully !");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h3 className="card-title text-center mb-5">New Location</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <label className="my-1">Location Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenVitri"
                    placeholder="Your Location"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.tenVitri ? (
                    <p className="text-danger mt-1">
                      {formik.errors.tenVitri}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="my-1">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tinhThanh"
                    placeholder="City"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.tinhThanh ? (
                    <p className="text-danger mt-1">
                      {formik.errors.tinhThanh}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="my-1">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="quocGia"
                    placeholder="Country"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.quocGia ? (
                    <p className="text-danger mt-1">
                      {formik.errors.quocGia}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="my-1">Picture</label>
                  <input
                    type="url"
                    className="form-control"
                    id="hinhAnh"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    onChange={formik.handleChange}
                  />
                  {/* {formik.errors.hinhAnh ? (
                    <p className="text-danger mt-1">
                      {formik.errors.hinhAnh}
                    </p>
                  ) : (
                    ""
                  )} */}
                </div>
                <div className="btnSubmit d-md-flex justify-content-md-between">
                  <button
                    className="btn btn-outline-warning btn-md rounded-pill px-4"
                    type="button" onClick={() => {
                      navigate('/admin/locations')
                    }}
                  >
                    Return
                  </button>
                  <button
                    className="btn btn-outline-success btn-md rounded-pill px-4"
                    type="submit"
                  >
                    Submit
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
