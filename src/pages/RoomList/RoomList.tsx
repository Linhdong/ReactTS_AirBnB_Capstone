import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getRoomsByLocationId, Room } from "../../redux/reducers/roomReducer";

type Props = {};

export default function RoomList({}: Props) {
  const { arrRooms } = useSelector((state: RootState) => state.roomReducer);

  let { locationId } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomsByLocationId(locationId));
  }, []);

  return (
    <div>
      {arrRooms?.map((room: Room) => (
        <NavLink
          to={`/roomdetail/${room.id}`}
          key={room.id}
          className="d-block"
        >
          {room.tenPhong}
        </NavLink>
      ))}
    </div>
  );
}
