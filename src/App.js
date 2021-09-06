import React from "react";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TestContent from "./components/TestContent";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar className="side" />
        <TestContent className="main" />
      </div>
    </div>
  );
}

export default App;
