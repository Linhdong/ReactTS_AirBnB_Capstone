import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
}

type UserState = {
  arrUsers: User[];
};

const initialState: UserState = {
  arrUsers: [],
};

const userReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    setArrUser: (state: UserState, action: PayloadAction<User[]>) => {
      state.arrUsers = action.payload;
    },
  },
});

export const { setArrUser } = userReducer.actions;

export default userReducer.reducer;

// call api
export const getUserPaginationAction = (
  pageIndex: string | null,
  pageSize: string | null,
  keyword?: string | null
) => {
  return async (dispatch: AppDispatch) => {
    try {
      if(keyword === null){
        const result = await http.get(
          `/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`
        );
        dispatch(setArrUser(result.data.content));
      }else{
        const result = await http.get(
          `/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`
        );
        dispatch(setArrUser(result.data.content));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
