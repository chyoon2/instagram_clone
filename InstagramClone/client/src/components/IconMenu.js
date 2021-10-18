import React from "react";
import tinypic from "../img/newUserPic.jpg";
import IconMenuCSS from "../css/IconMenu.css";
const styles = {
  circle: { borderRadius: "10px" },
};

const IconMenu = () => {
  return (
    <div className='bling'>
      <div className='item home'>
        <i className='fas fa-home fa-lg' />
      </div>

      <div className='item msg'>
        <i className='fab fa-facebook-messenger fa-lg' />
      </div>

      <div className='item compass'>
        <i className='fas fa-compass fa-lg' />
      </div>

      <div className='item heart'>
        <i class='far fa-heart fa-lg' />
      </div>

      <div className='pic'>
        <img style={styles.circle} src={tinypic} alt='profile' />{" "}
      </div>
    </div>
  );
};

export default IconMenu;
