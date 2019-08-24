import { Observable, from } from "rxjs";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import "rxjs/add/observable/of";

import { ofType } from "redux-observable";

import { catchError, switchMap, map } from "rxjs/operators";

import * as api from "../../service/api";

import { actionTypes, searchSuccess, searchFail } from "./actions";

export const searchEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.SEARCH),
    switchMap(action =>
      from(api.getSearchResults(action.query, action.offset)).pipe(
        map(response => searchSuccess(response.data)),
        catchError(error => {
          if (error.needFakeData) {
            api.alwaysUseFakeNow();
            return from(api.getSearchResults("", 0, true)).map(response =>
              searchSuccess(response.data)
            );
          } else {
            return Observable.of(searchFail(error));
          }
        })
      )
    )
  );
