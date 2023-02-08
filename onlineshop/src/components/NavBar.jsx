import React, { Component } from "react";

const NavBar = () => {
  const list = ["Home Page", "Contact Us", "About Us"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {list.map((item) => (
        <a key={item}>{item}</a>
      ))}
    </nav>
  );
};

export default NavBar;
