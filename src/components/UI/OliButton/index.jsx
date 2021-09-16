import React from "react";
import classes from "./OliButton.module.css";

const OliButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.oliButton}>
      {children}
    </button>
  );
};

export default OliButton;
