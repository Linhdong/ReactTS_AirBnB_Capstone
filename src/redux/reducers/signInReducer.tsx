import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";

import {
  ACCESS_TOKEN,
  setStore,
  setStoreJSON,
  USER_LOGIN,
  getStore,
  http,
} from "./../../util/setting";

export interface UserSignIn {
  email: string;
  password: string;
}

type SignInState = {
  userLogin: any;
};

const initialState: SignInState = {
  userLogin: localStorage.getItem(USER_LOGIN)
    ? JSON.parse(localStorage.getItem(USER_LOGIN) as string)
    : null,
};

const signInReducer = createSlice({
  name: "signInReducer",
  initialState,
  reducers: {
    setUserLogin: (
      state: SignInState,
      action: PayloadAction<UserSignIn[]>
    ) => {
      state.userLogin = action.payload;
    },
  },
});

export const {setUserLogin} = signInReducer.actions;

export default signInReducer.reducer;

//Api
export const signInApi = (userLogin:UserSignIn) => {
    return async (dispatch:AppDispatch) => {
        try{
            let result = await http.post("auth/signin", userLogin);
            console.log(result.data.content);
            setStore(ACCESS_TOKEN, result.data.content.accessToken);
            setStoreJSON(USER_LOGIN, result.data.content);
            const action = setUserLogin(result.data.content);
            dispatch(action);
        }catch(err){
            console.log(err)
        }
    }
}