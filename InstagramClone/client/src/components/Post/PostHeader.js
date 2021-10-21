import React from "react";
import faker from "faker";

const styles = {
  circle: { borderRadius: "20px", maxWidth: "40px", maxHeight: "40px" },
};

const PostHeader = () => {
  return (
    <div className='container post-header'>
      <div className='userPic left'>
        <img style={styles.circle} alt='image' src={faker.image.avatar()} />
        <p className='right'>{faker.name.findName()}</p>
      </div>
    </div>
  );
};

export default PostHeader;
