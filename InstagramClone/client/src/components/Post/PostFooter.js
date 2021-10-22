import React from "react";
import faker from "faker";
import { timeArr } from "../../data";
// import { commentData } from "../../data";

const PostFooter = ({ type, data }) => {
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
    return timeArr[num];
  }

  function renderContent(type) {
    switch (type) {
      case "views":
        return <div>Likes {getNum()}</div>;
      case "caption":
        return (
          <div>
            <span style={{ fontWeight: "bolder" }}>{data.name}</span>
            <span style={{ paddingLeft: "5px" }}>{data.caption}</span>
          </div>
        );
      case "time":
        return (
          <div>
            <span style={{ fontSize: "10px", color: "lightgrey" }}>
              {getTime()}
            </span>
          </div>
        );
      case "comments":
        return (
          <div>
            <span style={{ fontWeight: "bolder" }}>
              {faker.name.firstName()}
            </span>
            <span style={{ paddingLeft: "5px" }}>{faker.lorem.words()}</span>
          </div>
        );
      default:
        console.log("dfook");
        break;
    }
  }
  return (
    <div style={{ float: "left" }}>
      <p
        style={{
          float: "left",
          paddingLeft: "10px",
          paddingTop: "3px",
          paddingBottom: "3px",
        }}>
        {renderContent(type)}
      </p>
    </div>
  );
};

export default PostFooter;

// USER NAME(SAME AS ABOVE) : description
// COMMENT: USER : description
//tIME
