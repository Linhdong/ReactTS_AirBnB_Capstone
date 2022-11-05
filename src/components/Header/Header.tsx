import React, { useRef, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";

const logo = require("../../assets/img/airbnb-logo.png");
type Props = {};

export default function Header({}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [path, setPath] = useState<string>("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordRef = useRef<string>("");
  const handleChange = (e:{target:HTMLInputElement}) => {
    const {value, id} = e.target;
    keywordRef.current = value;
    setSearchParams({maViTri: keywordRef.current});
  }
  // console.log(typeof(searchParams.get("maViTri")));
  const location = `/roomlist?${searchParams.get("maViTri")}`;

  const showDropdown = () => setIsClicked(!isClicked);

  return (
    <header className="header bg-white shadow-sm">
      <div className="container py-4 d-flex justify-content-between align-items-center">
        {/* left section - logo */}
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="airbnb-logo" />
          </NavLink>
        </div>
        {/* right section - logo */}

        {/* middle section - search bar */}
        <div className="header__search-bar">
          <div className="search-bar d-flex align-items-center justify-content-between">
            <input type="text" placeholder="Start your search" onChange={handleChange} id="maViTri"/>
            <Button
              path={location}
              className="btn--primary btnSearch"
              onClick={() => {}}
            >
              <i className="fas fa-search"></i>
            </Button>
          </div>
        </div>
        {/* middle section - search bar */}

        {/* right section */}
        <div className="header__right d-flex">
          <Button path="#" className="btn--light" onClick={() => {}}>
            Become a host
          </Button>
          <Button
            path="#"
            className="btn--light btnLanguage"
            onClick={() => {}}
          >
            <i className="fas fa-globe"></i>
          </Button>
          <div className="user">
            <Button
              path="#"
              className="btn--light btn-border-black btnUser"
              onClick={showDropdown}
            >
              <>
                <i className="fa fa-bars"></i>
                <i className="fa fa-user"></i>
                <div className="notification d-inline-block">1</div>
              </>
            </Button>
            <div
              id="user__dropdown"
              className={`dropdown__content ${
                isClicked ? "d-block" : "d-none"
              }`}
              onClick={showDropdown}
            >
              <NavLink to="/signin" className="dropdown__item">
                Sign in
              </NavLink>
              <NavLink to="/signup" className="dropdown__item">
                Sign up
              </NavLink>
              <hr />
              <a href="/" className="dropdown__item">
                Host your home
              </a>
              <a href="/" className="dropdown__item">
                Host an experience
              </a>
              <a href="/" className="dropdown__item">
                Help
              </a>
            </div>
          </div>
        </div>
        {/* right section */}
      </div>
    </header>
  );
}
