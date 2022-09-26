import React from "react";
import "../vs.css";

import Github from "./icons/github-logo.js";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/abmah"
        >
          <Github />
        </a>
      </div>
    </div>
  );
}
