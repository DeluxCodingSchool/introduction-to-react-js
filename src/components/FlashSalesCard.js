import React from "react";
import "../assets/css/flashSalesCard.css";

const FlashSalesCard = () => {
  return (
    <div className="flash-container">
      <div className="card-img">
        <img src="/images/flash-1.jpg" alt="" />
        <span>-43%</span>
      </div>

      <div className="card-details">
        <p>Ace Elec 20000 MAh Ultr...</p>
        <h2># 8,500</h2>
        <p># 15,000</p>

        <p>79n items left</p>
        <input type="range" />
      </div>
    </div>
  );
};

export default FlashSalesCard;
