import React from "react";
import "./Button.css";
import Heart from "../Icon/Heart";
import Cart from "../Icon/Cart";

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
    if (!props.type) {
      classList += ` button-outline`; // Note initial empty space as we add to the string
    } else {
      classList += ` button-${props.type}-outline`; // Note initial empty space as we add to the string
    }
  }

  if (props.haze) {
    if (!props.type) {
      classList += ` button-haze`; // Note initial empty space as we add to the string
    } else {
      classList += ` button-${props.type}-haze`; // Note initial empty space as we add to the string
    }
  }

  if (props.type === "user-input") {
    classList += ` button-user-input`; // Note initial empty space as we add to the string
  }

  if (props.icon === "cart") {
    classList += ` button-cart`; // Note initial empty space as we add to the string
  }

  if (props.icon === "heart") {
    classList += ` button-heart`; // Note initial empty space as we add to the string
  }

  if (props.rectangle) {
    classList += ` button-rectangle`; // Note initial empty space as we add to the string
  }

  if (props.square) {
    classList += ` button-square`; // Note initial empty space as we add to the string
  }

  // Button class needs a value of classList,
  // to which we add the classList string
  // If there are icons, handle first
  if (props.icon === "heart" && props.rectangle) {
    return (
      <button className={classList}>
        <Heart />
        <span>{props.label}</span>
      </button>
    );
  } else if (props.icon === "cart" && props.rectangle) {
    return (
      <button className={classList}>
        <Cart />
        <span>{props.label}</span>
      </button>
    );
  } else if (props.icon === "heart") {
    return (
      <button className={classList}>
        <Heart />
      </button>
    );
  } else if (props.icon === "cart") {
    return (
      <button className={classList}>
        <Cart />
      </button>
    );
  } else {
    return <button className={classList}>{props.label}</button>;
  }
};

export default Button;
