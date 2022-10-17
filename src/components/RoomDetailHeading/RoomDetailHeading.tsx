import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getLocationByIdApi } from "../../redux/reducers/locationsReducer";
import { Room } from "../../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomDetailHeading({ room }: Props) {
  const { location } = useSelector(
    (state: RootState) => state.locationsReducer
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationByIdApi(room.maViTri));
  }, []);

  return (
    <div className="room__heading">
      <h1 className="room-title">{room.tenPhong}</h1>
      <div className="room__heading--details d-flex justify-content-between">
        <div className="details__left d-flex">
          <div className="ratings">
            <i className="fa fa-star"></i>
            <span>5.0</span>
          </div>
          <span className="divider">
            <i className="fas fa-circle"></i>
          </span>
          <NavLink to="" className="reviews">
            <u>7 reviews</u>
          </NavLink>
          <span className="divider">
            <i className="fas fa-circle"></i>
          </span>
          <div className="host_badge">
            <i className="fas fa-user-shield"></i>
            <span>Superhost</span>
          </div>
          <span className="divider">
            <i className="fas fa-circle"></i>
          </span>
          <NavLink to="" className="cityName">
            <u>{location?.tinhThanh}</u>
          </NavLink>
        </div>
        <div className="details__right">
          <button className="share">
            <i className="fas fa-share-square"></i>
            <span>
              <u>Share</u>
            </span>
          </button>
          <button className="save">
            <i className="far fa-heart"></i>
            <span>
              <u>Save</u>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
