import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getRoomByIdApi } from "../../redux/reducers/roomReducer";
import RoomMediumUpTemplate from "../../templates/RoomMediumUpTemplate";
import RoomSmallTemplate from "../../templates/RoomSmallTemplate";

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
}

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

export default function Room({}: Props) {
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

  const width = useWindowWidth();

  useEffect(() => {
    dispatch(getRoomByIdApi(roomId));
  }, [roomId]);

  if (width <= 767.98) {
    return <RoomSmallTemplate room={room} />;
  }

  return <RoomMediumUpTemplate room={room} />;
}
