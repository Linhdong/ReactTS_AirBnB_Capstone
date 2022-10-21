import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CommentCard from "./CommentCard";
import { Pagination } from "swiper";

type Props = {};

export default function CommentSlider({}: Props) {
  return (
    <>
      <Swiper
        className="commentSlider"
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{ paddingBottom: "25px" }}
      >
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
