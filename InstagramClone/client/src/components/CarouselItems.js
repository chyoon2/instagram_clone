import faker from "faker";
import "../css/Carousel.css";

export const avatar = () => {
  return (
    <div className='avatarCard'>
      <div>
        <img className='avatarPic' alt='avatar' src={faker.image.avatar()} />
        <p className='avatarName'>{faker.name.firstName()}</p>
      </div>
    </div>
  );
};
