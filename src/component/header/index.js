import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="headerComponent" data-test="header">
      <div className="wrap ">
        <div className="logo" data-test="logo">
          Test Enzyme
        </div>
      </div>
    </header>
  );
};

export default Header;
