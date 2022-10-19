import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Comment from "../components/RoomDetail/Comment";
import RoomBooking from "../components/RoomDetail/RoomBooking";
import RoomDetailHeading from "../components/RoomDetail/RoomDetailHeading";
import RoomDetailHeadingSmall from "../components/RoomDetail/RoomDetailHeadingSmall";
import RoomNavBarSmall from "../components/RoomDetail/RoomNavBarSmall";
import { AppDispatch, RootState } from "../redux/configStore";
import { getRoomByIdApi, Room } from "../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomDetailMediumUp({ room }: Props) {
  //   const { room } = useSelector((state: RootState) => state.roomReducer);

  //   const { roomId } = useParams();

  //   const dispatch: AppDispatch = useDispatch();

  //   const renderRoomAmenities = (amenity: boolean, key: string) =>
  //     amenity ? (
  //       <div className="room-amenity__item d-flex">
  //         <div className="room-amenity__item--icon">
  //           <i className={`${amenitiesIcons[key]} stroke-transparent`}></i>
  //         </div>
  //         <span className="ms-3">{amenitiesNames[key]}</span>
  //       </div>
  //     ) : (
  //       ""
  //     );

  //   useEffect(() => {
  //     dispatch(getRoomByIdApi(roomId));
  //   }, [roomId]);

  return <div className="room">medium template</div>;
}
