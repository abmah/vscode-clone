import React from "react";
import "../vs.css";
import Branch from "./footer-icons/branch.svg";
import CheckMark from "./footer-icons/check.svg";
import Copilot from "./footer-icons/copilot.svg";
import Notif from "./footer-icons/notif.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logos-left">
        <img src={Branch} alt="" />
        <h1>master*</h1>
      </div>
      <div className="errors">
        <h2>errors</h2>
      </div>
      <div class="footer-logos-right">
        <div>
          <img src={CheckMark} alt="" />
        </div>
        <div>
          <img src={Notif} alt="" />
        </div>
        <div>
          <img src={Copilot} alt="" />
        </div>
      </div>
    </div>
  );
}
