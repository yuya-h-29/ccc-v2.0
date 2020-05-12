import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [hasStarted, setHasStarted] = useState(false);
  function startCCC() {
    setHasStarted(true);
  }

  return (
    <div className="button-area">
      <div className="slideShowBtn btn">
        {hasStarted && (
          <button
            onClick={() => {
              props.previousSlide();
            }}
          >
            Go back
          </button>
        )}
        {hasStarted && (
          <button
            onClick={() => {
              props.nextSlide();
            }}
          >
            Next
          </button>
        )}
      </div>

      <div className="startBtn btn">
        {!hasStarted && (
          <button
            onClick={() => {
              startCCC();
              props.select5Slides();
            }}
          >
            Start CCC
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
