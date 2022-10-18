import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import RoomBooking from "../../components/RoomBooking/RoomBooking";
import RoomDetailHeading from "../../components/RoomDetailHeading/RoomDetailHeading";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getRoomByIdApi, Room } from "../../redux/reducers/roomReducer";

interface Amenities {
  [key: string]: string;
}

const amenitiesIcons: Amenities = {
  banLa: "fas fa-tshirt",
  bep: "fas fa-utensils",
  doXe: "fas fa-parking",
  hoBoi: "fas fa-swimming-pool",
  mayGiat: "fas fa-tshirt",
  tivi: "fas fa-tv",
  wifi: "fas fa-wifi",
  dieuHoa: "fas fa-wind",
};

const amenitiesNames: Amenities = {
  banLa: "Bàn là",
  bep: "Bếp",
  dieuHoa: "Điều hoà",
  doXe: "Chỗ đậu xe",
  hoBoi: "Hồ bơi",
  mayGiat: "Máy giặt",
  tivi: "Tivi",
  wifi: "Wifi",
};

type Props = {};

export default function RoomDetail({}: Props) {
  const { room } = useSelector((state: RootState) => state.roomReducer);

  const { roomId } = useParams();

  const dispatch: AppDispatch = useDispatch();

  const renderRoomAmenities = (amenity: boolean, key: string) =>
    amenity ? (
      <div className="room-amenity__item d-flex">
        <div className="room-amenity__item--icon">
          <i className={`${amenitiesIcons[key]} stroke-transparent`}></i>
        </div>
        <span className="ms-3">{amenitiesNames[key]}</span>
      </div>
    ) : (
      ""
    );

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
          <img src={room.hinhAnh} alt={room.tenPhong} />
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
                <h2>{room.tenPhong}</h2>
                <div className="room-info__stats d-flex">
                  <span>{room.khach} khách</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>{room.phongNgu} phòng ngủ</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>{room.giuong} giường</span>
                  <div className="dot">
                    <i className="fas fa-circle"></i>
                  </div>
                  <span>{room.phongTam} phòng tắm</span>
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
                <i className="fas fa-home fa-cog stroke-transparent"></i>
                <div className="room-detail__text">
                  <strong>Toàn bộ nhà</strong>
                  <p>Bạn sẽ có một chung cư cao cấp cho riêng mình</p>
                </div>
              </div>
              <div className="room-details__item d-flex">
                <i className="fa fa-star fa-cog stroke-transparent"></i>
                <div className="room-detail__text">
                  <strong>Vệ sinh tăng cường</strong>
                  <p>
                    Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng
                    cường 5 bước của Airbnb
                  </p>
                </div>
              </div>
              <div className="room-details__item d-flex">
                <i className="fas fa-door-open fa-cog stroke-transparent"></i>
                <div className="room-detail__text">
                  <strong>Tự nhận phòng</strong>
                  <p>Tự nhận phòng bằng khóa thông minh.</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="room-desc">
              <p>{room.moTa}</p>
              <NavLink to="" className="">
                <u>Hiển thị thêm</u>
              </NavLink>
            </div>
            <div className="divider"></div>
            <div className="room-sleeping-place">
              <h2>Nơi bạn sẽ ngủ nghỉ</h2>
              <div className="room-sleeping-place__block">
                <i className="fas fa-bed stroke-transparent"></i>
                <div className="room-sleeping-place__block-text">
                  <strong>Phòng ngủ</strong>
                  <p>{room.giuong} giường đôi</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="room-amenities">
              <h2>Nơi này có những gì cho bạn</h2>
              <div className="room-amenities__content row">
                <div className="room-amenities__content__col col-6">
                  {renderRoomAmenities(room.hoBoi, "hoBoi")}

                  {renderRoomAmenities(room.bep, "bep")}
                  {renderRoomAmenities(room.dieuHoa, "dieuHoa")}
                  {renderRoomAmenities(room.doXe, "doXe")}
                </div>
                <div className="room-amenities__content__col col-6">
                  {renderRoomAmenities(room.banLa, "banLa")}
                  {renderRoomAmenities(room.mayGiat, "mayGiat")}
                  {renderRoomAmenities(room.tivi, "tivi")}
                  {renderRoomAmenities(room.wifi, "wifi")}
                </div>
              </div>
            </div>
          </div>
          {/* room info */}

          {/* room booking */}
          <div className="room-booking col-4">
            <RoomBooking />
          </div>
          {/* room booking */}
        </div>
        {/* content */}

        <div className="divider"></div>
        {/* comment */}
        <Comment />
        {/* comment */}
      </div>
    </div>
  );
}
