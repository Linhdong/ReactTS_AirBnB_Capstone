import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import Swal from "sweetalert2";
import { AppDispatch } from "../configStore";
import { getUserInfoAction, setUserLogin } from "./signInReducer";
import {
  ACCESS_TOKEN,
  setStore,
  setStoreJSON,
  USER_LOGIN,
  getStore,
  http,
  clearLocalStorage,
  getStoreJSON,
} from "./../../util/setting";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar?: string;
  gender: boolean;
  role: string;
}

export interface RentedRoom {
  id: number;
  maPhong: number;
  ngayDen: Date;
  ngayDi: Date;
  soLuongKhach: number;
  maNguoiDung: number;
  hinhAnh: string;
  tenPhong: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  phongNgu: number;
  phongTam: number;
}

type UserState = {
  arrUsers: User[];
  totalRow: number;
  editUser: any;
  userInfo: any;
  rentedRoom: RentedRoom[];
  statusAction: number;
};

const initialState: UserState = {
  arrUsers: [],
  totalRow: 0,
  editUser: {},
  rentedRoom: [],
  userInfo: {},
  statusAction: 0,
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
    },
    getRentedRoom: (state: UserState, action: PayloadAction<RentedRoom[]>) => {
      state.rentedRoom = action.payload;
    },
    setUserInfo: (state: UserState, action: PayloadAction<User[]>) => {
      state.userInfo = action.payload;
    },
    setStatusAction: (state: UserState, action: PayloadAction<number>) => {
      state.statusAction = action.payload;
    },
  },
});

export const {
  setArrUser,
  setTotalRow,
  setUserByID,
  getRentedRoom,
  setUserInfo,
  setStatusAction,
} = userReducer.actions;

export default userReducer.reducer;

// call api
export const getUserPaginationAction = (
  pageIndex: string | null | number,
  pageSize: string | null | number,
  keyword?: string | null
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`
      );
      console.log("User: ", result.data.content.data);
      dispatch(setArrUser(result.data.content.data));
      dispatch(setTotalRow(result.data.content.totalRow));
    } catch (err) {
      console.log(err);
    }
  };
};
//delete
export const deleteUserAction = (userID: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/users?id=${userID}`);
      dispatch(setStatusAction(result.status));
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
        dispatch(setUserByID(result.data.content));
      }
    } catch (err) {}
  };
};
//add user
export const postUserApi = (user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/users", user);
      console.log(result.status);
      dispatch(setStatusAction(result.status));
    } catch (err) {
      console.log(err);
    }
  };
};
//edit user
export const updateUserApi = (id: number, user: User) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/users/${id}`, user);
      console.log(result.data.content);
      dispatch(setStatusAction(result.status));
    } catch (err) {
      console.log(err);
    }
  };
};

//clear status
export const clearStatusAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setStatusAction(0));
    } catch (err) {
      console.log(err);
    }
  };
};

//Call api getProfile

//call rented room by each user

export const getRentedRoomByEachUser = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (id !== null) {
        const result = await http.get(`/dat-phong/lay-theo-nguoi-dung/${id}`);
        console.log(result.data.content);
        dispatch(getRentedRoom(result.data.content));
      }
    } catch (err) {}
  };
};

export const editUserAction = (userId: number, userInfo: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(`users/${userId}`, userInfo);
      if (result.status === 200) {
        Swal.fire({
          title: "Update Successfully!",
          icon: "success",
          confirmButtonColor: "#44c020",
        });
        dispatch(setUserInfo(result.data.content));
        setStoreJSON(USER_LOGIN, { user: result.data.content });
      }
      // console.log('result', result);
    } catch (errors: any) {
      Swal.fire({
        icon: "error",
        title: errors.response?.data.message,
        text: `${errors.response?.data.content}`,
      });
    }
  };
};
