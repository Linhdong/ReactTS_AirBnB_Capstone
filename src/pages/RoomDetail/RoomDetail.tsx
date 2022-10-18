import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomBooking from "../../components/RoomBooking/RoomBooking";
import RoomDetailHeading from "../../components/RoomDetailHeading/RoomDetailHeading";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getRoomByIdApi } from "../../redux/reducers/roomReducer";

// const houseIcon = require("../../assets/img/houseIcon.png");
// const houseIcon = require("../../assets/img/houseIcon.svg");

import { ReactComponent as HouseIcon } from "../../houseIcon.svg";

type Props = {};

export default function RoomDetail({}: Props) {
  const { room } = useSelector((state: RootState) => state.roomReducer);

  const { roomId } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomByIdApi(roomId));
  }, [roomId]);

  return (
    <div className="room">
      <div className="container">
        {/* Heading */}
        <RoomDetailHeading />
        {/* Heading */}

        {/* images */}
        <div className="room__images">
          <img src="https://picsum.photos/1000" alt="..." />
          <div className="show-all__button">
            <button className="btnShowAll btn-bg-white btn-border-black">
              <i className="far fa-images me-2"></i>
              Show all photos
            </button>
          </div>
        </div>
        {/* images */}

        {/* content */}
        <div className="room__content row justify-content-between">
          {/* room info */}
          <div className="room-info col-7">
            <div className="room-info__heading d-flex justify-content-between">
              <div className="room-info__heading--left w-70">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div className="room-info__stats d-flex">
                  <span>2 khách</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>2 phòng ngủ</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>2 giường</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>2 phòng tắm</span>
                </div>
              </div>
              <div className="room-info__heading--right w-20">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="host avatar"
                  className="host-avatar"
                />
              </div>
            </div>
            <div className="divider"></div>
            <div className="room-details">
              <div className="room-details__item d-flex">
                <HouseIcon />
                <div className="room-detail__text">
                  <strong>Toàn bộ nhà</strong>
                  <p>Bạn sẽ có một chung cư cao cấp cho riêng mình</p>
                </div>
              </div>
              <div className="room-details__item d-flex">
                <i className="fas fa-home"></i>
                <div className="room-detail__text">
                  <strong>Toàn bộ nhà</strong>
                  <p>Bạn sẽ có một chung cư cao cấp cho riêng mình</p>
                </div>
              </div>
              <div className="room-details__item d-flex">
                <i className="fas fa-home"></i>
                <div className="room-detail__text">
                  <strong>Toàn bộ nhà</strong>
                  <p>Bạn sẽ có một chung cư cao cấp cho riêng mình</p>
                </div>
              </div>
              <div className="room-details__item d-flex">
                <i className="fas fa-home"></i>
                <div className="room-detail__text">
                  <strong>Toàn bộ nhà</strong>
                  <p>Bạn sẽ có một chung cư cao cấp cho riêng mình</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          {/* room info */}

          {/* room booking */}
          <div className="room-booking col-4">
            <RoomBooking />
          </div>
          {/* room booking */}
        </div>
        {/* content */}
      </div>
    </div>
  );
}
