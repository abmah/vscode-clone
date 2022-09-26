import React from "react";
import Logo from "./icons/vs.png";
import "../vs.css";
import X from "./header-icons/x.svg";
import Minimize from "./header-icons/minimize.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-list">
        <img className="vs-logo" src={Logo} alt="" />

        <div className="header-list">
          <div>File</div>
          <div>Edit</div>
          <div>Selection</div>
          <div>View</div>
          <div>Go</div>
          <div>Run</div>
          <div>Terminal</div>
          <div>Help</div>
        </div>
      </div>
      <p className="portfolio">Portfolio</p>

      <div className="header-nav">
        <img src={Minimize} alt="" />
        <img className="header-x" src={X} alt="" />
      </div>
    </div>
  );
}
