import React from "react";
import "./Thumbnail.css";
import Actions from "../Icon/Actions";
import ActionsClear from "../Icon/ActionsClear";
import Star from "../Icon/Star";
import StarFilled from "../Icon/StarFilled";
import imageMacPro from "../Icon/mac-pro.png";
import imageBeats from "../Icon/beats.png";

const Thumbnail = (props) => {
  const { input, gray, horizontal, inline, beats } = props;

  let classListContainer = `container`;
  let classListDivImg = `div-img`;

  if (gray) {
    classListContainer += ` container-gray`; // Note initial empty space as we add to the string
  }

  if (horizontal) {
    classListContainer += ` container-horizontal`; // Note initial empty space as we add to the string
  }

  if (input) {
    classListDivImg += ` div-img-input`; // Note initial empty space as we add to the string
  }

  if (beats) {
    classListContainer += ` container-beats`;
  }

  if (inline) {
    classListContainer += ` container-inline`;
  }

  if (input && gray) {
    return (
      <div className={classListContainer}>
        <div className={classListDivImg}>
          <img src={imageMacPro} alt="MacBook Pro" />
          <div className="actions">
            <Actions />
          </div>
        </div>
        <div className="div-details">
          <h5 className="product-name">Apple MacBook Pro</h5>
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
  } else if (input) {
    return (
      <div className={classListContainer}>
        <div className={classListDivImg}>
          <img src={imageMacPro} alt="MacBook Pro" />
          <div className="actions">
            <ActionsClear />
          </div>
        </div>
        <div className="div-details">
          <h5 className="product-name">Apple MacBook Pro</h5>
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
  } else if (beats) {
    return (
      <div className={classListContainer}>
        <div className={classListDivImg}>
          <img src={imageBeats} alt="Beats Solo 2" />
        </div>
        <div className="div-details">
          <h5 className="product-name">
            Beats Solo 2 On Ear<br></br>Headphones - Black{" "}
          </h5>

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
  } else if (inline) {
    return (
      <div>
        <div className={classListContainer}>
          <div className="div-hot">
            <p>HOT</p>
          </div>
          <div className={classListDivImg}>
            <img src={imageMacPro} alt="MacBook Pro" />
          </div>
        </div>

        <div className="div-details">
          <h5 className="product-name">Apple MacBook Pro</h5>
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
  } else {
    return (
      <div className={classListContainer}>
        <div className={classListDivImg}>
          <img src={imageMacPro} alt="MacBook Pro" />
        </div>
        <div className="div-details">
          <h5 className="product-name">Apple MacBook Pro</h5>
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
  } // default else
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
