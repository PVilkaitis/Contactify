import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import "../styles/List.css";

const List = ({
  list,
  setDisplayContact,
  displayContact,
  collumns,
  openMenu,
}) => {
  const backgroundHandler = (id) => {
    if (!openMenu && id !== displayContact) {
      return "list-item";
    } else if (!openMenu && id === displayContact) {
      return "list-item list-item-active";
    } else if (openMenu && id !== displayContact) {
      return "list-item list-item-openMenu";
    } else {
      return "list-item list-item-active-openMenu";
    }
  };

  return (
    <div className="list">
      {list.map((item) => (
        <div
          className={backgroundHandler(item.id)}
          key={item.id}
          onClick={() => {
            setDisplayContact(item.id);
          }}
        >
          <div
            className={collumns.name ? "list-item-name" : "list-item-name-off"}
          >
            <p>
              {item.name} {item.surname[0]}.
            </p>
          </div>

          <div
            className={collumns.city ? "list-item-city" : "list-item-city-off"}
          >
            <p>{item.city}</p>
          </div>

          {item.isActive ? (
            <VisibilityIcon style={{ color: "#5b5950", fontSize: 15 }} />
          ) : (
            <VisibilityOffIcon style={{ color: "#5b5950", fontSize: 15 }} />
          )}

          <div
            className={collumns.email ? "list-item-mail" : "list-item-mail-off"}
          >
            <p>{item.email}</p>
          </div>

          <div
            className={
              collumns.phone ? "list-item-number" : "list-item-number-off"
            }
          >
            <p>+{item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
