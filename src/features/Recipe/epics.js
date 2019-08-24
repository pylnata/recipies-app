import { Observable, from } from "rxjs";
import "rxjs/add/observable/of";
import { ofType } from "redux-observable";

import { catchError, switchMap, map } from "rxjs/operators";

import * as api from "../../service/api";

import { actionTypes, getRecipeSuccess, getRecipeFail } from "./actions";

export const getRecipeEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.GET_RECIPE),
    switchMap(action =>
      from(api.getRecipe(action.id)).pipe(
        map(response => getRecipeSuccess(response.data)),
        catchError(error => {
          if (error.needFakeData) {
            //api.alwaysUseFakeNow();
            return from(api.getRecipe(601651, true)).map(response =>
              getRecipeSuccess(response.data)
            );
          } else {
            return Observable.of(getRecipeFail(error));
          }
        })
      )
    )
  );
