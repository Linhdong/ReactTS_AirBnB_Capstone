import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  showSidebar: () => void;
};

export default function NavBar({ showSidebar }: Props) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="navbar shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="#" className="menu-bars" onClick={showSidebar}>
            <i className="fa fa-bars"></i>
          </NavLink>
          {isLogin ? (
            <div className="admin-info">
              <div className="admin-avatar">
                <img src="https://i.pravatar.cc/200" alt="avatar" />
                <p>admin'name</p>
              </div>
            </div>
          ) : (
            <button className="btn--primary">Login</button>
          )}
        </div>
      </div>
    </>
  );
}
