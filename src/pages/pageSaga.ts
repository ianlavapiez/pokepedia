import { all, fork } from "redux-saga/effects";
import { homeSaga } from "./home/store/saga";

export function* pageSaga() {
  yield all([fork(homeSaga)]);
}
