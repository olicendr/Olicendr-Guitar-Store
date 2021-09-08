import React, { useState, useEffect } from "react";
import classes from "./Content.module.css";
import axios from "axios";

const Content = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://61372140eac1410017c18156.mockapi.io/storeData")
      .then((res) => {
        setStoreItems(res.data);
      });
  }, []);

  const renderedList = storeItems.map((storeItems) => {
    let onAddToCart = async () => {
      let payload = {
        title: storeItems.name,
        price: storeItems.price,
        imgSrc: storeItems.imgSrc,
      };

      await axios.post(
        "https://61372140eac1410017c18156.mockapi.io/cart",
        payload
      );
    };

    return (
      <div className={classes.wrapper} key={storeItems.title}>
        <div>
          <img
            src={`images/items/` + storeItems.imgSrc}
            alt={storeItems.title}
          ></img>
        </div>
        <p className={classes.title}>{storeItems.name}</p>
        <p>Price: {storeItems.price}</p>
        <div className={classes.item__buttons}>
          <button onClick={onAddToCart}>Add to Cart</button>
          <button>Add to Favorites</button>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
