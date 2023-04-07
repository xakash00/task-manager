import { call, put, takeLatest } from "redux-saga/effects";

import { GET_JOKES } from "./actions";
import { fetchData } from "./api";
import { LOADING, SET } from "./reducers/data";

function* getJokesWorker(action) {
  try {
    yield put({ type: LOADING });
    const response = yield call(fetchData);
    yield put({ type: SET, data: response.jokes });
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetJokesWorker() {
  yield takeLatest(GET_JOKES, getJokesWorker);
}
