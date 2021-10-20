import faker from "faker";
import "../css/Carousel.css";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { data } from "../data";

function pushFaker() {
 
}

const CarouselItems = (data) => {
  const [Array, setArray] = useState(null);

  useEffect(() => {
    const FakerArray = data.map((key) => ({
      id: key.id,
      name: faker.name.firstName(),
      jpeg: faker.image.avatar(),
    }));
    
  }, [data]);

  const compReturn = FakerArray.map((el)=>{
    return (
      <div className='avatarCard'>
      <div>
        <img className='avatarPic' alt='avatar' src={el.jpeg} />
        <p className='avatarName'>{el.name}</p>
      </div>
    </div>
    );
  }

export default CarouselItems;

// // const [avatar, setAvatar] = this.state(null);
// if (FakerArray.Length > 14) {
//   setArray();
//   console.log("hihihi");
//   console.log(Array);
//   return <Loading />;
// } else {
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// pushFaker();
// // console.log("where are you?");
// <div className='avatarCard'>
// <div>
//   <img className='avatarPic' alt='avatar' src={faker.image.avatar()} />
//   <p className='avatarName'>{faker.name.firstName()}</p>
// </div>
// </div>