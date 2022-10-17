import React from "react";

type Props = {};

export default function Carousel({}: Props) {
  return (
    <div className="carousel">
      <div className="container">
        <h2>Ở bất cứ đâu</h2>
        <div className="carousel__content row justify-content-between">
          <div className="carousel__item col-6 col-md-3">
            <img src="/img/carousel_1.png" alt="carousel_1" />
            <h4 className="mt-2">Cho phép mang theo thú cưng</h4>
          </div>
          <div className="carousel__item col-6 col-md-3">
            <img src="/img/carousel_2.png" alt="carousel_2" />
            <h4 className="mt-2">Trang trại và thiên nhiên</h4>
          </div>
          <div className="carousel__item col-6 col-md-3">
            <img src="/img/carousel_3.png" alt="carousel_3" />
            <h4 className="mt-2">Toàn bộ nhà</h4>
          </div>
          <div className="carousel__item col-6 col-md-3">
            <img src="/img/carousel_4.png" alt="carousel_4" />
            <h4 className="mt-2">Chỗ ở độc đáo</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
