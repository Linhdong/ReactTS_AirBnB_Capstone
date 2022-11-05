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
  totalRow: number;
  editUser: any;
};

const initialState: UserState = {
  arrUsers: [],
  totalRow: 0,
  editUser: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setArrUser: (state: UserState, action: PayloadAction<User[]>) => {
      state.arrUsers = action.payload;
    },
    setTotalRow: (state: UserState, action: PayloadAction<number>) => {
      state.totalRow = action.payload;
    },
    setUserByID: (state: UserState, action: PayloadAction<User[]>) => {
      state.editUser = action.payload;
    }
  },
});

export const { setArrUser, setTotalRow, setUserByID } = userReducer.actions;

export default userReducer.reducer;

// call api
export const getUserPaginationAction = (
  pageIndex: string | null,
  pageSize: string | null,
  keyword?: string | null
) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (keyword === null) {
        const result = await http.get(
          `/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`
        );
        dispatch(setArrUser(result.data.content.data));
        dispatch(setTotalRow(result.data.content.totalRow));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//delete
export const deleteUserAction = (userID: number) => {
  return async () => {
    try {
      const result = await http.delete(`/users?id=${userID}`);
    } catch (err) {
      console.log(err);
    }
  };
};
//search
export const searchUserAction = (userName: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/search/${userName}`);
      console.log(result.data.content);
      dispatch(setArrUser(result.data.content));
      dispatch(setTotalRow(result.data.content.length));
    } catch (err) {
      console.log(err);
    }
  };
};
//edit user
export const editUserByIDAction = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (id !== null) {
        const result = await http.get(`/users/${id}`);
        console.log(result.data.content);
        dispatch(setUserByID(result.data.content))
      }
    } catch (err) {}
  };
};
