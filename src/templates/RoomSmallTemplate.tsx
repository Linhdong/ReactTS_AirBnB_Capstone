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
import DateRangePickerJSX from "../components/DatePickerJSX/DateRangePickerJSX";
import RoomBookingBar from "../components/Room/Booking/RoomBookingBar";
import moment from "moment";

type Props = {
  room: Room;
};

export default function RoomDetailSmall({ room }: Props) {
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.dateReducer
  );

  let numsOfDays = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
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
          <div className="calendar">
            <h2>{numsOfDays} đêm tại Room's name</h2>
            <DateRangePickerJSX />
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
        <RoomBookingBar />
      </div>
      <Footer />
    </>
  );
}
