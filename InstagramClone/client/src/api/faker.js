import faker from "faker";

export const avatar = () => {
  return (
    <div>
      <img alt='avatar' src={faker.image.avatar()} />
    </div>
  );
};
