import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

type Props = {};

export default function AdminTemplate({}: Props) {
  return (
    <div>
      <NavBar />
      <div className="admin__container bg-secondary w-100">
        <Outlet />
      </div>
    </div>
  );
}
