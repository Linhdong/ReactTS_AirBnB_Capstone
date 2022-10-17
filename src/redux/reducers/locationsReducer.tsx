import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface Location {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

type InitialState = {
  arrLocations: Location[];
  location: Location;
};

const initialState: InitialState = {
  arrLocations: [],
  location: {} as Location,
};

const locationsReducer = createSlice({
  name: "locationsReducer",
  initialState,
  reducers: {
    setArrLocations: (
      state: InitialState,
      action: PayloadAction<Location[]>
    ) => {
      state.arrLocations = action.payload;
    },
    setLocationById: (state: InitialState, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { setArrLocations, setLocationById } = locationsReducer.actions;

export default locationsReducer.reducer;

// call api
export const getLocationsApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/vi-tri");
      dispatch(setArrLocations(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getLocationByIdApi = (locationId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/vi-tri/${locationId}`);
      dispatch(setLocationById(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
