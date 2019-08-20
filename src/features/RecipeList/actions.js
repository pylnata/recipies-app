import * as api from "../../service/api";

export const actionTypes = {
  SEARCH_INIT: "SEARCH_INIT",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAIL: "SEARCH_FAIL"
};

const callApi = (query, offset, dispatch, useFake = false) => {
  return api.getSearchResults(query, offset, useFake).then(response => {
    dispatch({
      type: actionTypes.SEARCH_SUCCESS,
      data: response.data
    });
  });
};

export const search = (query, offset) => dispatch => {
  dispatch({ type: actionTypes.SEARCH_INIT });
  callApi(query, offset, dispatch).catch(error => {
    if (error.needFakeData) {
      // need use fake data
      callApi(query, offset, dispatch, true).catch(err => {
        dispatch({ type: actionTypes.SEARCH_FAIL, err: err });
      });
    } else {
      dispatch({ type: actionTypes.SEARCH_FAIL, error: error });
    }
  });
};
