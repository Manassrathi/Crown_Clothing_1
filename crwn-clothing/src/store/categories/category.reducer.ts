import { CATEGORIES_ACTION_TYPES, Category } from './category.types';
import { AnyAction } from 'redux';
import { CategoryAction, FetchCategoriesStart, FetchCategoriesSuccess, FetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure} from './category.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if(fetchCategoriesStart.match(action)){
    return { ...state, isLoading: true};
  }
  if(fetchCategoriesSuccess.match(action)){
    return { ...state, isLoading: false, categories: action.payload };
  }
  if(fetchCategoriesFailure.match(action)){
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};