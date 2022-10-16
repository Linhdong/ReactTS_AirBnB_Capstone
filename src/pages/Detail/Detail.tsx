import React, { useState } from "react";

type Props = {};

export default function Detail({}: Props) {
  const image = require("./../../assets/img/Imag_1.png");
  const avatar = require("./../../assets/img/Small.png");
  const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsam iure et odio quos consequatur sint fugiat ratione, dolorem nostrum, ipsum, totam corporis voluptates quia libero possimus quis temporibus aspernatur!';
  const [readMore, setReadMore] = useState<boolean>(false);
  const toggleBtn = () => {
    setReadMore(prevState => !prevState)
  }

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
                <img className="w-100 img-fluid" src={image} alt="..." />
              </div>
              <div className="col-6 right-grid">
                <div className="row g-2">
                  <div className="col-6">
                    <img className="w-100 img-fluid" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100 img-fluid" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100 img-fluid" src={image} alt="..." />
                  </div>
                  <div className="col-6">
                    <img className="w-100 img-fluid" src={image} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content mt-2">
              <div className="row">
                <div className="col-7 left-content">
                    <div className="left-header d-flex justify-content-between align-items-center border-bottom pb-2">
                      <div className="title-header">
                        <h4>Entire rental unit hosted by KhaiNguyen</h4>
                        <ul className="infor-header d-flex gap-3">
                            <li>2 guest</li>
                            <li>1 bedroom</li>
                            <li>1 bed</li>
                            <li>1 bath</li>
                        </ul>
                      </div>
                      <div className="avatar">
                        <img src={image} 
                            alt='...'
                            style={{width:'56px', height:'56px'}}
                            className="img-fluid rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="left-detail mt-3">
                      <ul className="infor-detail">
                          <li className="d-flex">
                            <i className="fas fa-home text-center icon"></i>
                            <div className="description">
                              <h6>Entire Home</h6>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <i className="fas fa-home text-center icon"></i>
                            <div className="description">
                              <h6>Enhanced Clean</h6>
                              <span>{readMore ? description : description.substring(0,50) + '....'}</span> <span onClick={toggleBtn}>{readMore ? 'Show Less' : 'Show More'}</span>
                            </div>
                          </li>
                          <li className="d-flex">
                            <i className="fas fa-home text-center icon"></i>
                            <div className="description">
                              <h6>Entire Home</h6>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <i className="fas fa-home text-center icon"></i>
                            <div className="description">
                              <h6>Entire Home</h6>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                          </li>
                      </ul>
                    </div>
                </div>
                <div className="col-5 right-content">

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
