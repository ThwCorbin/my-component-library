import React from "react";
import "./Input.css";

const Input = (props) => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  // Array of all story/component types in the component library
  // Default cases have no type attribute
  let types = ["primary", "danger", "success", "warning"];

  // Check if type is true and
  // Update classList variable if not default
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  // Button class needs a value of classList,
  // to which we add the classList string
  return <input className={classList}></input>;
};

export default Input;

// onClick=props.whenClicked()
