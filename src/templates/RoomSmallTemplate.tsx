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
import DatePicker from "../components/DatePicker/DatePicker";

type Props = {
  room: Room;
};

export default function RoomDetailSmall({ room }: Props) {
  return (
    <>
      <div className="room">
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
          <div className="calendar">
            <h2>1 đêm tại Room's name</h2>
            
            <DatePicker />
          </div>
          <div className="divider"></div>
          <div className="room__comment">
            <CommentSlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
