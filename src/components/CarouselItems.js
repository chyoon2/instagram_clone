import "../css/Carousel.css";

const CarouselItems = (prop) => {
  return (
    <div className='avatarCard'>
      <div>
        <img className='avatarPic' alt='avatar' src={prop.Pic} />
        <p className='avatarName'>{prop.Name}</p>
      </div>
    </div>
  );
};

export default CarouselItems;
