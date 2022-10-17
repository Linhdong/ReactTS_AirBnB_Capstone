import React from "react";


type Props = {};

export default function Filter({}: Props) {
  return (
    <div className="filter my-3 py-3 border-bottom">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="btn-group-sm me-2 price">
            <select className="btn btn-outline-secondary">
              <option selected>Price </option>
              <option value={1} className="text-center">
                100$
              </option>
              <option value={2}>200$</option>
              <option value={3}>300$</option>
            </select>
          </div>
          <div className="btn-group-sm price">
            <select className="btn btn-outline-secondary">
              <option selected>Type of place </option>
              <option value={1} className="text-center">
                100$
              </option>
              <option value={2}>200$</option>
              <option value={3}>300$</option>
            </select>
          </div>
        </div>

        <div className="btn-group-sm m-auto multiple-choice">
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Free cancelation"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Wifi"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Kitchen"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Air conditioning"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Washer"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Iron"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Delicated workspace"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Free parking"
          />
          <input
            className="btn btn-outline-secondary me-2"
            type="button"
            value="Dyer"
          />
          <button className="btn btn-outline-secondary me-2" type="submit">
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>
      </div>
    </div>
  );
}
