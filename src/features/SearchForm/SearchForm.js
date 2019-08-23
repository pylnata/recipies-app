import React, { useState, useEffect, useContext, useRef } from "react";
import { Button, Form } from "reactstrap";

import { SearchContext } from "../../contexts/SearchContext";

import "./SearchForm.scss";

const SearchForm = props => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);
  const { updateQuery } = useContext(SearchContext);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.length > 1 && inputRef.current.value === value) {
        // user stop typing at least for 1000 ms
        if (value.length < 3) {
          setShowError(true);
        } else {
          setShowError(false);
          updateQuery(value);
        }
      }
    }, 1000);

    return ()=> {
      clearTimeout(timer);
    }
  }, [value, inputRef, updateQuery]);


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
    <Form method="post" className="d-flex align-items-start ml-3">
      <div className="d-flex flex-column justify-content-start search-form">
        <input
          type="text"
          placeholder="ex. pizza"
          className="mr-2 search-input border-0"
          ref={inputRef}
          value={value}
          onChange={onChangeHandler}
        /> <i className="fas fa-search i-search" onClick={onSubmitHandler} ></i>
        {showError && (
          <small className="ml-1">Need be at least 3 characters</small>
        )}
      </div>

    </Form>
  );
};

export { SearchForm };

export default SearchForm;
