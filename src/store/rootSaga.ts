import { all, fork } from "redux-saga/effects";
import { pageSaga } from "../pages/pageSaga";

export function* rootSaga() {
  yield all([fork(pageSaga)]);
}
