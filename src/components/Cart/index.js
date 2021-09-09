import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://61372140eac1410017c18156.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  let onRemoveFromCart = async (item) => {
    await axios
      .delete(`https://61372140eac1410017c18156.mockapi.io/cart/${item.id}`)
      .then(() => {
        axios
          .get("https://61372140eac1410017c18156.mockapi.io/cart")
          .then((res) => {
            setCartItems(res.data);
          });
      });
  };

  const renderedList = cartItems.map((item) => {
    return (
      <div key={item.id} className={classes.cart__item}>
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
      {cartItems.length ? (
        <div>
          <h2>Cart</h2>
          {renderedList}
        </div>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
