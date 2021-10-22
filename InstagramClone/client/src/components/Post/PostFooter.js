import React from "react";
import faker from "faker";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const PostFooter = ({ type }) => {
  function renderContent(type) {
    switch (type) {
      case "views":
        const num = getRandomInt(10000);
        if (num > 999) {
          const strNum = num.toString().split("");
          strNum.splice(1, 0, ",");
          const lastStr = strNum.join("");

          return <div>Views {lastStr}</div>;
        } else {
          return <div>Views {num}</div>;
        }

      case "caption":
        return <div>Caption Bitch</div>;
      case "time":
        return <div>Time Bitch</div>;
      case "comments":
        return <div>comments Bitch</div>;
      default:
        console.log("dfook");
        break;
    }
  }
  return (
    <div style={{ float: "left" }}>
      <p style={{ float: "left" }}>{renderContent(type)}</p>
    </div>
  );
};

export default PostFooter;

// VIEWS
// USER NAME(SAME AS ABOVE) : description
// COMMENT: USER : description
//tIME
