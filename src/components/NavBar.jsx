import React, { Component } from "react";

const NavBar = () => {
  const list = ["Home Page", "Contact Us", "About Us"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {list.map((item) => (
          <a className="navbar-brand" key={item}>
            {item}
          </a>
        ))}
        <div className="d-flex">
          <a className="btn btn-outline-success me-2" type="submit">
            My Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
