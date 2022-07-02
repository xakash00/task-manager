export const REQUEST_API_DATA = "FETCH_API_DATA";
export const FETCH_API_DATA = "FETCH_API_DATA";

export const requestApiData = (onSuccess, onError) => ({
  type: REQUEST_API_DATA,
  onSuccess,
  onError,
});
export const recieveApiData = (data, onSuccess, onError) => ({
  type: FETCH_API_DATA,
  data,
  onSuccess,
  onError,
});
