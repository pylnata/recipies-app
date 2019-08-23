import React, { useEffect } from "react";
import { UncontrolledCollapse, Badge, Spinner } from "reactstrap";
import { connect } from "react-redux";

import { getRecipe } from "./actions";
import Ingredients from "./Ingredients/Ingredients";
import LikeButton from "../Likes/LikeButton";

import  useTraceUpdated  from "../../hooks/useTraceUpdated";

import "./Recipe.scss";

const Recipe = props => {
  let recipeId = props.match.params.recipe_id;
  if (!recipeId) recipeId = 559251;
  const { isLoading, error, recipe, getRecipe } = props;

  useTraceUpdated(props, "Recipe");

  useEffect(() => {
    if (recipeId) {
      getRecipe(recipeId);
    }
  }, [recipeId, getRecipe]);

  if (isLoading) {
    return (
      <div className="recipe bg-white mr-3 ml-3 p-3">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="recipe bg-white mr-3 ml-3 p-3">{error.message}</div>;
  }

  if (!recipe || !recipe.id) return null;

  const steps = recipe.analyzedInstructions[0]
    ? recipe.analyzedInstructions[0].steps
    : null;
  let stepsResult = null;

  if (steps) {
    stepsResult = (
      <div className="align-self-start m-0 p-3">
        <span id="toggler" className="toggler mb-0">
          See instructions
        </span>
        <UncontrolledCollapse toggler="#toggler">
          <ol className="m-0 p-3 ">
            {recipe.analyzedInstructions[0].steps.map(item => (
              <li key={item.number}>{item.step}</li>
            ))}
          </ol>
        </UncontrolledCollapse>
      </div>
    );
  }

  return (
    <div className="recipe bg-white mr-3 ml-3 p-3">
      <div className="d-flex justify-content-between align-items-start">
        <h4 className="mb-3">{recipe.title}</h4>
        <LikeButton recipe={recipe} />
      </div>

      <div className="d-flex flex-column justify-start align-items-start">
        <div className="d-flex align-items-start flex-column flex-lg-row ">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="mr-3 mb-2 main-img"
          />
          <div>
            <ul className="list-unstyled">
              <li>
                Servings: <strong>{recipe.servings}</strong>
              </li>
              <li>
                Preparation time: <strong>{recipe.preparationMinutes}</strong>{" "}
                min
              </li>
              <li>
                Cooking time: <strong>{recipe.readyInMinutes}</strong> min
              </li>
            </ul>
            {recipe.diets.map(value => (
              <Badge key={value} className="mr-1" color="secondary">
                {value}
              </Badge>
            ))}
          </div>
        </div>
        {stepsResult}
      </div>
      <div>
        <Ingredients ingredients={recipe.extendedIngredients} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ recipe }) => ({
  recipe: recipe.data,
  isLoading: recipe.isLoading,
  error: recipe.error
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(getRecipe(id))
});

const connectedRecipe = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);

export { connectedRecipe as Recipe };

export default connectedRecipe;
