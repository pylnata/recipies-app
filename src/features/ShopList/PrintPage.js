import React, { Component } from "react";

class PrintPage extends Component {
  render() {

    console.log(this.props.items)
    console.log(this.props.customItems)
    console.log('---');
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
