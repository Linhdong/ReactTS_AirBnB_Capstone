import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../index";
import { Room } from "../../redux/reducers/roomReducer";
import { getAmenities } from "../../util/roomUtil";

type Props = {
  room: Room;
};

export default function RoomDetailContent({ room }: Props) {
  const amenities = getAmenities(room, room);

  return (
    <div className="room__details">
      {/* title */}
      <div className="room__title d-flex justify-content-between">
        <div className="room__title--left">
          <h2>{room.tenPhong}</h2>
          <div className="room__stats d-flex">
            <span>{room.khach} khách</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>{room.phongNgu} phòng ngủ</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>{room.giuong} giường</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>{room.phongTam} phòng tắm</span>
          </div>
        </div>
        <div className="room__title--right">
          <img src="https://i.pravatar.cc/70" alt="host-avatar" />
        </div>
      </div>
      {/* title */}

      <div className="divider"></div>

      {/* room info */}
      <div className="room__info">
        <div className="room__info--item d-flex align-items-center">
          <i className="fas fa-home fa-cog stroke-transparent me-4"></i>
          <div className="room__info--item__text">
            <strong>Toàn bộ nhà</strong>
            <p>Bạn sẽ có chung cư cao cấp cho riêng mình</p>
          </div>
        </div>
        <div className="room__info--item d-flex align-items-center">
          <i className="fas fa-star fa-cog stroke-transparent me-4"></i>
          <div className="room__info--item__text">
            <strong>Vệ sinh tăng cường</strong>
            <p>
              Chủ nhà đã cam kết thực hiện vệ sinh tăng cường 5 bước của Airbnb
            </p>
          </div>
        </div>
        <div className="room__info--item d-flex align-items-center">
          <i className="fas fa-door-open fa-cog stroke-transparent me-4"></i>
          <div className="room__info--item__text">
            <strong>Tự nhận phòng</strong>
            <p>Tự nhận phòng bằng cách nhập mã số vào cửa</p>
          </div>
        </div>
      </div>
      {/* room info */}

      <div className="divider"></div>

      {/* room description */}
      <div className="room__desc">
        <p>{room.moTa}</p>
        <NavLink to="#">
          Hiển thị thêm
          <i className="fa fa-angle-right ms-2"></i>
        </NavLink>
      </div>
      {/* room description */}

      <div className="divider"></div>

      <div className="room__amenities row">
        <h3>Tiện nghi</h3>
        {amenities &&
          amenities.map(
            (item, index) =>
              item.value && (
                <div className="col-6" key={index}>
                  <div className="room__amenities--item">
                    <i className={`${item.icon} stroke-transparent me-4`}></i>
                    <span>{item.name}</span>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
