import React from "react";
import classes from "./Content.module.css";
import Card from "../Card";

const Content = ({ items, onAddToCart, onAddtoFavorites }) => {
  const renderedList = items.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        firstButton={{ handler: onAddToCart, title: "Add to Cart" }}
        secondButton={{ handler: onAddtoFavorites, title: "Add to Favorites" }}
      />
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
