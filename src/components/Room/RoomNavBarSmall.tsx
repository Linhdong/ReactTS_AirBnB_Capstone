import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

type Props = {};

export default function RoomNavBarSmall({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="room__navbar--sm py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="room__navbar--sm__left">
          <Button
            path="#"
            className="btn--light"
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="fa fa-angle-left"></i>
          </Button>
        </div>
        <div className="room__navbar--sm__right">
          <Button path="#" className="btn--light" onClick={() => {}}>
            <>
              <i className="fas fa-share-square"></i>
              <span className="ms-2"></span>
            </>
          </Button>
          <Button path="#" className="btn--light" onClick={() => {}}>
            <>
              <i className="far fa-heart"></i>
              <span className="ms-2"></span>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}
