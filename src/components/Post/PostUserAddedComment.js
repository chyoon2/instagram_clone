import React from "react";

const renderComments = (data) => {
  console.log(data.comments);
  // const way = Object.entries(data.comments);
  // console.log(way);
  const way = data.comments;
  const displayComment = way.map((key) => {
    return (
      <div style={{ justifySelf: "left", paddingBottom: "10px" }}>
        <span style={{ fontWeight: "bolder" }}>MyFutureEmployer</span>
        <span style={{ padding: "5px" }}>{key}</span>
      </div>
    );
  });
  return displayComment;
};

const PostUserAddedComment = ({ data }) => {
  return (
    <div style={{ float: "left" }}>
      <div
        style={{
          float: "left",
          paddingLeft: "10px",
          paddingTop: "3px",
          paddingBottom: "3px",
          display: "grid",
        }}>
        {renderComments(data)}
      </div>
    </div>
  );
};

export default PostUserAddedComment;
