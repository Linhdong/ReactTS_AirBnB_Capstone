import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomDetailHeading from "../../components/RoomDetailHeading/RoomDetailHeading";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getRoomByIdApi } from "../../redux/reducers/roomReducer";

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
        <RoomDetailHeading room={room} />
        <div className="room__content"></div>
      </div>
    </div>
  );
}
