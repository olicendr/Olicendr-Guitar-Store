import React from "react";

import classes from "./SideBar.module.css";

const SideBar = ({ onCategoryClick }) => {
  let itemInfo = [
    { type: "all", title: "All" },
    { type: "electric guitar", title: "Electric Guitars" },
    { type: "acoustic guitar", title: "Acoustic Gutiars" },
    { type: "electric guitar amp", title: "Electric Guitar Amps" },
    { type: "electric guitar effect", title: "Electric Guitar Effects" },
    { type: "basses", title: "Basses" },
    { type: "drums", title: "Drums" },
  ];

  const renderedList = itemInfo.map(item => {
    return (
      <li key={item.title}>
        <button
          className={classes.sideBarItem}
          onClick={() => onCategoryClick(item)}
        >
          {item.title}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.sidebar}>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default SideBar;
