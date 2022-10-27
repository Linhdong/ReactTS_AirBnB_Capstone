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

export default function RoomList({}: Props) {
  const avatar = require("./../../assets/img/Imag_1.png");
  const { arrRoom } = useSelector((state: RootState) => state.positionReducer);
  const dispatch: AppDispatch = useDispatch();

  let [searchParams] = useSearchParams();
  let Id = searchParams.get("maViTri");

  const [roomList, setRoomList] = useState<Room>();

  const demoFunc = (arrfilter:Room) => {
    console.log('Parent: ',roomList);
    setRoomList(arrfilter);
  }

  //Call API
  useEffect(() => {
    const action = getIdRoomApi(Id as string);
    dispatch(action);
  },[searchParams]);
  console.log("arrRoom: ", arrRoom);

  const [nodeOfElement, setNodeOfElement] = useState<number>(3);
  const slice = data.dataTest.slice(0, nodeOfElement);
  const loadMore = () => {
    if (nodeOfElement <= data.dataTest.length) {
      setNodeOfElement(nodeOfElement + nodeOfElement);
    } else {
      setNodeOfElement(3);
    }
  };

  return (
    <div className="container">
      <Filter arrRoom={arrRoom} getfilter={demoFunc}/>
      <div className="content">
        <div className="row">
          <div className="col-lg-7 col-md-12 left-content">
            <h5 className="my-3">200+ stay in Bordeau</h5>
            <div className="room-list">
              {slice.map((item, index) => {
                return (
                  <div
                    className="card my-4 border-0 rounded-0 border-top border-bottom"
                    key={index}
                  >
                    <div className="row g-0 my-3">
                      <div className="col-md-5 left-card">
                        <img
                          src={item.img}
                          className="img-fluid rounded-4 w-100"
                          alt="..."
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-7 right-card">
                        <div className="card border-0">
                          <div className="card-header border-0">
                            <p className="intro">
                              Toàn bộ căn hộ dịch vụ tại Bình Thạnh
                            </p>
                            <h5 className="name-room mt-3">
                              Romantic APT for Long-term Living
                            </h5>
                            <i className="far fa-heart icon"></i>
                          </div>
                          <div className="card-body">
                            <div className="top-line" />
                            <div className="detail-room my-3">
                              <p className="my-2">
                                2 Guests - Studio Room - 1 Bed - 1 Bath
                              </p>
                              <p>
                                Wifi - Kitchen - Air Condition - Washing Machine
                              </p>
                            </div>
                            <div className="bottom-line" />
                          </div>
                          <div className="card-footer d-flex justify-content-between align-items-center border-0">
                            <span className="star-review">
                              5.0
                              <i className="fas fa-star mx-2"></i>
                              (318 reviews)
                            </span>
                            <span className="price">$385/Night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="btn btn-danger d-block w-100 btnLoad"
              onClick={() => loadMore()}
            >
              {nodeOfElement <= data.dataTest.length
                ? "Load More"
                : "Load Less"}
            </button>
          </div>
          <div className="col-lg-5 right-map">
            <SearchMap />
          </div>
        </div>
      </div>
    </div>
  );
}
