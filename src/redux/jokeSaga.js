import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, FETCH_API_DATA, recieveApiData } from "./actions";
import { fetchData } from "./api";

export function* fetchApiDataWorker(action) {
  try {
    const data = yield call(fetchData);
    if (data.error === false) {
      yield action.onSuccess(data);
    console.log(data);

    } else {
      yield action.onError("Something went Wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchApiDataWorker() {
  yield takeLatest(REQUEST_API_DATA, fetchApiDataWorker);
}
