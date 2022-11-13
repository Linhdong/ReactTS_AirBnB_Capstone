import React from "react";
import { NavLink } from "react-router-dom";
import { Location } from "../../redux/reducers/locationsReducer";

type Props = {
  location: Location;
};

export default function HomeLocationItem({ location }: Props) {
  return (
    <div className="nearest-location__item d-flex">
      <NavLink
        to={`/roomlist/${location.id}`}
        className="nearest-location__item-img"
      >
        <img src={location.hinhAnh} alt={location.tenViTri} />
      </NavLink>
      <div className="nearest-location__item-info ms-2">
        <h5>
          <NavLink to={`/roomlist/${location.id}`}>{location.tenViTri}</NavLink>
        </h5>
        <p>15 phút lái xe</p>
      </div>
    </div>
  );
}
