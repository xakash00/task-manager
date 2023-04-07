import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./reducers/data";
import { watchGetJokesWorker } from "./jokeSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchGetJokesWorker);
