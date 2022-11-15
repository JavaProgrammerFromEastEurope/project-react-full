import React from "react";
import classes from "./CustomInput.module.css";
const CustomInput = React.forwardRef((props, ref) => {
  return <input {...props} className={classes.cusInput} />;
});

export default CustomInput;
