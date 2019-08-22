export const actionTypes = {
  GET_RECIPE: "GET_RECIPE",
  GET_RECIPE_SUCCESS: "GET_RECIPE_SUCCESS",
  GET_RECIPE_FAIL: "GET_RECIPE_FAIL"
};


export const getRecipe = (id) => ({
  type: actionTypes.GET_RECIPE,
  id
});

export const getRecipeSuccess = data => ({
  type: actionTypes.GET_RECIPE_SUCCESS,
  data
});

export const getRecipeFail = message => ({
  type: actionTypes.GET_RECIPE_FAIL,
  error: message
});


/*
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
        dispatch({ type: actionTypes.RECIPE_FAIL, error: error.message });
      });
    } else {
      dispatch({ type: actionTypes.RECIPE_FAIL, error: error.message });
    }
  });
};
*/
