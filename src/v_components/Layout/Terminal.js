import React, { useContext } from "react";
import "../vs.css";
import Trash from "./terminal-icons/trash.svg";
import Plus from "./terminal-icons/plus.svg";
import X from "./terminal-icons/x.svg";
import { TimeoutContext } from "./context/TimeoutContext";
export default function Terminal() {
  const { executeCode } = useContext(TimeoutContext);
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-header-left">
          <div>PROPLEMS</div>
          <div>OUTPUT</div>
          <div>DEBUG CONSOLE</div>
          <div className="current-terminal">TERMINAL</div>
        </div>
        <div className="terminal-header-right">
          <img src={Trash} alt="" />
          <img src={Plus} alt="" />
          <img src={X} alt="" />
        </div>
      </div>
      <div className="terminal-body">{executeCode && "  have a nice day"}</div>
    </div>
  );
}
