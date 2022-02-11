import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="punkLogo"
          alt="logo"
          src="/assets/header/cryptopunk-logo.png"
        />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img alt="search icon" src="/assets/header/search.png" />
        </div>
        <input className="searchInput" placeholder="Collection, item or user" />
      </div>
      <div className="headerItems">
        <p>Drop</p>
        <p>Market Place</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img alt="icon" src="/assets/header/theme-switch.png" />
        </div>
      </div>
      <div className="loginButton" >
          GET IN
      </div>
    </div>
  );
};

export default Header;
