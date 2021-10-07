import React from "react";
import "./CardThree.css";
import Image1 from "../Images/img1.jpg";
import Image2 from "../Images/img2.jpg";
import Image3 from "../Images/img3.jpg";

const CardThree = () => {
  return (
    <div className="Body1">
      <div className="Container">
        <div className="Card1">
          <div className="ImgBox">
            <img src={Image1} alt="" />
          </div>
          <div className="Content1">
            <h2>Card1 One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>

        <div className="Card1">
          <div className="ImgBox">
            <img src={Image2} alt="" />
          </div>
          <div className="Content1">
            <h2>Card1 One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>

        <div className="Card1">
          <div className="ImgBox">
            <img src={Image3} alt="" />
          </div>
          <div className="Content1">
            <h2>Card1 One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
