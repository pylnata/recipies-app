import React, { useRef } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import ReactToPrint from "react-to-print";

import { removeItem, updateItem } from "./actions";
import ShopItem from "./ShopItem/ShopItem";
import PrintPage from "./PrintPage";

import "./ShopList.scss";

const ShopList = props => {
  const items = props.items;

  const componentRef = useRef();

  return (
    <div className="shop-list pr-3 pt-3">
      <h5>Shop List</h5>

      {!items.length && (
        <div className="text-secondary">Add items from recipe ingredients</div>
      )}

      {items.map(item => (
        <ShopItem
          key={`${item.id}-${item.unit}`}
          item={item}
          update={amount => props.updateItem(item, amount)}
          removeClicked={() => props.removeItem(item)}
        />
      ))}

      {items.length > 0 && (
        <div className="text-right">
          <ReactToPrint
            trigger={() => <Button color="success">Print</Button>}
            content={() => componentRef.current}
          />
          <div className="d-none">
            <PrintPage items={items} ref={componentRef} />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.shopList
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  updateItem: (item, amount) => dispatch(updateItem(item, amount))
});

const connectedShopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList);

export { connectedShopList };

export default connectedShopList;
