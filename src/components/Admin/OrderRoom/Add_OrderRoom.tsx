import React, { useState, useEffect } from "react";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { MantineProvider, Input } from "@mantine/core";
import { AppDispatch, RootState } from "../../../redux/configStore";
import moment from "moment";
import { useWindowWidth } from "../../../Hooks/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  orderRoom,
  postOrderRoomApi,
  clearStatusAction
} from "../../../redux/reducers/orderRoomReducer";
import { openNotificationWithIcon } from "../../../util/notification";

type Props = {};
let timeout: ReturnType<typeof setTimeout>;
export default function Add_OrderRoom({}: Props) {
  const [value, setValue] = useState<DateRangePickerValue>([null, null]);
  const [guestNum, setGuestNum] = useState(1);
  const [roomCode, setRoomCode] = useState(1);
  const [userCode, setUserCode] = useState(1);
  const [submit, setSubmit] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { room } = useSelector((state: RootState) => state.roomReducer);
  const { statusAction } = useSelector(
    (state: RootState) => state.orderRoomReducer
  );
  const width = useWindowWidth();
  const handleChangeGuestNum = (increOrDecre: boolean) => {
    if (increOrDecre) {
      setGuestNum((prevState) => prevState + 1);
    } else {
      setGuestNum((prevState) => prevState - 1);
    }
  };
  const formik = useFormik<{
    maPhong: number;
    maNguoiDung: number;
  }>({
    initialValues: {
      maPhong: 0,
      maNguoiDung: 0,
    },
    onSubmit: async (values) => {
      setRoomCode(values.maPhong);
      setUserCode(values.maNguoiDung);
    },
    validationSchema: Yup.object().shape({}),
  });

  const resetFieldValue = () => {
    formik.setFieldValue("maPhong", "");
    formik.setFieldValue("maNguoiDung", "");
    setValue([null, null]);
    setGuestNum(1);
  };

  const clearStatus = () => {
    const clearAction = clearStatusAction();
    dispatch(clearAction);
  }

  const handleBooking = () => {
    const orderRoomInfor: orderRoom = {
      id: 0,
      maPhong: roomCode,
      ngayDen: moment(value[0]).format("L").toString(),
      ngayDi: moment(value[1]).format("L").toString(),
      soLuongKhach: guestNum,
      maNguoiDung: userCode,
    };
    const postRoomAction = postOrderRoomApi(orderRoomInfor);
    dispatch(postRoomAction);
    setSubmit(1);
    resetFieldValue();
    openNotificationWithIcon(
      "success",
      "Đặt phòng thành công",
      <p>Return room table to review information !</p>
    );
  };

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
  },[submit])
  
  return (
    <form
      className="card border-0 shadow-lg pt-3"
      style={{ height: "400px" }}
      onSubmit={formik.handleSubmit}
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="form-group mt-2">
            <MantineProvider
              theme={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSizes: "1rem",
              }}
            >
              <Input.Wrapper label={<strong>Room ID</strong>} required>
                <Input
                  placeholder="Your Room Code"
                  id="maPhong"
                  onChange={formik.handleChange}
                />
              </Input.Wrapper>
            </MantineProvider>
          </div>
          <div className="form-group mt-2">
            <MantineProvider
              theme={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSizes: "1rem",
              }}
            >
              <Input.Wrapper label={<strong>User ID</strong>} required>
                <Input
                  placeholder="Your User Code"
                  id="maNguoiDung"
                  onChange={formik.handleChange}
                />
              </Input.Wrapper>
            </MantineProvider>
          </div>
          <div className="booking-box__content mt-2">
            <MantineProvider
              theme={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSizes: "1rem",
              }}
            >
              <DateRangePicker
                label={<strong>CHECK-IN - CHECK-OUT</strong>}
                placeholder="Check In - CheckOut"
                value={value}
                onChange={setValue}
                amountOfMonths={2}
                icon={<i className="far fa-calendar-alt"></i>}
                minDate={new Date()}
                dropdownType={width <= 767.98 ? "modal" : "popover"}
                required
              />
            </MantineProvider>
          </div>
          <div className="booking-box__content">
            <div
              className="guests-num mt-3"
              //   hidden={value[0] === null || value[1] === null ? true : false}
            >
              <h5>
                <strong>Số lượng khách</strong>
              </h5>
              <div className="d-flex justify-content-statr align-items-center">
                <button
                  className="btn--primary py-2 px-3"
                  onClick={() => handleChangeGuestNum(false)}
                  disabled={guestNum <= 1 ? true : false}
                >
                  -
                </button>
                <strong className="mx-2">{guestNum}</strong>
                <button
                  className="btn--primary py-2 px-3"
                  onClick={() => handleChangeGuestNum(true)}
                  disabled={guestNum >= room.khach ? true : false}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bookingBtn mt-2 d-flex justify-content-center">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => {
                handleBooking();
              }}
            >
              Add Room
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
