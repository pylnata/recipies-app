import React, { Component } from "react";
import { IShopItem } from "./types";

class PrintPage extends Component<{items: IShopItem[], customItems: IShopItem[]} , {}> {
  render() {
    const allItems = this.props.items.concat(this.props.customItems);
    return (
      <table style={{margin: '30px', width: "100%", fontSize: "20px"}}>
        <thead>
          <tr>
          <th>Amount</th>
          <th>Unit</th>
          <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {allItems.map((item, index) => <tr key={`${index}`}>
            <td>{item.amount}</td>
            <td>{item.unit}</td>
            <td>{item.name}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}


export { PrintPage };

export default PrintPage;
