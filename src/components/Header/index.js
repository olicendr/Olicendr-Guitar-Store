import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="/images/logo.svg" alt="logo"></img>
      <h1>Olicendr Music Store</h1>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <img src="/images/cart.svg" alt="shopping cart"></img>
      <img src="/images/favorites.svg" alt="favorites"></img>
    </header>
  );
};

export default Header;
