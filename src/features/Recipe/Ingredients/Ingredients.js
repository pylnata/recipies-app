import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../ShopList/actions";
import Ingredient from "./Ingredient";

import "./Ingredients.scss";

const Ingredients = props => {

  const dispatch = useDispatch();
  const addItemToShopList = item => dispatch(addItem(item));

  const onClickHandler = item => {
    const shopItem = {
      id: item.id,
      name: item.name,
      unit: item.measures.us.unitShort,
      amount: item.measures.us.amount
    };
    addItemToShopList(shopItem);
  };

  return (
    <div className="recipe-ings d-flex flex-wrap flex-row   ">
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          clicked={() => onClickHandler(ingredient)}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
};


export default Ingredients;
