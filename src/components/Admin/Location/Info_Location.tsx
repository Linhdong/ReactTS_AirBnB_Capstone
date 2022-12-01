import React, { useEffect } from "react";
import { useFormik } from "formik";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import { useSelector } from "react-redux";

type Props = {};
const logo = require("./../../../assets/img/Image_2.png");
export default function Info_Location({}: Props) {
  const { location } = useSelector(
    (state: RootState) => state.locationsReducer
  );
  const formik = useFormik<{
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
  }>({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    onSubmit: async (values) => {},
  });

  const setFieldValue = () => {
    formik.setFieldValue("id", location?.id);
    formik.setFieldValue("tenViTri", location?.tenViTri);
    formik.setFieldValue("tinhThanh", location?.tinhThanh);
    formik.setFieldValue("quocGia", location?.quocGia);
    formik.setFieldValue("hinhAnh", location?.hinhAnh);
  };

  useEffect(() => {
    setFieldValue();
  }, [location]);

  return (
    <div className="card border-0 shadow rounded-3 my-5">
      <div className="card-body p-4 p-sm-5">
        <div className="row">
          <div className="col-sm-3 image-location">
            <div className="picture mx-2" style={{ marginTop: "60px" }}>
              <img
                src={formik.values?.hinhAnh}
                alt="..."
                style={{
                  width: "100px",
                  height: "100px",
                  verticalAlign: "middle",
                }}
              />
            </div>
          </div>
          <div className="col-sm-9 mx-auto">
            <div className="form-group mb-3">
              <label className="my-1">Location Name</label>
              <input
                type="text"
                className="form-control"
                id="tenViTri"
                value={formik.values?.tenViTri}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <label className="my-1">City</label>
              <input
                type="text"
                className="form-control"
                id="tinhThanh"
                value={formik.values?.tinhThanh}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <label className="my-1">Country</label>
              <input
                type="text"
                className="form-control"
                id="quocGia"
                value={formik.values?.quocGia}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
