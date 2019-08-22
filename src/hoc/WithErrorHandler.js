import React from "react";

import Modal from "../views/Modal/Modal";
import useHttpErrorHandler from "../hooks/http-error-handler";
import axios from "../axios-recipies";

const WithErrorHandler = props => {
  const [error, clearError, usedCalls] = useHttpErrorHandler(axios);

  const usedCallsDisplay = Number(usedCalls).toFixed(2);

  return (
    <>
      <Modal show={error} modalClosed={clearError}>
        {error ? error.message : null}
      </Modal>

      {usedCallsDisplay > 0 && (
        <div
          className="apistat"
          title="shows how many calls used of day's limit at api https://spoonacular.com"
        >
          Api: {usedCallsDisplay} of 150 used
        </div>
      )}

      {props.children}
    </>
  );
};

export default WithErrorHandler;
