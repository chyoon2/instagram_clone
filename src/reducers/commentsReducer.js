import { CREATE_COMMENT } from "../actions/types";
import INITIAL_STATE from "./initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  if (action.type === CREATE_COMMENT) {
    return {
      ...state,
      [action.payload.place]: {
        ...state[action.payload.place],
        comments: [
          ...state[action.payload.place].comments,
          action.payload.desc,
        ],
      },
    };
  } else {
    return state;
  }
};
