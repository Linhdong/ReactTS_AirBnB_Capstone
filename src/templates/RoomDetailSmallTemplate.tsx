import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomImagesGallery from "../components/RoomDetail/RoomImagesGallery";
import RoomNavBarSmall from "../components/RoomDetail/RoomNavBarSmall";
import { AppDispatch, RootState } from "../redux/configStore";
import { getRoomByIdApi, Room } from "../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomDetailSmall({ room }: Props) {
  return (
    <>
      <RoomNavBarSmall />
      <RoomImagesGallery />
    </>
  );
}
