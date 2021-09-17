import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img src="/images/logo.svg" alt="logo"></img>
      </Link>

      <h1>Olicendr Music Store</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to="/cart">
        <img src="/images/cart.svg" alt="shopping cart"></img>
      </Link>

      <Link to="/favorites">
        <img src="/images/favorites.svg" alt="favorites"></img>
      </Link>
    </header>
  );
};

export default Header;
