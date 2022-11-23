import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface orderRoom {
  id:           number;
  maPhong:      number;
  ngayDen:      Date | string;
  ngayDi:       Date | string;
  soLuongKhach: number;
  maNguoiDung:  number;
}

type InitialState = {
  arrOrderRooms: orderRoom[]
  inforOrderRoom: orderRoom,
  statusAction: number
}

const initialState:InitialState = {
  arrOrderRooms: [],
  inforOrderRoom: {} as orderRoom,
  statusAction: 0
}
const orderRoomReducer = createSlice({
  name: "orderRoomReducer",
  initialState,
  reducers: {
    setArrOrderRoomsAction: (state:InitialState, action:PayloadAction<orderRoom[]>) => {
      state.arrOrderRooms = action.payload;
    },
    setInforRoomAction: (state:InitialState, action:PayloadAction<orderRoom>) => {
      state.inforOrderRoom = action.payload;
    },
    setStatusAction: (state:InitialState, action:PayloadAction<number>) => {
      state.statusAction = action.payload;
    }
  },
});

export const { setArrOrderRoomsAction, setInforRoomAction, setStatusAction } = orderRoomReducer.actions;

export default orderRoomReducer.reducer;

//Call API 
//Get apt datphong
export const getOrderRoomsApi = () => {
  return async (dispatch: AppDispatch) => {
    try{
      const result = await http.get('/dat-phong');
      // console.log(result.data.content);
      dispatch(setArrOrderRoomsAction(result.data.content));
    }catch(err){
      console.log(err);
    }
  }
}
//Get DatPhong By ID
export const getOrderRoomsByIdApi = (id:number) => {
  return async (dispatch: AppDispatch) => {
    try{
      const result = await http.get(`/dat-phong/${id}`);
      dispatch(setInforRoomAction(result.data.content));
    }catch(err){
      console.log(err);
    }
  }
}
//Delete DatPhong By ID
export const deleteOrderRoomByIdApi = (id:number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/dat-phong/${id}`);
      dispatch(setStatusAction(result.status));
    } catch (err) {
      console.log(err)
    }
  }
}

//Clear StatusAction 
export const clearStatusAction = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setStatusAction(0));
  }
}

//Post DatPhong
export const postOrderRoomApi = (roomInfor:orderRoom) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/dat-phong", roomInfor);
      console.log(result.status);
      dispatch(setStatusAction(result.status));
    } catch (err) {
      console.log(err);
    }
  }
}

