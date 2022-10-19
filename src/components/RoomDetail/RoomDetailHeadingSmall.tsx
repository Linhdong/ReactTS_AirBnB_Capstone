import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function RoomDetailHeadingSmall({}: Props) {
  return (
    <div className="room__heading room__heading--sm">
      <h1 className="room-title">Ho Chi Minh City</h1>
      <div className="room__heading--details d-flex">
        <div className="ratings">
          <i className="fa fa-star"></i>
          <span>5.0</span>
        </div>
        <div className="dot">
          <i className="fas fa-circle"></i>
        </div>
        <NavLink to="" className="reviews">
          <u>7 reviews</u>
        </NavLink>
        <div className="dot">
          <i className="fas fa-circle"></i>
        </div>
        <div className="host-badge">
          <i className="fas fa-user-shield"></i>
          <span>Superhost</span>
        </div>
        <div className="dot">
          <i className="fas fa-circle"></i>
        </div>
        <NavLink to="" className="cityName">
          <u>Ho Chi Minh</u>
        </NavLink>
      </div>
    </div>
  );
}
