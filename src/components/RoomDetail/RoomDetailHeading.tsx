import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getLocationByIdApi } from "../../redux/reducers/locationsReducer";
import { Room } from "../../redux/reducers/roomReducer";

type Props = {
  // room: Room;
};

export default function RoomDetailHeading({}: Props) {
  // const { location } = useSelector(
  //   (state: RootState) => state.locationsReducer
  // );

  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getLocationByIdApi(room.maViTri));
  // }, [room.maViTri]);

  return (
    <div className="room__heading room__heading--md">
      <h1 className="room-title">Ho Chi Minh City</h1>
      <div className="room__heading--details d-flex justify-content-between align-items-center">
        <div className="details__left d-flex">
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
        <div className="details__right">
          <button className="btnShare btn-bg-white me-2">
            <i className="fas fa-share-square"></i>
            <span className="ms-2">
              <u>Share</u>
            </span>
          </button>
          <button className="btnSave btn-bg-white">
            <i className="far fa-heart"></i>
            <span className="ms-2">
              <u>Save</u>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
