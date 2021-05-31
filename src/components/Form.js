import React, { useState, useEffect } from "react";

import axios from "axios";

import userPic from "../userpic.jpg";
import "../styles/Form.css";

const Form = ({ displayContact }) => {
  const [contact, setContact] = useState(null);
  const contactHandler = async () => {
    if (displayContact) {
      await axios
        .get(
          `https://contactify-api.herokuapp.com/api/contacts/${displayContact}`
        )
        .then((response) => setContact(response.data))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    contactHandler();
  }, [displayContact]);

  return (
    <div className="form">
      {contact !== null ? (
        <div className="form-content">
          <img className="form-picture" src={userPic} alt="" />
          <div className="form-info">
            <div className="form-info-sections">
              <p>Name:</p>
              <p>City:</p>
              <p>Email:</p>
              <p>Phone:</p>
            </div>
            <div className="form-info-data">
              <p>
                {contact.name} {contact.surname[0]}.
              </p>
              <p>{contact.city}</p>
              <a href={contact.email}>{contact.email}</a>
              <p>+{contact.phone}</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Form;
