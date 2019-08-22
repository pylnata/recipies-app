import { Observable, from } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";

import * as api from "../../service/api";

import {
  actionTypes as searchActionTypes,
  searchSuccess,
  searchFail
} from "./actions";

export const searchEpic = action$ =>
  action$
    .ofType(searchActionTypes.SEARCH)
    .switchMap(action => {
      return from(api.getSearchResults(action.query, action.offset)).map(
        response => response.data
      );
    })
    .map(data => searchSuccess(data))
    .catch(error => Observable.of(searchFail(error.message)));
