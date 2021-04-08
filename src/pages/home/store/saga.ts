import { put, takeLatest } from "redux-saga/effects";
import { initialize } from "./actions";

export function* onInitialize() {
  try {
  } catch (error) {
    yield put(initialize.failure(error));
  }
}

export function* homeSaga() {
  yield takeLatest(initialize.request, onInitialize);
}
