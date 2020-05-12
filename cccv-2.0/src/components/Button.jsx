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
        {hasStarted && <button>Go back</button>}
        {hasStarted && <button>Next</button>}
      </div>

      <div className="startBtn btn">
        {/* <button
          onClick={() => {
            startCCC();
          }}
        >
          Start
        </button> */}
        {!hasStarted && (
          <button
            onClick={() => {
              startCCC();
              props.getPictures();
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
