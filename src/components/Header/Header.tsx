import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const logo = require("../../assets/img/airbnb-logo.png");

type Props = {};

export default function Header({}: Props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="header">
      <div className="container py-4 d-flex justify-content-between align-items-center">
        {/* left section - logo */}
        <div className="header__logo">
          <NavLink to="">
            <img src={logo} alt="airbnb-logo" />
          </NavLink>
        </div>
        {/* right section - logo */}

        {/* middle section - search bar */}
        <div className="header__search-bar">
          <div className="search-bar d-flex align-items-center justify-content-between">
            <input type="text" placeholder="Start your search" />
            <button className="btnSearch">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {/* middle section - search bar */}

        {/* right section */}
        <div className="header__right d-flex">
          <div className="become-host">
            <button className="btnHost">Become a host</button>
          </div>
          <div className="language">
            <button className="btnLanguage">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="user-nav" data-toggle>
            <button
              className="btnUser"
              onClick={() => setIsClicked(!isClicked)}
            >
              <i className="fa fa-bars"></i>
              <i className="fa fa-user"></i>
              <div className="notification d-inline-block">1</div>
            </button>
          </div>
        </div>
        <div id="user-menu" className={isClicked ? "d-block" : "d-none"}>
          <div className="user-menu__top">
            <ul>
              <li>
                <NavLink to="/signin">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="user-menu__bottom">
            <ul>
              <li>Host your home</li>
              <li>Host an experience</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        {/* right section */}
      </div>
    </header>
  );
}
