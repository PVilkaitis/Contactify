import React from "react";

import OutsideClickHandler from "react-outside-click-handler";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import "../styles/Header.css";

const Header = ({ setCollumns, collumns, openMenu, setOpenMenu, sortList }) => {
  return (
    <div className="header">
      <div className="header-name" onClick={sortList}>
        <p>Name</p>
        <ArrowDownwardIcon style={{ fontSize: 15, marginTop: 5 }} />
      </div>
      <p className="header-city">City</p>
      <p className="header-email">Email</p>
      <p className="header-phone">Phone</p>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenMenu(false);
        }}
      >
        <div
          className="header-menu"
          style={
            openMenu
              ? {
                  backgroundColor: "#fff",
                  boxShadow: "0 0px 5px rgba(0,0,0,0.4)",
                  clipPath: "inset(0px -15px 0px -15px)",
                }
              : { backgroundColor: "#4eb7be" }
          }
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? (
            <FormatListBulletedIcon
              style={{ color: "#4eb7be", fontSize: 18 }}
            />
          ) : (
            <FormatListBulletedIcon style={{ fontSize: 18 }} />
          )}
        </div>
        <div className={openMenu ? "menu" : "menu-off"}>
          <div className="menu-item">
            <input
              type="checkbox"
              id="nameOption"
              defaultChecked
              onChange={() =>
                setCollumns({ ...collumns, name: !collumns.name })
              }
            />
            <label htmlFor="nameOption">Name</label>
          </div>
          <div className="menu-item">
            <input
              type="checkbox"
              id="cityOption"
              defaultChecked
              onChange={() =>
                setCollumns({ ...collumns, city: !collumns.city })
              }
            />
            <label htmlFor="cityOption">City</label>
          </div>
          <div className="menu-item">
            <input
              type="checkbox"
              id="emailOption"
              defaultChecked
              onChange={() =>
                setCollumns({ ...collumns, email: !collumns.email })
              }
            />
            <label htmlFor="emailOption">Email</label>
          </div>
          <div className="menu-item">
            <input
              type="checkbox"
              id="phoneOption"
              defaultChecked
              onChange={() =>
                setCollumns({ ...collumns, phone: !collumns.phone })
              }
            />
            <label htmlFor="phoneOption">Phone</label>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Header;
