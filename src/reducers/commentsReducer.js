import { CREATE_COMMENT } from "../actions/types";
// import INITIAL_STATE from "./INITITAL_STATE";

export const userData = [
  {
    id: 0,
    name: "rise_of_broccolini",
    avatar: "https://cdn.fakercloud.com/avatars/xiel_128.jpg",
    jpeg: "http://placeimg.com/640/480/nature",
    caption: "Whatever is good for your soul, do that",
    comments: [],
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = userData, action) => {
  if (action.type === CREATE_COMMENT) {
    return [
      ...state,
      [
        ...state[action.payload.place],
        comments: [
          ...state[action.payload.place].comments,
          action.payload.desc,
        ],
      ],
    ];
  } else {
    return state;
  }
};

// return {
//   ...state,
//   [action.payload.place]: {
//     ...state[action.payload.place],
//     comments: [
//       ...state[action.payload.place].comments,
//       action.payload.desc,
//     ],
//   },
// };
