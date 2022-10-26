import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

type Props = {};

export default function BookingBox({}: Props) {
  const [value, setValue] = useState<DateRangePickerValue>([null, null]);

  const { room } = useSelector((state: RootState) => state.roomReducer);

  let startDateTime = value[0]?.getTime();
  let endDateTime = value[1]?.getTime();
  const calNumOfDays = () => {
    if (startDateTime !== undefined && endDateTime !== undefined) {
      return Math.round((endDateTime - startDateTime) / (1000 * 3600 * 24));
    }
  };

  let numOfDays = calNumOfDays();

  const calTotalPrice = () =>
    numOfDays !== undefined ? room.giaTien * numOfDays : 0;

  let width = useWindowWidth();

  return (
    <div className="booking-box">
      <div className="booking-box__title d-flex justify-content-between">
        <div className="room-price">
          <strong>$14</strong>
          <span> đêm</span>
        </div>
        <div className="room-ratings d-flex">
          <span>
            <i className="fa fa-star"></i> 4.96
          </span>
          <div className="dot">
            <i className="fa fa-circle"></i>
          </div>
          <NavLink to="#">26 đánh giá</NavLink>
        </div>
      </div>
      <div className="booking-box__content mt-2">
        <MantineProvider
          theme={{ fontFamily: "'Nunito Sans', sans-serif", fontSizes: "1rem" }}
        >
          <DateRangePicker
            label="CHECK-IN - CHECK-OUT"
            placeholder="Chọn ngày nhận - trả phòng"
            value={value}
            onChange={setValue}
            amountOfMonths={2}
            icon={<i className="far fa-calendar-alt"></i>}
            minDate={new Date()}
            dropdownType={width <= 767.98 ? "modal" : "popover"}
            required
          />
        </MantineProvider>

        <div className="bookingBtn">
          <Button
            path="#"
            className="btn--primary"
            onClick={() => {}}
            disabled={value[0] === null || value[1] === null ? true : false}
          >
            Đặt phòng
          </Button>
        </div>
        <div className="booking-bill row justify-content-between">
          <div className="col-8">
            <u>
              ${room.giaTien} x {numOfDays} đêm
            </u>
          </div>
          <div className="col-2">
            <p>${calTotalPrice()}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="booking__footer row justify-content-between">
          <div className="col-8">
            <p>Tổng trước thuế</p>
          </div>
          <div className="col-2">
            <p>${calTotalPrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
