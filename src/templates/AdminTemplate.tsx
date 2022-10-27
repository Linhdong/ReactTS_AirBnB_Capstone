import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

type Props = {};

export default function AdminTemplate({}: Props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const overlayStyles = {
    background: "rgba(0, 0, 0, .5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <div>
      <NavBar showSidebar={showSidebar} />
      <SideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="container py-4">
        <div
          className="overlay"
          style={
            sidebar
              ? {
                  background: "rgba(0, 0, 0, .5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }
              : {}
          }
        ></div>
        <Outlet />
      </div>
    </div>
  );
}
