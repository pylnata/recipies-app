import { Observable, from } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import * as api from "../../service/api";

import {
  actionTypes,
  getRecipeSuccess,
  getRecipeFail
} from "./actions";

export const getRecipeEpic = (action$) => {
  return action$
      .ofType(actionTypes.GET_RECIPE)
      .switchMap((action) => {
          return from(api.getRecipe(action.id)).map(response => response.data)
      })
      .map(data => getRecipeSuccess(data))
      .catch(error => Observable.of(getRecipeFail(error.message)))
}
