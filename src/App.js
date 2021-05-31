import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [displayContact, setDisplayContact] = useState();
  const [collumns, setCollumns] = useState({
    name: true,
    city: true,
    email: true,
    phone: true,
  });

  const dataReq = async () => {
    await axios
      .get("https://contactify-api.herokuapp.com/api/contacts")
      .then((response) => {
        setList(response.data);
        setDefaultList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataReq();
  }, []);

  const sortList = () => {
    const copy = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(copy);
  };

  const listFilter = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let city = e.target.city.value;
    let active = e.target.showActive.checked;

    if (name === "" && city === "" && active === false) {
      setList(defaultList);
    } else if (name === "" && city === "" && active === true) {
      let copy = defaultList.filter((copy) => copy.isActive === true);
      setList(copy);
    } else if (name !== "" && city === "" && active === false) {
      let copy = defaultList.filter(
        (copy) => copy.name.toLowerCase() === name.toLowerCase()
      );
      setList(copy);
    } else if (name === "" && city !== "" && active === false) {
      let copy = defaultList.filter((copy) => copy.city === city);
      setList(copy);
    } else if (name !== "" && city !== "" && active === false) {
      let copy = defaultList.filter(
        (copy) =>
          copy.city === city && copy.name.toLowerCase() === name.toLowerCase()
      );
      setList(copy);
    } else if (name !== "" && city === "" && active !== false) {
      let copy = defaultList.filter(
        (copy) =>
          copy.isActive === true &&
          copy.name.toLowerCase() === name.toLowerCase()
      );
      setList(copy);
    } else if (name === "" && city !== "" && active !== false) {
      let copy = defaultList.filter(
        (copy) => copy.isActive === true && copy.city === city
      );
      setList(copy);
    } else if (name !== "" && city !== "" && active !== false) {
      let copy = defaultList.filter(
        (copy) =>
          copy.isActive === true &&
          copy.city === city &&
          copy.name.toLowerCase() === name.toLowerCase()
      );
      setList(copy);
    }
    e.target.reset();
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Filter defaultList={defaultList} listFilter={listFilter} />
        <Header
          setCollumns={setCollumns}
          collumns={collumns}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          sortList={sortList}
        />
        <div className="content">
          <List
            list={list}
            setDisplayContact={setDisplayContact}
            displayContact={displayContact}
            collumns={collumns}
            openMenu={openMenu}
          />
          <Form displayContact={displayContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
