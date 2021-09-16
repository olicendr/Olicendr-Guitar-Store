import React from "react";
import classes from "./Header.module.css";

const Header = ({
  onCartClick,
  onFavoritesClick,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <header className={classes.header}>
      <a href="/">
        <img src="/images/logo.svg" alt="logo"></img>
      </a>

      <h1>Olicendr Music Store</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
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
