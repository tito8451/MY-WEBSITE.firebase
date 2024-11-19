import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "../store/categories/category.saga";
import { userSagas } from "../store/user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
