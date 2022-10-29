import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import data from "./../Profile/data";
import SearchMap from "./SearchMap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useParams, useSearchParams } from "react-router-dom";
import { getIdRoomApi } from "../../redux/reducers/positionReducer";


type Props = {};

interface Room {
  id?:       number;
  tenPhong?: string;
  khach?:    number;
  phongNgu?: number;
  giuong?:   number;
  phongTam?: number;
  moTa?:     string;
  giaTien?:  number;
  mayGiat?:  boolean;
  banLa?:    boolean;
  tivi?:     boolean;
  dieuHoa?:  boolean;
  wifi?:     boolean;
  bep?:      boolean;
  doXe?:     boolean;
  hoBoi?:    boolean;
  banUi?:    boolean;
  maViTri?:  number;
  hinhAnh?:  string;
}

let timeout:null | ReturnType<typeof setTimeout> = null;

export default function RoomList({}: Props) {
  const avatar = require("./../../assets/img/Imag_1.png");
  const { arrRoom } = useSelector((state: RootState) => state.positionReducer);
  const dispatch: AppDispatch = useDispatch();

  let [searchParams] = useSearchParams();
  let Id = searchParams.get("maViTri");

  const [roomList, setRoomList] = useState<Room>(arrRoom as Room);
  const [render, setRender] = useState<number>(0);

  const demoFunc = (arrfilter:Room) => {
    setRoomList(arrfilter);
  }

  const setStateRender = (state:number) => {
    setRender(state);
  }

  const getRoomFromAPI = async () => {
    try{
      if(searchParams.get("maViTri") !== null){
        const action = getIdRoomApi(Id as string);
        dispatch(action);
      }
    }catch(err){
      console.log(err)
    }
  }
  //Call API
  useEffect(() => {
      getRoomFromAPI();
      setRoomList(arrRoom as Room);
  },[searchParams]);

  useEffect(() => {
    setRoomList(arrRoom as Room);
    setStateRender(0);
  },[render])

  console.log('arrRoom: ',roomList);

  const [nodeOfElement, setNodeOfElement] = useState<number>(3);
  const slice = (roomList as unknown as any[])?.slice(0, nodeOfElement);
  const loadMore = () => {
    if (nodeOfElement <= (roomList as unknown as any[])?.length) {
      setNodeOfElement(nodeOfElement + nodeOfElement);
    } else {
      setNodeOfElement(3);
    }
  };

  return (
    <div className="container">
      <Filter ID={Id} arrRoomList={roomList as any} getfilter={demoFunc} arrRoom={roomList as any} setStateRender={setStateRender}/>
      <div className="content">
        <div className="row">
          <div className="col-lg-7 col-md-12 left-content">
            <h5 className="my-3">{(roomList as unknown as any[])?.length} stay rooms as per your search</h5>
            <div className="room-list">
              {slice?.map((item:any, index:number) => {
                return (
                  <div
                    className="card my-4 border-0 rounded-0 border-top border-bottom"
                    key={index}
                  >
                    <div className="row g-0 my-3">
                      <div className="col-md-5 left-card">
                        <img
                          src={item.hinhAnh}
                          className="img-fluid rounded-4 w-100"
                          alt="..."
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-7 right-card">
                        <div className="card border-0">
                          <div className="card-header border-0">
                            <p className="intro">
                              {/* {item.tenPhong} */}
                            </p>
                            <h5 className="name-room mt-2 me-3 lh-sm">
                              {item.tenPhong}
                            </h5>
                            <i className="far fa-heart icon"></i>
                          </div>
                          <div className="card-body">
                            <div className="top-line" />
                            <div className="detail-room my-3">
                              <p className="my-3">
                                {item.khach} Guests - {item.giuong} Bed Room - {item.phongTam} Bath Room
                              </p>
                              <p>
                                {item.banLa === true ? 'Iron ' : ''} {item.bep === true ? 'Kitchen ' : ''} {item.doXe === true ? 'Free-Parking ' : ''} {item.hoBoi === true ? 'Pool ' : ''} {item.mayGiat === true ? 'Washer ' : ''} {item.tivi === true ? 'Televison ' : ''} {item.wifi === true ? 'Wifi' : ''}
                              </p>
                            </div>
                            <div className="bottom-line" />
                          </div>
                          <div className="card-footer d-flex justify-content-end align-items-center border-0">
                            {/* <span className="star-review">
                              5.0
                              <i className="fas fa-star mx-2"></i>
                              (318 reviews)
                            </span> */}
                            <span className="price">{item.giaTien}$ / Night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {
              (roomList as unknown as any[])?.length === 0 ? <p className="text-center">Xin lỗi chúng tôi không tìm thấy phòng mà bạn yêu cầu !!!</p> :
              <button
              className="btn btn-danger d-block w-100 btnLoad"
              onClick={() => loadMore()}
            >
              {nodeOfElement <= (roomList as unknown as any[])?.length
                ? "Load More"
                :  "Load Less" }
            </button>
            }
          </div>
          <div className="col-lg-5 right-map">
            <SearchMap />
          </div>
        </div>
      </div>
    </div>
  );
}
