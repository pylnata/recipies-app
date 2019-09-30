import React from "react";
import { NavLink } from "react-router-dom";

import { IRecipe } from "../types";

import "./RecipeItem.scss";

const RecipeItem = ({recipe} : {recipe: IRecipe}) => {

  const imgUrl = `https://spoonacular.com/recipeImages/${recipe.id}-90x90.jpg`;

  return (
    <NavLink to={`/recipe/${recipe.id}`} activeClassName="active">
      <div className="recipe-item p-2  d-flex align-items-start justify-content-start flex-column flex-lg-row ">
        <img src={imgUrl} height="40" alt={recipe.title} />
        <div>
          {recipe.title}
          <span>{recipe.readyInMinutes} min</span>
        </div>
      </div>
    </NavLink>
  );
};

export { RecipeItem };
export default RecipeItem;
