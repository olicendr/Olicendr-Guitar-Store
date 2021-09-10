import React from "react";
import classes from "./Content.module.css";

const Content = ({ items, onAddToCart, onAddtoFavorites }) => {
  const renderedList = items.map((item) => {
    return (
      <div key={item.id} className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <img src={`images/items/` + item.imgSrc} alt={item.title}></img>
        </div>
        <p className={classes.title}>{item.title}</p>
        <p>Price: {item.price}</p>
        <div className={classes.item__buttons}>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <button onClick={() => onAddtoFavorites(item)}>
            Add to Favorites
          </button>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
