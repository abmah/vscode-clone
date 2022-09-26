import React from "react";
import "./vs.css";
import Header from "./Layout/Header";
import SideBar from "./Layout/SideBar";
import ScrollMenu from "./Layout/ScrollMenu";
import Directory from "./Layout/Directory";
import CodeBody from "./Layout/CodeBody";
import Terminal from "./Layout/Terminal";
import Footer from "./Layout/Footer";
import { TimeoutContextProvider } from "./Layout/context/TimeoutContext";
export default function VsMain() {
  return (
    <div class="main">
      <TimeoutContextProvider>
        <Header />

        <div className="vs-body">
          <SideBar />
          <div className="vs-content">
            <ScrollMenu />
            <Directory />
            <CodeBody />
            <Terminal />
          </div>
        </div>
        <Footer />
      </TimeoutContextProvider>
    </div>
  );
}
