import React from "react";
import classes from "./Content.module.css";
import OliButton from "../UI/OliButton";

const Content = ({ items, onAddToCart, onAddtoFavorites }) => {
  const renderedList = items.map(item => {
    return (
      <div key={item.id} className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <img src={`images/items/` + item.imgSrc} alt={item.title}></img>
        </div>
        <p className={classes.title}>{item.title}</p>
        <p>Price: {item.price}</p>
        <div className={classes.item__buttons}>
          <OliButton onClick={() => onAddToCart(item)}>Add to Cart</OliButton>
          <OliButton onClick={() => onAddtoFavorites(item)}>
            Add to Favorites
          </OliButton>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
