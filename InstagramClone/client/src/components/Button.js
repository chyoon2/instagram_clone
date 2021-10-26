import React from "react";

const Button = (prop) => {
  return (
    <div
      style={{
        fontSize: "15px",
        fontWeight: "bold",
        color: "blue",
      }}>
      {prop.text}
    </div>
  );
};

export default Button;
