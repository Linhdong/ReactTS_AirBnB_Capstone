import React from "react";

const loadingGif = require("../../assets/img/loading.gif");

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="loading">
      <img src={loadingGif} alt="loading..." />
    </div>
  );
}
