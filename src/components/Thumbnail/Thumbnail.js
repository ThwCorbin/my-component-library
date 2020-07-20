import React from "react";
import "./Thumbnail.css";
import Actions from "../Icon/Actions";
import ActionsClear from "../Icon/ActionsClear";
import Star from "../Icon/Star";
import StarFilled from "../Icon/StarFilled";
import imageMacPro from "../Icon/mac-pro.png";
import imageBeats from "../Icon/beats.png";
// import Cart from "../Icon/Cart";
// import Heart from "../Icon/Heart";
import Button from "../Button/Button";

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
      <div className="container-overall-inline">
        <div className={classListContainer}>
          <div className="div-hot">
            <p>HOT</p>
          </div>
          <div className={classListDivImg}>
            <img src={imageMacPro} alt="MacBook Pro" />
          </div>
        </div>

        <div className="div-details div-details-inline">
          <h5 className="product-name">Apple MacBook Pro</h5>
          <div className="inline-details-stars-reviews">
            <div className="stars">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <Star />
            </div>
            <p className="reviews">0 reviews</p>
            <p className="reviews-submit">Submit a review</p>
          </div>
          <div className="prices">
            <p className="priceRed">$499</p>
            <p className="priceGray">$599</p>
          </div>
          <div className="div-sales-text">
            <p className="p-sales-text">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
              leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
              nisl ut dolor.
            </p>
          </div>
          <div className="div-buttons">
            <Button
              type="user-input"
              rectangle
              icon="cart"
              label="Add to Cart"
            />
            <Button type="user-input" square icon="heart" />
            {/* <button className="div-button-rectangle-cart">
              <Cart />
              <span>Add to favorites</span>
            </button>
            <button className="div-button-square-heart">
              <Heart />

            </button> */}
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
