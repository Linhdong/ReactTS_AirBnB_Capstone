import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Comment from "../components/Room/Comment/Comment";
import RoomBooking from "../components/Room/RoomBooking";
import RoomDetailHeading from "../components/Room/RoomHeading";
import RoomNavBarSmall from "../components/Room/RoomNavBarSmall";
import { AppDispatch, RootState } from "../redux/configStore";
import { getRoomByIdApi, Room } from "../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomMediumUpTemplate({ room }: Props) {
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

  return (
    <>
      <Header />
      <div>medium room detail</div>
      <Footer />
    </>
  );
}
