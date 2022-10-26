import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

type Props = {};

export default function NavBar({}: Props) {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <div className="container py-3">
          <NavLink to="#" className="menu-bars" onClick={showSidebar}>
            <i className="fa fa-bars"></i>
          </NavLink>
        </div>
      </div>
      <SideBar sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
}
