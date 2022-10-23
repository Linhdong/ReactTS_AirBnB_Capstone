import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import DateRangePickerJSX from "../../DatePickerJSX/DateRangePickerJSX";

type Props = {};

export default function RoomBookingBox({}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="fixed-wrapper">
      <div className="booking-box">
        <div className="booking-box__title fixed d-flex justify-content-between">
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
        <div className="booking-box__content">
          <div
            className="booking__inputs d-flex justify-content-center w-100 mt-3"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className="checkIn__input w-50">
              <label htmlFor="checkIn">Nhận phòng</label>
              <input
                type="text"
                id="checkIn"
                placeholder="20/10/2022"
                disabled
              />
            </div>
            <div className="checkOut__input w-50">
              <label htmlFor="checkOut">Trả phòng</label>
              <input
                type="text"
                id="checkOut"
                placeholder="20/10/2022"
                disabled
              />
            </div>
          </div>
          <div className="date-range-picker">
            {isClicked && <DateRangePickerJSX />}
          </div>

          <div className="bookingBtn">
            <Button path="#" className="btn--primary" onClick={() => {}}>
              Đặt phòng
            </Button>
          </div>
          <div className="booking-bill row justify-content-between">
            <div className="col-8">
              <u>$14 x 4 đêm</u>
            </div>
            <div className="col-2">
              <p>$57</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="booking__footer row justify-content-between">
            <div className="col-8">
              <p>Tổng trước thuế</p>
            </div>
            <div className="col-2">
              <p>$57</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
