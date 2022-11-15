import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.cusBtn}>
      {children}
    </button>
  );
};

export default CustomButton;
