import React from "react";

import Modal from "../views/Modal/Modal";
import useHttpErrorHandler from "../hooks/http-error-handler";
import axios from "../axios-recipies";

const withErrorHandler = WrappedComponent => {
  return props => {
    const [error, clearError, usedCalls] = useHttpErrorHandler(axios);

    const usedCallsDisplay = Number(usedCalls).toFixed(2);

    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} usedCalls={usedCallsDisplay} />
      </>
    );
  };
};

export default withErrorHandler;
