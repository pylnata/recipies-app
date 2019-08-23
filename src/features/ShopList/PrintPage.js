import React, { Component } from "react";

class PrintPage extends Component {
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
          {allItems.map(item => <tr key={`${item.id}-${item.unit}`}>
            <td>{item.amount}</td>
            <td>{item.unit}</td>
            <td>{item.name}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}

const memoPrintPage = React.memo(
  PrintPage,
  (prevProps, nextProps) =>
    nextProps.items === prevProps.items &&
    nextProps.children === prevProps.children
);

export { memoPrintPage as PrintPage };

export default PrintPage;
