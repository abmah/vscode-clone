import React, { useContext } from "react";
import "../vs.css";
import { TimeoutContext } from "./context/TimeoutContext";
export default function Directory() {
  const { fileExtension } = useContext(TimeoutContext);

  return (
    <div className="directory">
      {/*<div>my_portfolio {">"}</div>
        <div>src {">"}</div>
        <div>v_components {">"}</div>*/}
      <div>Layout {">"}</div>
      <div>
        introduction{fileExtension ? ".js" : ".md"}
        {">"}
      </div>
    </div>
  );
}
