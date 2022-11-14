import { createSlice } from "@reduxjs/toolkit";
import { openNotificationWithIcon } from "../../util/notification";
import { http } from "../../util/setting";

export interface Booking {
  id?: number;
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

export const bookingApi = (bookingInfo: Booking) => {
  return async () => {
    try {
      const result = await http.post("/dat-phong", bookingInfo);
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
