import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Location from "../../components/Location/Location";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Carousel />
      <div className="locations">
        <div className="container">
          <h3 className="title">Khám phá những điểm đến gần đây</h3>
          <div className="locations__content row">
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
            <div className="location__item col-lg-3 col-md-4 col-6">
              <Location />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
