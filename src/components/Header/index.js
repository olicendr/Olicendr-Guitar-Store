import React from "react";
import classes from "./Header.module.css";

const Header = ({ onCartClick, onFavoritesClick }) => {
  return (
    <header className={classes.header}>
      <img src="/images/logo.svg" alt="logo"></img>
      <h1>Olicendr Music Store</h1>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <img
        src="/images/cart.svg"
        alt="shopping cart"
        onClick={onCartClick}
      ></img>
      <img
        src="/images/favorites.svg"
        alt="favorites"
        onClick={onFavoritesClick}
      ></img>
    </header>
  );
};

export default Header;
