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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [categorisedItems, setCategorisedItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://61372140eac1410017c18156.mockapi.io/storeData")
      .then(response => {
        setAllItems(response.data);
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setTimeout(() => {
        const searchItems = allItems.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(searchItems);
      }, 500);
    } else {
      setFilteredItems([]);
    }
  }, [searchTerm, allItems]);

  let onAddToCart = item => {
    if (!cartItems.some(e => e.title === item.title)) {
      let payload = {
        itemId: item.itemId,
        title: item.title,
        price: item.price,
        imgSrc: item.imgSrc,
      };
      setCartItems([...cartItems, payload]);
      onRemoveFromFavorites(item);
    }
    return;
  };

  let onAddtoFavorites = item => {
    if (!favoriteItems.some(e => e.title === item.title)) {
      let payload = {
        itemId: item.itemId,
        title: item.title,
        price: item.price,
        imgSrc: item.imgSrc,
      };
      setFavoriteItems([...favoriteItems, payload]);
    }
    return;
  };

  let onRemoveFromCart = removedItem => {
    let cartWithoutRemovedItem = cartItems.filter(item => item !== removedItem);
    setCartItems(cartWithoutRemovedItem);
  };

  let onRemoveFromFavorites = removedItem => {
    let favoritesWithoutRemovedItem = favoriteItems.filter(
      item => item !== removedItem
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

  let onCategoryClick = category => {
    if (category.type === "all") {
      setCategorisedItems([]);
    } else {
      setCategorisedItems(allItems.filter(item => item.type === category.type));
    }
  };
  const whatToShow = categorisedItems.length ? categorisedItems : allItems;
  return (
    <div className="container">
      <Header
        onCartClick={onCartClick}
        onFavoritesClick={onFavoritesClick}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
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
          <SideBar className="side" onCategoryClick={onCategoryClick} />
          <Content
            className="main"
            items={filteredItems && searchTerm ? filteredItems : whatToShow}
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
