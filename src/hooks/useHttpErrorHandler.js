import { useEffect, useReducer } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
    case "REQUEST":
      return { ...state, error: null};
      case "RESPONSE":
      return { ...state, usedCalls: action.usedCalls};
      case "ERROR":
      return { ...state, error: action.error};
    default:
      throw Error("Should not be reached!")
  }
};

export default httpClient => {
  const [httpState, dispatch] = useReducer(httpReducer, { error: null, usedCalls: 0 });
  const reqInterceptor = httpClient.interceptors.request.use(req => {
    dispatch({type: "REQUEST"})
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    res => {
      if (res.headers["x-api-quota-used"] > 0) {
        const usedCalls = res.headers["x-api-quota-used"];
        dispatch({type: "RESPONSE", usedCalls})
      }
      return res;
    },
    error => {
      if (error.message.includes("timeout")) {
        error.needFakeData = true;
      } else if (error.response && error.response.status === 402) {
        error.needFakeData = true;
        error.message =
          "Limit of usage API is reached for today. Fake data is displayed now.";
      }
      dispatch({type: "ERROR", error})
      throw error;
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [
    reqInterceptor,
    resInterceptor,
    httpClient.interceptors.request,
    httpClient.interceptors.response
  ]);

 const errorConfirmedHandler = () => {
  dispatch({type: "CLEAR"})
};

  return [httpState.error, errorConfirmedHandler, httpState.usedCalls];
};
