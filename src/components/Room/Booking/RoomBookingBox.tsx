import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function RoomBookingBox({}: Props) {
  return (
    <div className="fixed-wrapper">
      <div className="booking-box fixed d-flex justify-content-between">
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
    </div>
  );
}
