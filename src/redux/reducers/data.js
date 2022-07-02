import { FETCH_API_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case FETCH_API_DATA:
      return data;
    default:
      return state;
  }
};
