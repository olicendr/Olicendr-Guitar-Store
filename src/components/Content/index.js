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

  let onAddToCart = async (item) => {
    let payload = {
      itemId: item.itemId,
      title: item.name,
      price: item.price,
      imgSrc: item.imgSrc,
    };

    await axios.post(
      "https://61372140eac1410017c18156.mockapi.io/cart",
      payload
    );
  };

  const renderedList = storeItems.map((storeItem) => {
    return (
      <div key={storeItem.id} className={classes.wrapper}>
        <div>
          <img
            src={`images/items/` + storeItem.imgSrc}
            alt={storeItem.title}
          ></img>
        </div>
        <p className={classes.title}>{storeItem.name}</p>
        <p>Price: {storeItem.price}</p>
        <div className={classes.item__buttons}>
          <button onClick={() => onAddToCart(storeItem)}>Add to Cart</button>
          <button>Add to Favorites</button>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
