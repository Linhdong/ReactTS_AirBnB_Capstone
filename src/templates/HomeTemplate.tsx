import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
