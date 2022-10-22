import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ModalHOC from "../../HOC/ModalHOC";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getLocationByIdApi } from "../../redux/reducers/locationsReducer";
import { Room } from "../../redux/reducers/roomReducer";
import Comment from "./Comment/Comment";

type Props = {
  // room: Room;
};

export default function RoomHeading({}: Props) {
  // const { location } = useSelector(
  //   (state: RootState) => state.locationsReducer
  // );

  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getLocationByIdApi(room.maViTri));
  // }, [room.maViTri]);

  return (
    <div className="room__heading">
      <h1 className="room-title">Ho Chi Minh City</h1>
      <div className="room__heading--details d-flex">
        <div className="ratings">
          <i className="fa fa-star me-2"></i>
          <span>5.0</span>
        </div>
        <div className="dot">
          <i className="fas fa-circle"></i>
        </div>
        <NavLink
          to=""
          className="reviews"
          data-bs-toggle="modal"
          data-bs-target="#comment"
        >
          <u>7 reviews</u>
        </NavLink>
        <ModalHOC modalId="comment" title="Reviews" content={<Comment />} />
        <div className="dot">
          <i className="fas fa-circle"></i>
        </div>
        <div className="host-badge">
          <i className="fas fa-user-shield me-2"></i>
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
