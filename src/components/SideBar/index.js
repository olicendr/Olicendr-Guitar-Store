import React from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li className={classes.sidebar__items}>
          <a href="#">Electric Guitars</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="#">Acoustic Guitars</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="#">Basses</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="#">Drums</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="#">Electric Guitar Amps</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="#">Electric Guitar Effects</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
