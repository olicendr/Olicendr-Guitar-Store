import React from "react";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar className="side" />
        <Content className="main" />
      </div>
    </div>
  );
}

export default App;
