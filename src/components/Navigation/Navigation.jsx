import React from 'react';
import "./Navigation.css";
import logo from "../../assets/logo.svg"

const Navigation = () => {
  return (
  <nav className="navigation">
    <div className="navigation__logo-section">
      <img className="navigation__logo" src={logo} alt="logo" />
      <h3 className="navigation__name">SmartNotes</h3>
    </div>
  </nav>
  );
};

export default Navigation