import React from "react";
import classes from "./Favorites.module.css";

const Favorites = ({ items, onRemoveFromFavorites, onAddToCart }) => {
  const renderedList = items.map((item) => {
    return (
      <div className={classes.wrapper} key={item.title}>
        <div className={classes.imageWrapper}>
          <img src={`images/items/` + item.imgSrc} alt={item.title}></img>
        </div>
        <p className={classes.title}>{item.title}</p>
        <p>Price: {item.price}</p>
        <div className={classes.item__buttons}>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <button onClick={() => onRemoveFromFavorites(item)}>
            Remove from Favorites
          </button>
        </div>
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
