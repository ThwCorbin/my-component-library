import React from "react";
import "./Button.css";

const Button = (props) => {
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

  // Check if large, small, outline, and/or haze props are true
  // Update classList variable
  if (props.large) {
    classList += ` button-large`; // Note initial empty space as we add to the string
  }

  if (props.small) {
    classList += ` button-small`; // Note initial empty space as we add to the string
  }

  if (props.outline) {
    classList += ` button-outline`; // Note initial empty space as we add to the string
  }

  if (props.haze) {
    classList += ` button-haze`; // Note initial empty space as we add to the string
  }

  // Add a conditional statement that checks for hover and updates the
  // classList variable based on their existence. Use ${props.type} for this to work on multiple types
  //   if (props.hover) {
  //     classList += ` hover`; // Note the spacing here since we are adding to the string!
  //   }

  // Button class needs a value of classList,
  // to which we add the classList string
  return <button className={classList}>{props.label}</button>;
};

export default Button;

// onClick=props.whenClicked()
