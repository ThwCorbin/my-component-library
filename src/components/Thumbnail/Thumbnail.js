import React from "react";
import "./Thumbnail.css";
import Actions from "../Icon/Actions";
import Star from "../Icon/Star";
import StarFilled from "../Icon/StarFilled";
import CartCircle from "../Icon/CartCircle";
import HeartCircle from "../Icon/HeartCircle";
import ActionsClear from "../Icon/ActionsClear";
import imageMacPro from "../Icon/mac-pro.png";
import imageMacProGray from "../Icon/mac-pro-gray.png";
import imageBeats from "../Icon/beats.png";

const Thumbnail = (props) => {
  // Declare a classList variable and set it to an empty string
  let classList = "";

  if (props.small) {
    classList += ` button-small`; // Note initial empty space as we add to the string
  }

  if (props.icon === "heart") {
    classList += ` button-heart`; // Note initial empty space as we add to the string
  }

  return (
    <div className="container">
      <div className="div-img">
        <img src={imageMacPro} alt="MacBook Pro" />
      </div>
      <div className="div-details">
        <h5>Apple MacBook Pro</h5>
        <div className="stars">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <Star />
        </div>
        <div className="prices">
          <p className="priceRed">$499</p>
          <p className="priceGray">$599</p>
        </div>
      </div>
    </div>
  );
};
export default Thumbnail;

{
  /* <div>
<Actions />
<ActionsClear />

<CartCircle />
<HeartCircle />

<img src={imageMacProGray} alt="MacBook Pro" />
<img src={imageBeats} alt="Beats Solo 2" />
</div> */
}
