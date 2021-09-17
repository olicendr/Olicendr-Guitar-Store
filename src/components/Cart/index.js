import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import OliButton from "../UI/OliButton";

const Cart = ({ items, onRemoveFromCart }) => {
  const renderedList = items.map(item => {
    return (
      <div key={item.itemId} className={classes.cart__item}>
        <div className={classes.item__picture}>
          <img src={`images/items/` + item.imgSrc} alt={item.title}></img>
        </div>
        <p className={classes.title}>{item.title}</p>
        <p>{item.price}</p>
        <OliButton onClick={() => onRemoveFromCart(item)}>Remove</OliButton>
      </div>
    );
  });

  return (
    <div className={classes.cart}>
      <div className={classes.returnBtn}>
        <Link to="/">
          <OliButton>Back to Store</OliButton>
        </Link>
      </div>
      {items.length ? (
        <div>{renderedList}</div>
      ) : (
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
