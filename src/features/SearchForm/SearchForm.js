import React, { useState, useContext } from "react";
import { Button, Form } from "reactstrap";

import { SearchContext } from "../../contexts/SearchContext";

import "./SearchForm.scss";

const SearchForm = props => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);
  const { updateQuery } = useContext(SearchContext);

  const onSubmitHandler = event => {
    event.preventDefault();
    if (value.length < 3) {
      setShowError(true);
      return false;
    } else {
      setShowError(false);
      updateQuery(value);
    }
  };

  const onChangeHandler = event => {
    const newValue = event.target.value;
    if (newValue.length > 3) {
      setShowError(false);
    }
    setValue(newValue);
  };

  return (
    <Form onSubmit={onSubmitHandler} className="d-flex align-items-start ml-3">
      <div className="d-flex flex-column justify-content-start">
        <input
          type="text"
          placeholder="ex. pizza"
          className="mr-2 search-input border-0"
          value={value}
          onChange={onChangeHandler}
        />
        {showError && (
          <small className="ml-1">Need be at least 3 characters</small>
        )}
      </div>
      <Button color="success" className="search-btn">
        <i className="fas fa-search" />
      </Button>
    </Form>
  );
};

export { SearchForm };

export default SearchForm;
