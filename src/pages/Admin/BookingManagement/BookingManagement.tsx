import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import Modaltest from "../../../HOC/Modaltest";
import {
  setModalAction,
  setDeleteAction,
  setEditAction,
} from "../../../redux/reducers/modalReducer";
import {
  deleteOrderRoomByIdApi,
  getOrderRoomsApi,
  getOrderRoomsByIdApi,
} from "../../../redux/reducers/orderRoomReducer";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import Moment from "react-moment";
import Info_OrderRoom from "../../../components/Admin/OrderRoom/Info_OrderRoom";
import Delete_OrderRoom from "../../../components/Admin/OrderRoom/Delete_OrderRoom";
import Add_OrderRoom from "../../../components/Admin/OrderRoom/Add_OrderRoom";
import Edit_OrderRoom from "../../../components/Admin/OrderRoom/Edit_OrderRoom";

type Props = {};

export default function BookingManagement({}: Props) {
  const { arrOrderRooms, statusAction } = useSelector(
    (state: RootState) => state.orderRoomReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostPerPage] = useState<number>(8);
  const totalRow = arrOrderRooms.length;
  const lastPostIndex = currentPage * postsPerPage; // lastPostIndex = 4
  const firstPostIndex = lastPostIndex - postsPerPage; // firstPostIndex = 0
  const currentArrOrderRooms = arrOrderRooms.slice(
    firstPostIndex,
    lastPostIndex
  );

  useEffect(() => {
    const action = getOrderRoomsApi();
    dispatch(action);
  }, [statusAction]);

  const renderOrderRooms = () => {
    return currentArrOrderRooms?.map((room, index) => {
      return (
        <>
          <tr key={index}>
            <td>{room?.id}</td>
            <td>{room?.maPhong}</td>
            <td>
              <Moment format="DD-MM-YYYY">{room?.ngayDen}</Moment>
            </td>
            <td>
              <Moment format="DD-MM-YYYY">{room?.ngayDi}</Moment>
            </td>
            <td>{room?.soLuongKhach}</td>
            <td>{room?.maNguoiDung}</td>
            <td className="">
              <button
                className="btn btn-outline-dark btn-sm rounded-5 mx-1"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  const actionInfor = getOrderRoomsByIdApi(room?.id);
                  const actionComponent = setModalAction({
                    Component: Info_OrderRoom,
                    title: "Infor Order Room",
                  });
                  dispatch(actionInfor);
                  dispatch(actionComponent);
                }}
              >
                <i className="fas fa-info-circle"></i>
              </button>
              <button
                className="btn btn-outline-warning btn-sm rounded-5 mx-1"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  const actionEdit = getOrderRoomsByIdApi(room?.id);
                  const actionComponent = setEditAction({
                    Component: Edit_OrderRoom,
                    title: "Edit Order Room",
                    ID: room?.id
                  });
                  dispatch(actionEdit);
                  dispatch(actionComponent);
                }}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn btn-outline-danger btn-sm rounded-5"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  const actionComponent = setDeleteAction({
                    Component: Delete_OrderRoom,
                    title: "Delete Order Room",
                    ID: room?.id,
                  });
                  dispatch(actionComponent);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </>
      );
    });
  };
  return (
    <div>
      <Modaltest />
      <div className="titlePage pb-2">
        <h3>Order Rooms Management</h3>
        <h5
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            const actionComponent = setModalAction({
              Component: Add_OrderRoom,
              title: "Add Order Room",
            });
            dispatch(actionComponent);
          }}
        >
          <i className="fas fa-plus-circle me-1"></i>
          Add new order room
        </h5>
      </div>
      <div className="table-responsive tableOrderRooms">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">RoomCode</th>
              <th scope="col">Check-In</th>
              <th scope="col">Check-Out</th>
              <th scope="col">Guests</th>
              <th scope="col">UserCode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderOrderRooms()}</tbody>
        </table>
      </div>
      <div className="pagination d-flex justify-content-center">
        <Pagination
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          totalRow={totalRow}
        />
      </div>
    </div>
  );
}
