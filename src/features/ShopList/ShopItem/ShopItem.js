import React, { useState, useEffect } from "react";

import "./ShopItem.scss";

const ShopItem = props => {
  const item = props.item;
  const amount = Math.round(item.amount * 10) / 10;
  const [value, updateValue] = useState(amount);

  useEffect(() => {
    updateValue(amount);
  }, [amount]);

  const onChangeHandler = event => {
    let newValue = event.target.value;
    var regexp = /^\d{0,3}(\.\d{0,1})?$/;
    if (regexp.test(newValue)) {
      updateValue(newValue);
    }
  };

  const onBlurHandler = event => {
    if (value !== "" && value !== "0") {
      props.update(Number(value));
    } else {
      updateValue(amount);
    }
  };

  return (
    <div className=" shop-item p-1 mb-2 d-flex align-items-center justify-content-between">
      <input
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        type="text"
        className="shop-item__amount-input"
      />{" "}
      <span>
        {item.unit} {item.name}
      </span>
      <i
        onClick={props.removeClicked}
        className="shop-item__remove fas fa-trash"
      />
    </div>
  );
};

export { ShopItem };

export default ShopItem;
