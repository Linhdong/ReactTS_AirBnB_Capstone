import React, { useState } from "react";
import ModalHOC from "../../HOC/ModalHOC";
import data from "./data";
import UpdateInforUser from "./UpdateInforUser";
type Props = {};

export default function Profile({}: Props) {
  const avatar = require("./../../assets/img/Imag_1.png");
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsam iure et odio quos consequatur sint fugiat ratione, dolorem nostrum, ipsum, totam corporis voluptates quia libero possimus quis temporibus aspernatur!";
  const [readMore, setReadMore] = useState<boolean>(false);
  const [nodeOfElement, setNodeOfElement] = useState<number>(2);
  const slice = data.dataTest.slice(0, nodeOfElement);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  const loadMore = () => {
    if (nodeOfElement <= data.dataTest.length) {
      setNodeOfElement(nodeOfElement + nodeOfElement);
    } else {
      setNodeOfElement(2);
    }
  };
  return (
    <div className="container">
      <div className="profile my-4">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 left-profile">
            <div className="infor-user mx-5">
              <div className="card">
                <div className="card-header">
                  <img
                    src={avatar}
                    className="rounded-circle"
                    alt="..."
                    style={{ width: "120px", height: "131px" }}
                  />
                  <p className="text-center">User Name</p>
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <p className="confirm"> Comfirm your information</p>
                  <p className="certificate">
                    Show others you're really you with the identity verification
                    badge
                  </p>
                  <button className="btnGetBadge rounded-3">
                    Get the badge
                  </button>
                </div>
                <div className="border-top-0 card-footer">
                  <div className="user-confirm">
                    <h5 className="mt-2">User Comfirmed</h5>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <span className="mx-2">Phon Number</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="right-profile">
              <h3 className="user-name">Hi, I'm Khai</h3>
              <p className="date-join">Joined in 2022</p>
              <h5
                className="edit-infor"
                data-bs-toggle="modal"
                data-bs-target="#update"
                style={{ cursor: "pointer" }}
              >
                Modify your profile
              </h5>
              <ModalHOC
                modalId="update"
                title="Update Personal Information"
                content={<UpdateInforUser />}
              />
              <div className="rent-history mt-4">
                <h5>Rented Room</h5>
                <div className="room-list">
                  {slice.map((item, index) => {
                    return (
                      <div
                        className="card my-4 border-0 rounded-0 border-bottom"
                        key={index}
                      >
                        <div className="row g-0">
                          <div className="col-md-5 left-card">
                            <img
                              src={item.img}
                              className="img-fluid rounded-4 w-100"
                              alt="..."
                              style={{ height: "205px" }}
                            />
                          </div>
                          <div className="col-md-7 right-card">
                            <div className="card border-0">
                              <div className="card-header border-0">
                                <p>Toàn bộ căn hộ dịch vụ tại Bình Thạnh</p>
                                <h5>Romantic APT for Long-term Living</h5>
                                <div className="border-bottom pt-2 under-line" />
                                <i className="far fa-heart icon"></i>
                              </div>
                              <div className="card-body border-0">
                                <p className="my-2">
                                  2 Guests - Studio Room - 1 Bed - 1 Bath
                                </p>
                                <p>
                                  Wifi - Kitchen - Air Condition - Washing
                                  Machine
                                </p>
                              </div>
                              <div className="card-footer text-end border-0">
                                <p>$385/Month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className="btn btn-danger d-block w-100 btnLoad"
                  onClick={() => loadMore()}
                >
                  {nodeOfElement <= data.dataTest.length
                    ? "Load More"
                    : "Load Less"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
