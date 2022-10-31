import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "./SideBarData";

const logo = require("../../assets/img/airbnb-logo(white).png");

type Props = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: () => void;
};

export default function SideBar({ sidebar, setSidebar, showSidebar }: Props) {
  const activeLinkStyles = {
    backgroundColor: "#fff",
    color: "#e61d51",
    fontWeight: "600",
    boxShadow: "rgb(0 0 0 / 10%) 0px 6px 16px",
  };
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar__top d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span>admin</span>
        </div>
        <button
          className="btn text-light"
          onClick={() => setSidebar((prevSidebar) => !prevSidebar)}
        >
          {sidebar ? (
            <i className="fa fa-angle-left"></i>
          ) : (
            <i className="fa fa-angle-right"></i>
          )}
        </button>
      </div>
      <div className="divider"></div>
      <div className="sidebar__center mt-3">
        <ul onClick={showSidebar}>
          {SideBarData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="sidebar__link"
                style={({ isActive }) => (isActive ? activeLinkStyles : {})}
              >
                <i className={`${item.icon} me-2`}></i>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
}
