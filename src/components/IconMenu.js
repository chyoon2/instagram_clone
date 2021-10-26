import React from "react";
import "../css/IconMenuStyles.css";
import faker from "faker";

const styles = {
  circle: { borderRadius: "20px", maxWidth: "30px", maxHeight: "30px" },
};

const IconMenu = () => {
  return (
    <div className='bling'>
      <div className='item home'>
        <i className='fas fa-home fa-2x' />
      </div>
      <div className='item msg'>
        <i className='fab fa-facebook-messenger fa-2x' />
      </div>
      <div className='item compass'>
        <i className='fas fa-compass fa-2x' />
      </div>
      <div className='item heart'>
        <i className='far fa-heart fa-2x' />
      </div>
      <div className='pic'>
        <img style={styles.circle} alt='ima' src={faker.image.avatar()} />
      </div>
    </div>
  );
};

export default IconMenu;
