import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

import "./App.css";

let useLocalState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useLocalState([], "cartItems");
  const [favoriteItems, setFavoriteItems] = useLocalState([], "favoriteItems");

  useEffect(() => {
    axios
      .get("https://61372140eac1410017c18156.mockapi.io/storeData")
      .then((res) => {
        setAllItems(res.data);
      });
  }, []);

  let onAddToCart = (item) => {
    let payload = {
      itemId: item.itemId,
      title: item.name,
      price: item.price,
      imgSrc: item.imgSrc,
    };
    setCartItems([...cartItems, payload]);
  };

  let onAddtoFavorites = (item) => {
    let payload = {
      itemId: item.itemId,
      title: item.name,
      price: item.price,
      imgSrc: item.imgSrc,
    };
    setFavoriteItems([...favoriteItems, payload]);
  };

  let onRemoveFromCart = (removedItem) => {
    let cartWithoutRemovedItem = cartItems.filter(
      (item) => item !== removedItem
    );
    setCartItems(cartWithoutRemovedItem);
  };

  let onRemoveFromFavorites = (removedItem) => {
    let favoritesWithoutRemovedItem = favoriteItems.filter(
      (item) => item !== removedItem
    );
    setFavoriteItems(favoritesWithoutRemovedItem);
  };

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
        <Cart items={cartItems} onRemoveFromCart={onRemoveFromCart} />
      ) : isFavoritesOpen ? (
        <Favorites
          items={favoriteItems}
          onRemoveFromFavorites={onRemoveFromFavorites}
          onAddToCart={onAddToCart}
        />
      ) : allItems.length ? (
        <div className="content">
          <SideBar className="side" />
          <Content
            className="main"
            items={allItems}
            onAddToCart={onAddToCart}
            onAddtoFavorites={onAddtoFavorites}
          />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
