import React, { useState, useEffect } from "react";
import classes from "./Content.module.css";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://61372140eac1410017c18156.mockapi.io/storeData")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const renderedList = data.map((element) => {
    return (
      <div className={classes.wrapper} key={element.title}>
        <div>
          <img src={`images/items/` + element.imgSrc} alt={element.title}></img>
        </div>
        <p className={classes.title}>{element.name}</p>
        <p>Price: {element.price}</p>
        <div className={classes.item__buttons}>
          <button>Add to Cart</button>
          <button>Add to Favorites</button>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{renderedList}</div>;
};

export default Content;
