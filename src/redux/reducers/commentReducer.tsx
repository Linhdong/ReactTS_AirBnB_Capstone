import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface Comment {
  id: number;
  maPhong: number;
  maNguoiBinhLuan: number;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
}

type RoomState = {
  arrComments: Comment[];
};

const initialState: RoomState = {
  arrComments: [],
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    setArrComment: (state, action) => {
      state.arrComments = action.payload;
    },
  },
});

export const { setArrComment } = commentReducer.actions;

export default commentReducer.reducer;

// call api
const getCommentsByRoomId = (roomId: undefined | string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/binh-luan/lay-binh-luan-theo-phong/${roomId}`
      );
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
