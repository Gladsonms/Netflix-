import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">movie name</h1>
        <div className="bannner-button">
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="discription">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
