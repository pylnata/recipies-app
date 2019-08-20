import React from "react";

const Ingredient = props => {
  const ingredient = props.ingredient;

  const amount = Math.round(ingredient.measures.us.amount * 10) / 10;

  return (
    <div className="d-flex align-items-center p-1 m-1" onClick={props.clicked}>
      <i
        title="Add to Shop List"
        className="fas fa-cart-arrow-down mr-2 d-inline-block"
      />
      {amount} {ingredient.measures.us.unitShort} {ingredient.name}
    </div>
  );
};

export default Ingredient;
