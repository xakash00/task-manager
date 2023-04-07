import { UPDATE_OFFSET } from "./reducers/data";
export const FETCH_API_DATA = "FETCH_API_DATA";
export const GET_JOKES = "GET_JOKES";


export const getJokeAction = (loadMore, count) => {
  return {
    type: GET_JOKES,
    loadMore,
    count,
  };
};
export const updateOffset = (offset) => {
  return {
    type: UPDATE_OFFSET,
    offset,
  };
};
