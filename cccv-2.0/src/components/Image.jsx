import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <div>
      <div>
        <img src={props.slides[props.slideIdx]} alt="img" className="img" />
      </div>
    </div>
  );
};

export default Image;
