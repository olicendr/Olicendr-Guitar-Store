import React from "react";
import classes from "./Card.module.css";
import OliButton from "../UI/OliButton";

const Card = ({ item, firstButton, secondButton }) => {
  return (
    <div key={item.id} className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img src={`images/items/` + item.imageSource} alt={item.title}></img>
      </div>
      <div className={classes.title__wrapper}>
        <p className={classes.title}>{item.title}</p>
      </div>

      <p>Price: {item.price}</p>
      <div className={classes.item__buttons}>
        <OliButton onClick={() => firstButton.handler(item)}>
          {firstButton.title}
        </OliButton>
        <OliButton onClick={() => secondButton.handler(item)}>
          {secondButton.title}
        </OliButton>
      </div>
    </div>
  );
};

export default Card;
