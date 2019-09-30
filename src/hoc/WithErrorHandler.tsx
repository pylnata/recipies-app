import React from "react";

import Modal from "../views/Modal/Modal";
import useHttpErrorHandler from "../hooks/useHttpErrorHandler";
import axios from "../axios-recipies";

const WithErrorHandler:React.FC<{children: any}> = props => {
  const [error, clearError, usedCalls] = useHttpErrorHandler(axios);

  const usedCallsDisplay = Number(usedCalls).toFixed(2);

  return (
    <>
      <Modal show={error ? true : false} modalClosed={clearError}>
        {error ? error.message : null}
      </Modal>

      <div
        className="apistat"
        title={
          Number(usedCallsDisplay) > 0 ?
          "shows how many calls used of day's limit at api https://spoonacular.com" : ""
        }
      >

        {Number(usedCallsDisplay) > 0
          ? `Api: ${usedCallsDisplay} of 150 used`
          : `Fake data is used now`}
      </div>

      {props.children}
    </>
  );
};

export default WithErrorHandler;
