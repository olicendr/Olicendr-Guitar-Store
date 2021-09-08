import React from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li className={classes.sidebar__items}>
          <a href="/">All</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/electric-guitars">Electric Guitars</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/acoustic-guitars">Acoustic Guitars</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/basses">Basses</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/drums">Drums</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/electricguitar-amps">Electric Guitar Amps</a>
        </li>
        <li className={classes.sidebar__items}>
          <a href="/electric-guitar-effects">Electric Guitar Effects</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
