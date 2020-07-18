import React from "react";
import "./Input.css";
import Plus from "../Icon/Plus";
import Minus from "../Icon/Minus";

const Input = (props) => {
  let {
    id,
    type,
    name,
    medium,
    large,
    label,
    placeholder,
    buttonText,
    min,
    max,
    step,
    value,
  } = props;
  let labelText = "";
  let placeText = "";
  let classList = "";
  let formClassList = "";
  let numClassList = "";
  let btnClassList = "";

  // label is optional
  // Check if there is a label
  // If so, assign to labelText variable
  if (label) {
    labelText = label;
  }

  // placeholder is optional
  // Check if there is a placeholder
  // If so, set placeText to placeholder
  // If not, set placeText to labelText
  if (placeholder) {
    placeText = `  ${placeholder}`;
  } else {
    placeText = `  ${labelText}`;
  }

  if (medium) {
    classList += ` input-medium`; // Note space at beginning of string
  }

  if (large) {
    classList += ` input-large`; // Note space at beginning of string
  }

  if (type === "text" && !large) {
    // Note space at beginning of string
    formClassList += ` form-input-text`;
    btnClassList += ` input-btn`;
    classList += ` input-text`;
  }

  if (type === "text" && large) {
    // Note space at beginning of string
    formClassList += ` form-input-text-large`;
    btnClassList += ` input-btn-large`;
    classList += ` input-text-large`;
  }

  if (type === "number") {
    numClassList += ` form-input-number`;
    btnClassList += ` div-as-btn-number`;
    classList += ` input-number`;
  }

  // if (props.hasOwnProperty("medium")) {
  //   console.log("true yes");
  //   classList += ` input-medium`; // Note space at beginning of string
  // }

  if (type === "email") {
    return (
      <form>
        <label for={id}> {labelText}</label>
        <input type={type} className={classList} placeholder={placeText} />
      </form>
    );
  } else if (type === "text") {
    return (
      <form className={formClassList}>
        <input
          id={id}
          className={classList}
          type={type}
          name={name}
          placeholder={placeText}
        />
        <button className={btnClassList}>{buttonText}</button>
      </form>
    );
  } else if (type === "number") {
    return (
      <form className={numClassList}>
        <div className={btnClassList}>
          <Plus />
        </div>
        <input
          id={id}
          className={classList}
          type={type}
          min={min}
          max={max}
          step={step}
          placeholder={value}
          name={name}
        />
        <div className={btnClassList}>
          <Minus />
        </div>
      </form>
    );
  } else {
    return null;
  }
};

export default Input;

// onClick=props.whenClicked()
