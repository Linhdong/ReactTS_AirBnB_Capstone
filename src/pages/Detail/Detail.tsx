import React from "react";

type Props = {};

export default function Detail({}: Props) {
  const image = require("./../../assets/img/Imag_1.png");

  const renderHeaderDetail = () => {
    return (
      <>
        <div className="left-details">
          <ul className="infor d-flex justify-content-between gap-3">
            <li className="star">
              <i className="far fa-star"></i> 5.0
            </li>
            <li className="review">7 reviews</li>
            <li className="prize">
              <i className="fas fa-medal"></i> Super host
            </li>
            <li className="address">Tri An-Dong Nai</li>
          </ul>
        </div>
        <div className="right-detail">
          <ul className="choose d-flex gap-3">
            <li className="share">
              <i className="far fa-share-square"></i> Share
            </li>
            <li className="save">
              <i className="far fa-heart"></i> Save
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="room-detail">
      <div className="container">
        <div className="infor-detail">
          <h3 className="tilte">Tri An Lake Gateway</h3>
          <div className="header">
            <div className="d-flex justify-content-between infor-header">
              {renderHeaderDetail()}
            </div>
          </div>
          <div className="image-grid">
            <div className="row">
              <div className="col-6 left-grid">
                <img className="w-100" src={image} alt="..." />
              </div>
              <div className="col-6 right-grid">
                <div className="row g-2">
                  <div className="col-6">
                    <img className="w-100" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100" src={image} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  );
}
