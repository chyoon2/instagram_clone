import React from "react";
import faker from "faker";

const PostFooter = ({ type }) => {
  function getNum() {
    const num = Math.floor(Math.random() * 1000);
    if (num > 999) {
      const strNum = num.toString().split("");
      strNum.splice(1, 0, ",");
      const lastStr = strNum.join("");
      return lastStr;
    } else {
      return num;
    }
  }
  function getTime() {
    const num = Math.floor(Math.random() * 11);
    const timeArr = [
      "8 HOURS AGO",
      "10 HOURS AGO",
      "14 HOURS AGO",
      "12 HOURS AGO",
      "2 HOURS AGO",
      "3 HOURS AGO",
      "4 HOURS AGO",
      "1 DAY AGO",
      "2 DAYS AGO",
      "6 HOURS AGO",
      "5 HOURS AGO",
      "11 HOURS AGO",
    ];
    return timeArr[num];
  }

  function renderContent(type) {
    switch (type) {
      case "views":
        return <div>Likes {getNum()}</div>;
      case "caption":
        return <div>Caption Bitch</div>;
      case "time":
        return <div>{getTime()}</div>;
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

// USER NAME(SAME AS ABOVE) : description
// COMMENT: USER : description
//tIME
