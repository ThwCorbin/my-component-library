import React from "react";
import "./Input.css";

const Input = (props) => {
  let { id, type, name, medium, large, label, placeholder } = props;
  let labelText = "";
  let placeText = "";
  let classList = "";

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

  if (props.hasOwnProperty("medium")) {
    console.log("true yes");
    classList += ` input-medium`; // Note space at beginning of string
  }

  if (large) {
    classList += ` input-large`; // Note space at beginning of string
  }

  return (
    <form>
      <label for={id}> {labelText}</label>
      <input
        id={id}
        className={classList}
        type={type}
        name={name}
        placeholder={placeText}
      />
    </form>
  );
};

export default Input;

// onClick=props.whenClicked()
