import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function RoomDetailContent({}: Props) {
  return (
    <div className="room__details">
      {/* title */}
      <div className="room__title d-flex justify-content-between">
        <div className="room__title--left">
          <h2>Room's name</h2>
          <div className="room__stats d-flex">
            <span>2 khách</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>2 phòng ngủ</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>2 giường</span>
            <div className="dot">
              <i className="fa fa-circle"></i>
            </div>
            <span>2 phòng tắm</span>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          quam eveniet. At, libero quasi aut nihil veritatis et illum ipsam,
          exercitationem a, numquam ab labore quod saepe magnam doloremque
          nesciunt.
        </p>
        <NavLink to="#">
          Hiển thị thêm
          <i className="fa fa-angle-right ms-2"></i>
        </NavLink>
      </div>
      {/* room description */}

      <div className="divider"></div>

      <div className="room__amenities">
        <div className="room__amenities--item">
          <i className="fas fa-utensils stroke-transparent me-4"></i>
          <span>Bếp</span>
        </div>
        <div className="room__amenities--item">
          <i className="fas fa-utensils stroke-transparent me-4"></i>
          <span>Bếp</span>
        </div>
        <div className="room__amenities--item">
          <i className="fas fa-utensils stroke-transparent me-4"></i>
          <span>Bếp</span>
        </div>
      </div>
    </div>
  );
}
