import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { setSubmitAction } from "../../../redux/reducers/modalReducer";
import { clearStatusAction, deleteOrderRoomByIdApi } from "../../../redux/reducers/orderRoomReducer";
type Props = {};

export default function Delete_OrderRoom() {
  const { idOrderRoom } = useSelector((state: RootState) => state.modalReducer);
  const { statusAction } = useSelector(
    (state: RootState) => state.orderRoomReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const renderDeleteSuccess = () => {
    if (statusAction === 200) {
      return (
        <div className="statusAction text-center">
          <p style={{ color: "#75FF7E" }}>
            <i className="fas fa-check-circle mx-1"></i>
            Delete {idOrderRoom} successfully !!
          </p>
        </div>
      );
    } 
    if(statusAction === 400 || statusAction === 401 || statusAction === 403 || statusAction === 404){
      return (
        <div className="statusAction text-center">
          <p style={{ color: "#fc3838" }}>
            <i className="fas fa-times-circle mx-1"></i>
            Delete {idOrderRoom} unsuccessfully !!
          </p>
        </div>
      );
    }
  };
  const handleDelete = (id:number) => {
    const deleteAction = deleteOrderRoomByIdApi(id);
    dispatch(deleteAction);
  };
  const clearStatus = () => {
    const clearAction = clearStatusAction();
    dispatch(clearAction);
  }
  useEffect(() => {
    clearStatus();
  },[idOrderRoom])
  return (
    <form style={{ height: "100px", width: "300px", margin: "auto" }}>
      <div className="card-body text-center">
        <h5 className="card-title">
          Do you want to delete user {idOrderRoom}?
        </h5>
        <div className="chosenBtn my-3">
          <button
            className="btn btn-primary mx-2"
            type="button"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleDelete(idOrderRoom)
            }}
          >
            Yes
          </button>
          <button className="btn btn-danger mx-2" data-bs-dismiss="modal">
            No
          </button>
        </div>
      </div>
      {renderDeleteSuccess()}
    </form>
  );
}
