import React from "react";
import "./Menu.css";

const Menu = (props) => {
  let { name, options, medium, large, filled } = props;
  let classList = "";
  let selectText = `  Select`;
  // let optionsArr = options.split(",");
  // let optionElems = "";

  // optionsArr.forEach((option) => {
  //   return (optionElems += <option>option</option>);
  // });

  if (medium) {
    classList += ` menu-medium`; // Note space at beginning of string
  }

  if (large) {
    classList += ` menu-large`; // Note space at beginning of string
  }

  if (filled) {
    classList += ` menu-filled`; // Note space at beginning of string
  }

  return (
    <div>
      <select required className={classList} name={name}>
        <option value="" disabled selected hidden>
          {selectText}
        </option>
        {/* {optionElems} */}
      </select>
    </div>
  );
}; // Menu

// For <select> <option> attributes, see https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
export default Menu;
