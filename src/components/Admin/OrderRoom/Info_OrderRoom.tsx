import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import { useSelector } from "react-redux";
import moment from 'moment/moment.js'
type Props = {};

export default function Info_OrderRoom({}: Props) {
  const { inforOrderRoom } = useSelector(
    (state: RootState) => state.orderRoomReducer
  );
  const formik = useFormik<{
    id: number;
    maphong: number;
    ngayDen: any;
    ngayDi: any;
    soLuongKhach: number;
    maNguoiDung: number;
  }>({
    initialValues: {
      id: 0,
      maphong: 0,
      ngayDen: "",
      ngayDi: "",
      soLuongKhach: 0,
      maNguoiDung: 0,
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: async (values) => {},
  });

  const setFieldValue = () => {
    formik.setFieldValue("id", inforOrderRoom.id);
    formik.setFieldValue("maphong", inforOrderRoom.maPhong);
    formik.setFieldValue("ngayDen", moment(inforOrderRoom.ngayDen).format('DD-MM-YYYY'));
    formik.setFieldValue("ngayDi", moment(inforOrderRoom.ngayDi).format('DD-MM-YYYY'));
    formik.setFieldValue("soLuongKhach", inforOrderRoom.soLuongKhach);
    formik.setFieldValue("maNguoiDung", inforOrderRoom.maNguoiDung);
  };

  useEffect(() => {
    setFieldValue();
  }, [inforOrderRoom]);
  return (
    <div className="row infor-Room">
      <div className="col-md-6">
        <div className="form-group my-1">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={formik.values?.id}
            readOnly
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">RoomCode</label>
          <input
            type="text"
            className="form-control"
            id="maphong"
            value={formik.values?.maphong}
            readOnly
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">CheckIn</label>
          <input
            type="text"
            className="form-control"
            id="ngayDen"
            value={formik.values?.ngayDen}
            readOnly
          />
        </div>
      </div>
      <div className="col-md-6">
      <div className="form-group my-1">
          <label className="form-label">UserCode</label>
          <input
            type="text"
            className="form-control"
            id="maNguoiDung"
            value={formik.values?.maNguoiDung}
            readOnly
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">Guests</label>
          <input
            type="text"
            className="form-control"
            id="soLuongKhach"
            value={formik.values?.soLuongKhach}
            readOnly
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">CheckOut</label>
          <input
            type="text"
            className="form-control"
            id="ngayDi"
            value={formik.values?.ngayDi}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
