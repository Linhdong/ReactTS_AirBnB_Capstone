import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: true,
  // ChildrenComponent: () => <p>Default content</p>,
};

const modalAdminReducer = createSlice({
  name: "modalAdminReducer",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isOpened = true;
      console.log(state.isOpened);
    },
    hideModal: (state) => {
      state.isOpened = false;
      console.log(state.isOpened);
    },
  },
});

export const { showModal, hideModal } = modalAdminReducer.actions;

export default modalAdminReducer.reducer;
