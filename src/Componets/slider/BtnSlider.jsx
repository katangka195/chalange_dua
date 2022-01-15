import React from "react";
import nextArrow from "./icons/nextArrow.svg";
import prevArrow from "./icons/prevArrow.svg";

function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={`${direction === "next" ? "btn-slider next" : "btn-slide prev"} sm:hidden `}>
      <img src={direction == "next" ? nextArrow : prevArrow} />
    </button>
  );
}

export default BtnSlider;
