import React from "react";
import "./CardTwo.css";
import CardImage from "../Images/ram.jpg";

const CardTwo = () => {
  return (
    <div className="CardHold">
      <div className="Card">
        <div className="Image">
          <img src={CardImage} alt="" />
        </div>
        <div className="Content">
          <div className="Title">Amebo Business Center</div>
          <div className="SubTitle">All Of Business</div>
          <div className="Bottom">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
