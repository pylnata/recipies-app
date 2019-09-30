import React from "react";
import { IPropsCustomItems } from "../types";

const CustomItems:React.FC<IPropsCustomItems> = ({ items, removeCustomItem }) => {

  return (
    <div className="mt-3 custom-list" >
    <h6 >Additionally: </h6>
      {items.map((item, index) => (
      <div key={index} className="shop-item p-1 mb-2 d-flex align-items-center justify-content-between">
        {item.amount} <span className="ml-1 flex-1">{item.unit} {item.name}</span>
        <i className="shop-item__remove fas fa-trash" onClick={()=>removeCustomItem(index)} />
      </div>
      ))}
    </div>

  );
};

export default CustomItems;
