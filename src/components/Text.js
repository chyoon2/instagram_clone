import React from "react";

const style = {
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr",
    float: "left",
  },
};

const text = () => {
  return (
    <div style={style.container}>
      <div
        style={{
          paddingLeft: "14px",
          fontSize: "15px",
          fontWeight: "bolder",
          color: "gray",
        }}>
        Suggestions For You
      </div>
      <div
        style={{
          justifySelf: "right",
          paddingRight: "8px",
          fontSize: "15px",
          fontWeight: "bolder",
          color: "gray",
          paddingBottom: "8px",
        }}>
        See All
      </div>
    </div>
  );
};

export default text;
