import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { setSubmitAction } from "../../../redux/reducers/modalReducer";
type Props = {

};

export default function DeleteUser_Test() {
  const {idOrderRoom} = useSelector( (state:RootState) => state.modalReducer);
  const dispatch:AppDispatch = useDispatch();
  // useEffect(() => {
  //   const action = setSubmitAction(deleteOrderRoomApi(idLocation));
  //   dispatch(action);
  // },[idLocation])
  return (
    <form style={{height:'100px', width:'300px', margin:'auto'}}>
      <div className="card-body text-center">
        <h5 className="card-title">Are you sure delete {idOrderRoom} ?</h5>
        <div className="chosenBtn my-3">
            <button 
                className="btn btn-primary mx-2"
                type="button"
                // onClick={(event: React.MouseEvent<HTMLElement>) => {
                //     // handleDelete()
                // }}
            >Yes</button>
            <button className="btn btn-danger mx-2"  data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </form>
  );
}
