import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalState } from "./hooks/useLocalState";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useLocalState([], "cartItems");
  const [favoriteItems, setFavoriteItems] = useLocalState([], "favoriteItems");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
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
        setSearchedItems(searchItems);
      }, 500);
    } else {
      setSearchedItems([]);
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

  let onCategoryClick = category => {
    if (category.type === "all") {
      setCategorisedItems([]);
    } else {
      setCategorisedItems(allItems.filter(item => item.type === category.type));
    }
  };

  const whatToShow = categorisedItems.length ? categorisedItems : allItems;

  return (
    <Router>
      <div className="container">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Switch>
          <Route exact path="/">
            <div className="content">
              <SideBar className="side" onCategoryClick={onCategoryClick} />
              <Content
                className="main"
                items={searchedItems && searchTerm ? searchedItems : whatToShow}
                onAddToCart={onAddToCart}
                onAddtoFavorites={onAddtoFavorites}
              />
            </div>
          </Route>
          <Route path="/cart">
            <Cart items={cartItems} onRemoveFromCart={onRemoveFromCart} />
          </Route>
          <Route path="/favorites">
            <Favorites
              items={favoriteItems}
              onRemoveFromFavorites={onRemoveFromFavorites}
              onAddToCart={onAddToCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
