import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

type Props = {};

export default function AdminTemplate({}: Props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const overlayStyles: React.CSSProperties = {
    background: "rgba(0, 0, 0, .5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <div>
      <SideBar
        sidebar={sidebar}
        setSidebar={setSidebar}
        showSidebar={showSidebar}
      />
      <div className="container py-4">
        <div className="overlay" style={sidebar ? overlayStyles : {}}></div>
        <Outlet />
      </div>
    </div>
  );
}
