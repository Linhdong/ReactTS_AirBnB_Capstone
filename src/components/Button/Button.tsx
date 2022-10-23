import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  className: string;
  children: string | JSX.Element;
  onClick: () => void;
};

export default function Button({ path, className, children, onClick }: Props) {
  return (
    <NavLink to={path}>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </NavLink>
  );
}
