import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Location({}: Props) {
  return (
    <div className="location d-flex">
      <NavLink to="" className="location__img">
        <img src="https://picsum.photos/200" alt="..." />
      </NavLink>
      <div className="location__info">
        <NavLink to="">
          <h5 className="location__title">Ho Chi Minh City</h5>
        </NavLink>
        <p>15 phút lái xe</p>
      </div>
    </div>
  );
}
