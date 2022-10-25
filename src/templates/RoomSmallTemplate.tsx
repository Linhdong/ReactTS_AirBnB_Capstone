import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import RoomDetailHeading from "../components/Room/RoomHeading";
import RoomImagesGallery from "../components/Room/RoomImagesGallery";
import RoomNavBarSmall from "../components/Room/RoomNavBarSmall";
import RoomDetailContent from "../components/Room/RoomDetailContent";
import { AppDispatch, RootState } from "../redux/configStore";
import { getRoomByIdApi, Room } from "../redux/reducers/roomReducer";
import Comment from "../components/Room/Comment/Comment";
import CommentSlider from "../components/Room/Comment/CommentSlider";
import moment from "moment";
import RoomBookingBox from "../components/Room/BookingBox";

type Props = {
  room: Room;
};

export default function RoomDetailSmall({ room }: Props) {
  return (
    <>
      <div className="room position-relative">
        <div className="container">
          <RoomNavBarSmall />
        </div>
        <RoomImagesGallery />
        <div className="container">
          <RoomDetailHeading />
          <div className="divider"></div>
          <div className="room__content">
            <RoomDetailContent />
          </div>
          <div className="divider"></div>
          <div className="booking">
            <RoomBookingBox />
          </div>
          <div className="divider"></div>
          <div className="room__comment">
            <div className="room__comment__title d-flex mb-3">
              <h2>
                <i className="fa fa-star me-2"></i>
                4.96
              </h2>
              <div className="dot">
                <i className="fa fa-circle"></i>
              </div>
              <h2>26 đánh giá</h2>
            </div>
            <CommentSlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
