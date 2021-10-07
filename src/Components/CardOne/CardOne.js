import React from "react";
import "./CardOne.css";
import Img1 from "../Images/jjj.jpg";

const CardOne = () => {
  return (
    <div className="Body">
      <div className="BlogPost">
        <div className="BlogPostImg">
          <img src={Img1} alt="" />
        </div>
        <div className="BlogPostInfo">
          <div className="BlogPostDate">
            <span>Sunday</span>
            <span>October 20 2021</span>
          </div>
          <h1 className="BlogPostTitle"> Best Framework</h1>
          <p className="BlogPostText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          {/* <a href="#" className="BlogPostCTA">
            Read More
          </a> */}
        </div>
      </div>
      <div className="BlogPost">
        <div className="BlogPostImg">
          <img src={Img1} alt="" />
        </div>
        <div className="BlogPostInfo">
          <div className="BlogPostDate">
            <span>Sunday</span>
            <span>October 20 2021</span>
          </div>
          <h1 className="BlogPostTitle"> Best Framework</h1>
          <p className="BlogPostText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          {/* <a href="#" className="BlogPostCTA">
            Read More
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardOne;
