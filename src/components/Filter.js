import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";

import "../styles/Filter.css";

const Filter = ({ defaultList, listFilter }) => {
  return (
    <div className="filter">
      <form onSubmit={listFilter}>
        <input name="name" type="text" placeholder="Name" />

        <select className="selectCity" name="city">
          <option value="" hidden>
            City
          </option>
          {defaultList.map((item) => (
            <option key={item.id} value={item.city}>
              {item.city}
            </option>
          ))}
        </select>

        <div className="active">
          <input type="checkbox" name="showActive" id="showActive" />
          <label htmlFor="showActive">Show active</label>
          <VisibilityIcon
            style={{ color: "#fff", fontSize: 15, marginTop: 3 }}
          />
        </div>
        <button type="submit">FILTER</button>
      </form>
      <h1>CONTACTIFY</h1>
    </div>
  );
};

export default Filter;
