import React from "react";
import classes from "./Favorites.module.css";
import Card from "../Card";

const Favorites = ({ items, onAddToCart, onRemoveFromFavorites }) => {
  const renderedList = items.map(item => {
    return (
      <div className={classes.wrapper}>
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
      {items.length ? (
        <div className={classes.container}>{renderedList}</div>
      ) : (
        <h2>Nothing in favorites</h2>
      )}
    </div>
  );
};

export default Favorites;
