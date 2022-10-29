import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

type Props = {};

export default function RoomImagesGallery({}: Props) {
  const { hinhAnh, tenPhong } = useSelector(
    (state: RootState) => state.roomReducer.room
  );
  return (
    <div className="room__images">
      <img src={hinhAnh} alt={tenPhong} />
      <div className="show-all__button">
        {/* <button className="btnShowAll btn-bg-white btn-border-black">
          <i className="far fa-images me-2"></i>
          Show all photos
        </button> */}
      </div>
    </div>
  );
}
