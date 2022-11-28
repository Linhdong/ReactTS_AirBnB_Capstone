import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import { useSelector } from "react-redux";
import moment from "moment/moment.js";
import FormItemLabel from "antd/es/form/FormItemLabel";
const logo = require("./../../../assets/img/Image_2.png");
type Props = {};

export default function Info_User({}: Props) {
  const { editUser } = useSelector(
    (state: RootState) => state.userReducer
  );

  const formik = useFormik<{
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    avatar: string;
    gender: boolean;
    role: string;
  }>({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      avatar: "",
      gender: false,
      role: "",
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: async (values) => {},
  });
  
  const setFieldValue = () => {
    formik.setFieldValue("id", editUser.id);
    formik.setFieldValue("name", editUser.name);
    formik.setFieldValue("email", editUser.email);
    formik.setFieldValue("password", editUser.password);
    formik.setFieldValue("phone", editUser.phone);
    formik.setFieldValue("birthday", editUser.birthday);
    formik.setFieldValue("avatar", editUser.avatar);
    formik.setFieldValue("gender", editUser.gender);
    formik.setFieldValue("role", editUser.role);
  };

  useEffect(() => {
    setFieldValue();
  }, [editUser]);
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12 image-user">
          <div className="avatar mx-2" style={{ marginTop: "80px" }}>
            <img
              src={formik.values?.avatar}
              className="rounded-circle"
              alt="..."
              style={{
                width: "100px",
                height: "100px",
                verticalAlign: "middle",
              }}
            />
          </div>
          <div className="userName mt-2 text-center">
            <p>{formik.values?.name}</p>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="form-group my-1">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              aria-describedby="emailHelp"
              value={formik.values?.id}
              readOnly
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              value={formik.values?.name}
              readOnly
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={formik.values.email}
              readOnly
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={formik.values?.password}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="form-group my-1">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={formik.values?.phone}
              readOnly
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Birthday</label>
            <input
              type="text"
              className="form-control"
              id="birthday"
              aria-describedby="emailHelp"
              value={formik.values?.birthday}
              readOnly
            />
          </div>
          <div className="form-group my-1">
            <label className="form-label">Gender</label>
            {formik.values?.gender ? (
              <input
                type="text"
                className="form-control"
                id="birthday"
                aria-describedby="emailHelp"
                value="Female"
                readOnly
              />
            ) : (
              <input
                type="text"
                className="form-control"
                id="birthday"
                aria-describedby="emailHelp"
                value="Male"
                readOnly
              />
            )}
          </div>
          <div className="form-group my-1">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              id="birthday"
              aria-describedby="emailHelp"
              value={formik.values?.role}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}
