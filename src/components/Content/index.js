import React from "react";
import classes from "./Content.module.css";

const items = [];

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <img src="/images/items/item-1.png" />
          <p>GIBSON 2019 EXPLORER ANTIQUE NATURAL</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
