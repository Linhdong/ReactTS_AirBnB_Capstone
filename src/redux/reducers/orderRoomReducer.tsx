import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface orderRoom {
  id:           number;
  maPhong:      number;
  ngayDen:      Date;
  ngayDi:       Date;
  soLuongKhach: number;
  maNguoiDung:  number;
}

type InitialState = {
  arrOrderRooms: orderRoom[]
  inforOrderRoom: orderRoom
}

const initialState:InitialState = {
  arrOrderRooms: [],
  inforOrderRoom: {} as orderRoom
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
    }
  },
});

export const { setArrOrderRoomsAction, setInforRoomAction } = orderRoomReducer.actions;

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
//Get API DatPhong ID
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



