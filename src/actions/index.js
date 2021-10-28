import { CREATE_COMMENT } from "./types";

export const createComment = (value) => {
  const termy = value.description;
  const number = value.placing;
  const dam = { place: number, desc: termy };

  return {
    type: CREATE_COMMENT,
    payload: dam,
  };
};
