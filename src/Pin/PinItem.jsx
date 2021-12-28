import React from "react";

const defaultStyle = {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem",
  fontSize: "20px",
  border: "1px solid blue"
};

const successDefaultStyle = {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem",
  color: "green",
  border: "1px solid green",
  backgroundColor: "rgb(226,233,231)",
  fontSize: "20px"
};

const PinItem = React.forwardRef(
  ({ length, handleChange, handleBackSpace, values }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e.code);
      switch (e.code) {
        case "Backspace": {
          handleBackSpace && handleBackSpace(e.target.value);
          break;
        }
        case "ShiftLeft":
        case "ShiftRight":
        case "Tab":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
          break;
        default: {
          handleChange(e.target.value);
        }
      }
    };
    return (
      <div>
        {values[values.length - 1] !== "" ? (
          <input
            ref={ref}
            maxLength={length}
            style={successDefaultStyle}
            onKeyUp={handleKeyUp}
          />
        ) : (
          <input
            ref={ref}
            maxLength={length}
            style={defaultStyle}
            onKeyUp={handleKeyUp}
          />
        )}
      </div>
    );
  }
);

export default PinItem;
