import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    startDate: Date;
    endDate: Date;
}

const initialState: InitialState = {
  startDate: new Date(),
  endDate: new Date(),
};

const dateReducer = createSlice({
  name: "dateReducer",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateReducer.actions;

export default dateReducer.reducer;
