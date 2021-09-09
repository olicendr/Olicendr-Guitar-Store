import React from "react";
import classes from "./Favorites.module.css";

const Favorites = () => {
  return (
    <div className={classes.favorites}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div>
            <img
              src="images/items/item-1.jpg"
              alt="EPIPHONE LES PAUL SPECIAL VE EBONY VINTAGE"
            ></img>
          </div>
          <p className={classes.title}>
            EPIPHONE LES PAUL SPECIAL VE EBONY VINTAGE
          </p>
          <p>Price: 23500</p>
          <div className={classes.item__buttons}>
            <button>Add to Cart</button>
            <button>Remove from Favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
