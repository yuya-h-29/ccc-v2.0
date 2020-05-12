import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <div>
      {props.slides.map((url) => {
        return <img src={url} alt="img" className="img" />;
      })}
    </div>
  );
};

export default Image;
