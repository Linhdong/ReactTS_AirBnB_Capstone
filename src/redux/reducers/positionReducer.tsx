import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface Room {
    id:       number;
    tenPhong: string;
    khach:    number;
    phongNgu: number;
    giuong:   number;
    phongTam: number;
    moTa:     string;
    giaTien:  number;
    mayGiat:  boolean;
    banLa:    boolean;
    tivi:     boolean;
    dieuHoa:  boolean;
    wifi:     boolean;
    bep:      boolean;
    doXe:     boolean;
    hoBoi:    boolean;
    banUi:    boolean;
    maViTri:  number;
    hinhAnh:  string;
}

export interface RoomState {
    arrRoom: Room[]
}

const initialState:RoomState = {
    arrRoom: []
}

const positionReducer = createSlice({
  name: 'positionReducer',
  initialState,
  reducers: {
    getIdLocationAction:(state, action:PayloadAction<Room[]>) => {
        state.arrRoom = action.payload;
    }
  }
});

export const {getIdLocationAction} = positionReducer.actions

export default positionReducer.reducer

//-------------------API------------------
export const getIdRoomApi = (LocationID:string) => {
    return async (dispatch:AppDispatch) => {
        try{
            const result = await http.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${LocationID}`);
            const action = getIdLocationAction(result.data.content);
            dispatch(action);
        }catch(err){
            console.log(err)
        }
    }
}