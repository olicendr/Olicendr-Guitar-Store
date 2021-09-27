import React from "react";
import { Link } from "react-router-dom";
import classes from "./Favorites.module.css";
import Card from "../Card";
import OliButton from "../UI/OliButton";

const Favorites = ({ items, onAddToCart, onRemoveFromFavorites }) => {
  const renderedList = items.map(item => {
    return (
      <div className={classes.wrapper} key={item.id}>
        <Card
          key={item.id}
          item={item}
          firstButton={{
            handler: onAddToCart,
            title: "Add to Cart",
          }}
          secondButton={{
            handler: onRemoveFromFavorites,
            title: "Remove",
          }}
        />
      </div>
    );
  });
  return (
    <div className={classes.favorites}>
      <div className={classes.returnBtn}>
        <Link to="/">
          <OliButton>Back to Store</OliButton>
        </Link>
      </div>
      {items.length ? (
        <div className={classes.container}>{renderedList}</div>
      ) : (
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Nothing in favorites</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
