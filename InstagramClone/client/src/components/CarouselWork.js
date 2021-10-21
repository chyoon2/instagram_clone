import faker from "faker";
import "../css/Carousel.css";
import { data } from "../data";
import CarouselDisplay from "./CarouselDisplay";

const CarouselWork = () => {
  const FakerArray = data.map((key) => ({
    id: key.id,
    name: faker.name.firstName(),
    jpeg: faker.image.avatar(),
  }));
  console.log(FakerArray);

  return (
    <div>
      <CarouselDisplay data={FakerArray} />
    </div>
  );
  // useEffect(() => {
  //   const FakerArray = data.map((key) => ({
  //     id: key.id,
  //     name: faker.name.firstName(),
  //     jpeg: faker.image.avatar(),
  //   }));
  // }, []);

  // const compReturn = FakerArray.map((el) => {
  //   return <div>"hello"</div>;
  // });
};

export default CarouselWork;
// const FakerArray = data.map((key) => ({
//   id: key.id,
//   name: faker.name.firstName(),
//   jpeg: faker.image.avatar(),
// }));
// console.log(FakerArray);
