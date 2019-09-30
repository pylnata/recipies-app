import React from "react";
import { UncontrolledCollapse, Badge, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "../../hooks/react-redux";

import { getRecipe } from "./actions";
import Ingredients from "./Ingredients/Ingredients";
import LikeButton from "../Likes/LikeButton";

import { IRecipeState } from "./types";
import "./Recipe.scss";

const Recipe:React.FC = (props: any) => {
  let recipeId = props.match.params.recipe_id;
  if (!recipeId) recipeId = 559251;

  const dispatch = useDispatch();


  const { data, isLoading, error } = useSelector(
    ({ recipe }: { recipe: IRecipeState }) => ({
      data: recipe.data,
      isLoading: recipe.isLoading,
      error: recipe.error
    })
  ) as IRecipeState;


  React.useEffect(() => {
    if (recipeId) {
      dispatch(getRecipe(recipeId));
    }
  }, [recipeId, dispatch]);

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


  if (!data || !data.id) return null;

  const steps = data.analyzedInstructions[0]
    ? data.analyzedInstructions[0].steps
    : null;
  let stepsResult = null;

  if (steps) {
    stepsResult = (
      <div className="align-self-start m-0 p-3">
        <span id="toggleLink" className="toggler mb-0">
          See instructions
        </span>

        <UncontrolledCollapse toggler="#toggleLink">
          <ol className="m-0 p-3 ">
            {data.analyzedInstructions[0].steps.map(item => (
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
        <h4 className="mb-3">{data.title}</h4>
        <LikeButton recipe={data} />
      </div>

      <div className="d-flex flex-column justify-start align-items-start">
        <div className="d-flex align-items-start flex-column flex-lg-row ">
          <img
            src={data.image}
            alt={data.title}
            className="mr-3 mb-2 main-img"
          />
          <div>
            <ul className="list-unstyled">
              <li>
                Servings: <strong>{data.servings}</strong>
              </li>
              <li>
                Preparation time: <strong>{data.preparationMinutes}</strong> min
              </li>
              <li>
                Cooking time: <strong>{data.readyInMinutes}</strong> min
              </li>
            </ul>
            {data.diets.map(value => (
              <Badge key={value} className="mr-1" color="secondary">
                {value}
              </Badge>
            ))}
          </div>
        </div>
        {stepsResult}
      </div>
      <div>
        <Ingredients ingredients={data.extendedIngredients} />
      </div>
    </div>
  );
};

export { Recipe };

export default Recipe;
