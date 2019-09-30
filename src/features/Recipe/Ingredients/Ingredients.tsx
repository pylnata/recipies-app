import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../ShopList/actions";
import { IIngredient } from "../types";
import {IShopItem } from "../../ShopList/types";
import Ingredient from "./Ingredient";


import "./Ingredients.scss";

const Ingredients:React.FC<{ingredients: Array<IIngredient>}> = ({ingredients}) => {

  const dispatch = useDispatch();
  const addItemToShopList = (item:IShopItem) => dispatch(addItem(item));

  const onClickHandler= (item: IIngredient):void => {
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
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          clicked={onClickHandler}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
};


export default Ingredients;
