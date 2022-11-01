import { createSlice } from "@reduxjs/toolkit";
import FormViewDetailRoom from "../../components/Admin/FormViewDetailRoom";

interface ModalAdminState {
  isOpened: boolean;
  ChildrenComponent: React.ReactNode;
  callbackSubmit: () => void;
}

const initialState: ModalAdminState = {
  isOpened: false,
  ChildrenComponent: <></>,
  callbackSubmit: () => alert("submitted"),
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
    },
    openFormViewDetail: (state, action) => {
      state.isOpened = true;
      state.ChildrenComponent = action.payload;
    },
  },
});

export const { showModal, hideModal, openFormViewDetail } =
  modalAdminReducer.actions;

export default modalAdminReducer.reducer;
