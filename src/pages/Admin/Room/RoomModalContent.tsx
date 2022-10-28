import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { getRoomByIdApi, Room } from "../../../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomModalContent({ room }: Props) {
  console.log(room);

  return (
    <div>
      <input type="text" />
    </div>
  );
}
