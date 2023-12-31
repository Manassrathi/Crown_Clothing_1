import { takeLatest, all, call, put } from "typed-redux-saga";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesStartAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield* put(fetchCategoriesFailure(error as Error));
      }
};

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesStartAsync);
}  

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}