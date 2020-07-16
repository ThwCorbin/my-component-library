import React from "react";
import "./Button.css";

// This is a functional component - just set up a little differently as an arrow function!
const Button = (props) => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  // Create an array of all of the story/component types you want to be
  // included in your component library
  let types = ["primary", "danger", "success", "warning"];

  // Add a conditional statement that checks for the type and updates the
  // classList variable based on their existence.
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  // Add other conditional statement to check for additional properties (such as large)
  // and add to the classList variable based on this condition evaluating to true
  if (props.large) {
    classList += ` button-large`; // Note the spacing here since we are adding to the string!
  }

  if (props.small) {
    classList += ` button-small`; // Note the spacing here since we are adding to the string!
  }

  // Add a conditional statement that checks for hover and outline and updates the
  // classList variable based on their existence. Use ${props.type} for this to work on multiple types
  if (props.hover) {
    classList += ` button-${props.type}:hover`; // Note the spacing here since we are adding to the string!
  }

  if (props.outline) {
    classList += ` button-${props.type}-outline`; // Note the spacing here since we are adding to the string!
  }

  // Give the button's class a value of classList
  return <button className={classList} onClick=props.whenClicked() >{props.label}</button>;
};

export default Button;
