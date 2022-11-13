import { createSlice } from "@reduxjs/toolkit";

export interface Booking {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}

type InitialState = {
  bookingList: Booking[];
  booking: Booking;
};

const initialState: InitialState = {
  bookingList: [],
  booking: {} as Booking,
};

const bookingReducer = createSlice({
  name: "bookingReducer",
  initialState,
  reducers: {},
});

export const {} = bookingReducer.actions;

export default bookingReducer.reducer;
