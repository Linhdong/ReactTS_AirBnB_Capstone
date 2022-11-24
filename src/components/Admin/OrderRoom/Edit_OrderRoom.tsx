import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment.js";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { MantineProvider, Input } from "@mantine/core";
import { useWindowWidth } from "../../../Hooks/useWindowWidth";
import { openNotificationWithIcon } from "../../../util/notification";
import {
  orderRoom,
  editOrderRoomByIdApi,
  clearStatusAction,
} from "../../../redux/reducers/orderRoomReducer";

type Props = {};
let timeout: ReturnType<typeof setTimeout>;
export default function Edit_OrderRoom({}: Props) {
  const { inforOrderRoom } = useSelector(
    (state: RootState) => state.orderRoomReducer
  );
  const [submit, setSubmit] = useState(0);
  const dispatch: AppDispatch = useDispatch();
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
    onSubmit: async (values) => {
      const orderRoomInfor: orderRoom = {
        id: values?.id,
        maPhong: values.maphong,
        ngayDen: moment(values?.ngayDen).format("L").toString(),
        ngayDi: moment(values?.ngayDi).format("L").toString(),
        soLuongKhach: values?.soLuongKhach,
        maNguoiDung: values?.maNguoiDung,
      };
      const editRoomAction = editOrderRoomByIdApi(
        inforOrderRoom.id,
        orderRoomInfor
      );
      dispatch(editRoomAction);
      setSubmit(1);
      resetFieldValue();
      openNotificationWithIcon(
        "success",
        "Edit Order Room Successfully !!",
        <p>Return room table to review information !</p>
      );
    },
  });

  const setFieldValue = () => {
    formik.setFieldValue("id", inforOrderRoom.id);
    formik.setFieldValue("maphong", inforOrderRoom.maPhong);
    formik.setFieldValue(
      "ngayDen",
      moment(inforOrderRoom.ngayDen).format("MM-DD-YYYY")
    );
    formik.setFieldValue(
      "ngayDi",
      moment(inforOrderRoom.ngayDi).format("MM-DD-YYYY")
    );
    formik.setFieldValue("soLuongKhach", inforOrderRoom.soLuongKhach);
    formik.setFieldValue("maNguoiDung", inforOrderRoom.maNguoiDung);
  };

  //   const handleUpdateInfor = () => {
  //     const orderRoomInfor: orderRoom = {
  //       id: 0,
  //       maPhong: roomCode,
  //       ngayDen: moment(value[0]).format("L").toString(),
  //       ngayDi: moment(value[1]).format("L").toString(),
  //       soLuongKhach: guestNum,
  //       maNguoiDung: userCode,
  //     };
  //     const postRoomAction = postOrderRoomApi(orderRoomInfor);
  //     dispatch(postRoomAction);
  //     setSubmit(1);
  //     resetFieldValue();
  //     openNotificationWithIcon(
  //       "success",
  //       "Đặt phòng thành công",
  //       <p>Return room table to review information !</p>
  //     );
  //   };

  const resetFieldValue = () => {
    formik.setFieldValue("id", 0);
    formik.setFieldValue("maPhong", 0);
    formik.setFieldValue("ngayDen", "");
    formik.setFieldValue("ngayDi", "");
    formik.setFieldValue("soLuongKhach", 0);
    formik.setFieldValue("maNguoiDung", 0);
  };

  const clearStatus = () => {
    const clearAction = clearStatusAction();
    dispatch(clearAction);
  };

  useEffect(() => {
    setFieldValue();
  }, [inforOrderRoom])

  useEffect(() => {
    timeout = setTimeout(() => {
      clearStatus();
    }, 200);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
        setSubmit(0);
      }
    };
  }, [submit]);

  return (
    <form className="row infor-Room" onSubmit={formik.handleSubmit}>
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
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">CheckIn</label>
          <input
            type="text"
            className="form-control"
            id="ngayDen"
            value={formik.values?.ngayDen}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">Guests</label>
          <input
            type="text"
            className="form-control"
            id="soLuongKhach"
            value={formik.values?.soLuongKhach}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label className="form-label">CheckOut</label>
          <input
            type="text"
            className="form-control"
            id="ngayDi"
            value={formik.values?.ngayDi}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="submit"
          className="btn btn-outline-primary btn-md"
          style={{ width: "150px" }}
        >
          Update
        </button>
      </div>
    </form>
  );
}
