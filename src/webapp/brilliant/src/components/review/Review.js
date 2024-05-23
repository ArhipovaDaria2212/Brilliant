import React from "react";

import star from "./../../assets/icons/stars/1.png"

import './Review.scss'

function Review({stars, title, text, category}) {

  const starsArray = Array.from({ length: stars }, (v, i) => i); // Create an array with the length of 'stars'

  const items = starsArray.map((index) => (
      <>
        <img src={star} alt="" className="star" />
      </>
  ));


    return <div>
      <div className="reviews__item">
        <div className="rewiews__stars">
          {items}
        </div>
        <h3 className="title">{title}</h3>
        <p className="text">
          {text}
        </p>
        <div className="category">{category}</div>
      </div>
    </div>;

}

export default Review;
