import React, { useState, useEffect } from "react";
import "./Item.scss";
import { IShopItem } from "../types";

const ShopItem: React.FC<{
  item: IShopItem;
  updateItem: any;
  removeItem: any;
}> = ({ item, updateItem, removeItem }) => {
  const amount = item.amount;
  const [value, updateValue] = useState(Number(amount));

  useEffect(() => {
    updateValue(amount);
  }, [amount]);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let newValue = event.currentTarget.value;
    var regexp = /^\d{0,3}(\.\d{0,1})?$/;
    if (regexp.test(newValue)) {
      updateValue(Number(newValue));
    }
  };

  const onBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (value !== 0) {
      updateItem(item, value);
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
        onClick={() => removeItem(item)}
        className="shop-item__remove fas fa-trash"
      />
    </div>
  );
};

export { ShopItem };

export default ShopItem;
