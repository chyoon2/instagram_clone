import React from "react";

const styles = {
  text: {
    alignSelf: "center",
    fontWeight: "900",
    fontSize: "17px",
    color: "blue",
  },
  option: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "blue",
  },
};

const Button = (prop) => {
  return <div style={styles.text}>{prop.text}</div>;
};

export default Button;
