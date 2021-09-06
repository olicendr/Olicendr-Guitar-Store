import React from "react";
import classes from "./TestContent.module.css";

const data = [
  {
    imgSrc: "item-1.jpg",
    text: "EPIPHONE LES PAUL SPECIAL VE EBONY VINTAGE",
    price: 23400,
  },
  {
    imgSrc: "item-2.jpg",
    text: "FENDER SQUIER BULLET STRAT HT HSS BLK",
    price: 19500,
  },
  {
    imgSrc: "item-3.jpg",
    text: "FENDER SQUIER BULLET TREM HSS BSB",
    price: 19500,
  },
  {
    imgSrc: "item-4.jpg",
    text: "GIBSON 2019 EXPLORER ANTIQUE NATURAL",
    price: 167000,
  },
  {
    imgSrc: "item-5.jpg",
    text: "GIBSON LES PAUL STANDARD 50S HERITAGE CHERRY SUNBURST",
    price: 238000,
  },
];

const renderedList = data.map((element) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={`images/items/` + element.imgSrc}></img>
      </div>
      <p className={classes.title}>{element.text}</p>
      <p>Price: {element.price}</p>
      <div className={classes.item__buttons}>
        <button>Add to Cart</button>
        <button>Add to Favorites</button>
      </div>
    </div>
  );
});

const TestContent = () => {
  return <div className={classes.container}>{renderedList}</div>;
};

export default TestContent;
