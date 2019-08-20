import * as api from "../../service/api";

export const actionTypes = {
  RECIPE_INIT: "RECIPE_INIT",
  RECIPE_SUCCESS: "RECIPE_SUCCESS",
  RECIPE_FAIL: "RECIPE_FAIL"
};

const callApi = (id, dispatch, useFake = false) => {
  return api.getRecipe(id, useFake).then(response => {
    dispatch({
      type: actionTypes.RECIPE_SUCCESS,
      data: response.data
    });
  });
};

export const getRecipe = id => dispatch => {
  dispatch({ type: actionTypes.RECIPE_INIT });

  callApi(id, dispatch).catch(error => {
    if (error.needFakeData) {
      callApi(id, dispatch, true).catch(error => {
        dispatch({ type: actionTypes.RECIPE_FAIL, error });
      });
    } else {
      dispatch({ type: actionTypes.RECIPE_FAIL, error: error });
    }
  });
};
