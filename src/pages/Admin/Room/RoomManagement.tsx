import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { getAllRoomsApi, Room } from "../../../redux/reducers/roomReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalHOC from "../../../HOC/ModalHOC";
import RoomModalContent from "./RoomModalContent";

type Props = {};

export default function RoomManagement({}: Props) {
  const { arrRooms } = useSelector((state: RootState) => state.roomReducer);

  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const renderTblRoom = () =>
    arrRooms?.map((room: Room) => (
      <tr key={room.id}>
        <td>{room.id}</td>
        <td>{room.tenPhong}</td>
        <td>Ho Chi Minh</td>
        <td>
          <img
            src={room.hinhAnh}
            alt={room.tenPhong}
            style={{ width: "120px" }}
          />
        </td>
        <td>
          {room.moTa.length > 100 ? room.moTa.slice(0, 100) + "..." : room.moTa}
        </td>
        <td>${room.giaTien}</td>
        <td>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target={`#room-${room.id}`}
          >
            Xem chi tiết
          </button>

          <ModalHOC
            modalId={`room-${room.id}`}
            title={room.tenPhong}
            content={<RoomModalContent room={room} />}
          />

          <button className="btn btn-warning mt-2">Chỉnh sửa</button>
        </td>
      </tr>
    ));

  useEffect(() => {
    dispatch(getAllRoomsApi());
  }, []);

  return (
    <>
      <h2>Room Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên phòng</th>
            <th>Vị trí</th>
            <th>Hình ảnh</th>
            <th>Mô tả</th>
            <th>Giá tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTblRoom()}</tbody>
      </table>
    </>
  );
}
