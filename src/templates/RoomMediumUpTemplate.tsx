import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BookingBox from "../components/Room/BookingBox";
import Comment from "../components/Room/Comment/Comment";
import RoomDetailContent from "../components/Room/RoomDetailContent";
import RoomDetailHeading from "../components/Room/RoomHeading";
import RoomImagesGallery from "../components/Room/RoomImagesGallery";
import { AppDispatch, RootState } from "../redux/configStore";
import { getRoomByIdApi, Room } from "../redux/reducers/roomReducer";

type Props = {
  room: Room;
};

export default function RoomMediumUpTemplate({ room }: Props) {
  //   const { room } = useSelector((state: RootState) => state.roomReducer);

  //   const { roomId } = useParams();

  //   const dispatch: AppDispatch = useDispatch();

  //   const renderRoomAmenities = (amenity: boolean, key: string) =>
  //     amenity ? (
  //       <div className="room-amenity__item d-flex">
  //         <div className="room-amenity__item--icon">
  //           <i className={`${amenitiesIcons[key]} stroke-transparent`}></i>
  //         </div>
  //         <span className="ms-3">{amenitiesNames[key]}</span>
  //       </div>
  //     ) : (
  //       ""
  //     );

  //   useEffect(() => {
  //     dispatch(getRoomByIdApi(roomId));
  //   }, [roomId]);

  return (
    <>
      <Header />
      <div className="room">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-4">
            <RoomDetailHeading />
            <div className="room__heading__buttons">
              <Button path="#" className="btn--light" onClick={() => {}}>
                <>
                  <i className="fas fa-share-square"></i>
                  <span className="ms-2"></span>
                </>
              </Button>
              <Button path="#" className="btn--light" onClick={() => {}}>
                <>
                  <i className="far fa-heart"></i>
                  <span className="ms-2"></span>
                </>
              </Button>
            </div>
          </div>
          <RoomImagesGallery />
          <div className="room__content row py-4 justify-content-between">
            <div className="col-lg-7 col-md-6">
              <RoomDetailContent />
            </div>
            <div className="col-5 wrapper" style={{ position: "relative" }}>
              <BookingBox />
            </div>
          </div>
          <div className="divider"></div>
          <Comment />
        </div>
      </div>
      <Footer />
    </>
  );
}
