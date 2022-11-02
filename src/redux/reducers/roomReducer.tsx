import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";
export interface Room {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

type InititalState = {
  arrRooms: Room[];
  room: Room;
};

const initialState: InititalState = {
  arrRooms: [],
  room: {} as Room,
};

const roomReducer = createSlice({
  name: "roomReducer",
  initialState,
  reducers: {
    setArrRooms: (state: InititalState, action: PayloadAction<Room[]>) => {
      state.arrRooms = action.payload;
    },
    setRoom: (state: InititalState, action: PayloadAction<Room>) => {
      state.room = action.payload;
    },
    setRoomById: (state: InititalState, action: PayloadAction<number>) => {
      const index = state.arrRooms.findIndex(
        (room) => room.id === action.payload
      );
      state.room = state.arrRooms[index];
    },
  },
});

export const { setArrRooms, setRoom, setRoomById } = roomReducer.actions;

export default roomReducer.reducer;

// call api
export const getAllRoomsApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/phong-thue");
      dispatch(setArrRooms(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getRoomsByLocationId = (locationId: undefined | string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`
      );

      dispatch(setArrRooms(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getRoomByIdApi = (roomId: undefined | number | string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/phong-thue/${roomId}`);
      dispatch(setRoom(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
