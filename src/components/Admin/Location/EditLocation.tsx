import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import { clearStatusAction, putLocationApi } from "../../../redux/reducers/locationsReducer";
import { openNotificationWithIcon } from "../../../util/notification";

type Props = {

};

export interface LocationUpdate {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh?:string;
}


export default function EditLocation({ }: Props) {
  const { location, statusAction } = useSelector(
    (state: RootState) => state.locationsReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const formik = useFormik<{
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    // hinhAnh: string;
  }>({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      // hinhAnh: "",
    },
    validationSchema: Yup.object().shape({
      tenViTri: Yup.string().required("Location is required!"),
      tinhThanh: Yup.string().required("City is required!"),
      quocGia: Yup.string().required("Country is required!"),
      // hinhAnh: Yup.string().required("Please enter website"),
    }),
    onSubmit: async (values) => {
      const locationEdit : LocationUpdate = {
        id: values?.id,
        tenViTri: values?.tenViTri,
        tinhThanh: values?.tinhThanh,
        quocGia: values?.quocGia,
      }
      const updateAction = putLocationApi(location?.id, locationEdit);
      dispatch(updateAction);
      if(statusAction === 200){
        openNotificationWithIcon(
          "success",
          "Add Location Successfully !!",
          <p>Return location table to review information !</p>
        );
        const clearStatus = clearStatusAction();
        dispatch(clearStatus);
      }
    },
  });

  const setFieldValue = () => {
    formik.setFieldValue("id", location.id);
    formik.setFieldValue("tenViTri", location.tenViTri);
    formik.setFieldValue("tinhThanh", location.tinhThanh);
    formik.setFieldValue("quocGia", location.quocGia);
  };

  useEffect(() => {
    setFieldValue();
    renderLocation();
  }, [location]);
  // console.log("Location: ", location.tenViTri);

  const renderLocation = () => {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group my-1">
                <label className="form-label">Place</label>
                <input
                  type="text"
                  className="form-control"
                  id="tenViTri"
                  placeholder="Place adrress"
                  value={formik.values?.tenViTri}
                  onChange={formik.handleChange}
                />
                {formik.errors.tenViTri && formik.touched.tenViTri && (
                  <p className="text-danger my-1">Place Required</p>
                )}
              </div>
              <div className="form-group my-1">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="tinhThanh"
                  placeholder="Your city"
                  value={formik.values?.tinhThanh}
                  onChange={formik.handleChange}
                />
                {formik.errors.tinhThanh && formik.touched.tinhThanh && (
                  <p className="text-danger my-1">City Required</p>
                )}
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group my-1">
                <label className="form-label">Nation</label>
                <input
                  type="text"
                  className="form-control"
                  id="quocGia"
                  aria-describedby="emailHelp"
                  placeholder="Your nation"
                  value={formik.values?.quocGia}
                  onChange={formik.handleChange}
                />
                {formik.errors.quocGia && formik.touched.quocGia && (
                  <p className="text-danger my-1">Nation Required</p>
                )}
              </div>
            </div>
            <div className="btnSubmit d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-primary btn-md mt-2 rounded-pill px-4"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </>
    );
  };
  return (
    <div className="container">
      <div className="update-location container my-3 p-4 rounded-4">
        <div className="title">
          <div className="card border-0 shadow p-3">
            <div className="card-title">
              <h3>Information's Location</h3>
            </div>
            <div className="card-body">{renderLocation()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
