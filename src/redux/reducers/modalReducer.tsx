import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import React from "react";
import { http } from "../../util/setting";

const initialState = {
    tilte: 'title',
    Component: (props:any) => {
        return <div>
            Default value
        </div>
    },
    submitForm: () => {
      alert('SubmitForm');
    }, 
    idOrderRoom:0
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setModalAction: (state, action:PayloadAction<any>) => {
        const {title, Component} = action.payload;
        state.tilte = title;
        state.Component = Component
    },
    setSubmitAction: (state, action:PayloadAction<any>) => {
      //payload: 
      state.submitForm = action.payload;
    }, 
    setDeleteAction: (state, action:PayloadAction<any>) => {
      const {title, Component, ID} = action.payload;
      state.tilte = title;
      state.Component = Component;
      state.idOrderRoom = ID;
  }
  },
});

export const { setModalAction, setSubmitAction, setDeleteAction } = modalReducer.actions;

export default modalReducer.reducer;
