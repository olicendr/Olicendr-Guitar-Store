import React, { useState } from "react";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  let onCartClick = () => {
    setIsCartOpen(!isCartOpen);
    setIsFavoritesOpen(false);
  };

  let onFavoritesClick = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
    setIsCartOpen(false);
  };

  return (
    <div className="container">
      <Header onCartClick={onCartClick} onFavoritesClick={onFavoritesClick} />
      {isCartOpen ? (
        <Cart />
      ) : isFavoritesOpen ? (
        <Favorites />
      ) : (
        <div className="content">
          <SideBar className="side" />
          <Content className="main" />
        </div>
      )}
    </div>
  );
}

export default App;
