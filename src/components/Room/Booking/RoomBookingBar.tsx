import React from "react";
import Button from "../../Button/Button";

type Props = {};

export default function RoomBookingBar({}: Props) {
  return (
    <div className="booking">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="booking__info">
          <div className="room-price">
            <strong>$14</strong> đêm
          </div>
          <div className="dateRange">Ngày 15 - Ngày 19 tháng 1</div>
        </div>
        <div className="booking__button">
          <Button path="#" className="btn--primary" onClick={() => {}}>
            Đặt phòng
          </Button>
        </div>
      </div>
    </div>
  );
}
