import { put, all } from "redux-saga/effects";

export function* homePageLoaded() {
  yield put({ type: "HOME_PAGE_LOADED" });
}

export function* rootSaga() {
  yield all([homePageLoaded()]);
}
