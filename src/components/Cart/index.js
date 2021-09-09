import React from "react";
import classes from "./Cart.module.css";

const Cart = ({ items, onRemoveFromCart }) => {
  const renderedList = items.map((item) => {
    return (
      <div key={item.itemId} className={classes.cart__item}>
        <div className={classes.item__picture}>
          <img src={`images/items/` + item.imgSrc} alt={item.title}></img>
        </div>
        <p className={classes.title}>{item.title}</p>
        <p>{item.price}</p>
        <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      </div>
    );
  });

  return (
    <div className={classes.cart}>
      {items.length ? <div>{renderedList}</div> : <h2>Cart is empty</h2>}
    </div>
  );
};

export default Cart;
