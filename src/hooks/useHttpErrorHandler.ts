import { useEffect, useReducer } from "react";
import { Action } from "redux";
import {  } from "axios";

export interface IState {
  error: IError | null;
  usedCalls: string;
}

export interface IError {
  response: { status: number };
  needFakeData: boolean;
  message: string;
}

export interface IClearAction extends Action<"CLEAR"> {};
export interface IRequestAction extends Action<"REQUEST">{};
export interface IResponseAction extends Action<"RESPONSE">{usedCalls: string};
export interface IErrorAction extends Action<"ERROR">{error: IError };

export type TAction = IClearAction | IRequestAction | IResponseAction | IErrorAction;

const httpReducer = (
  state: IState,
  action: TAction
): IState => {
  switch (action.type) {
    case "CLEAR":
    case "REQUEST":
      return { ...state, error: null };
    case "RESPONSE":
      return { ...state, usedCalls: action.usedCalls };
    case "ERROR":
      return { ...state, error: action.error };
    default:
      throw Error("Should not be reached!");
  }
};


const useHttpErrorHandler = (httpClient: any): [IError | null, () => void, string] => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    error: null,
    usedCalls: "0"
  });
  const reqInterceptor = httpClient.interceptors.request.use((req: any) => {
    dispatch({ type: "REQUEST" });
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    (res: any) => {
      if (res.headers["x-api-quota-used"] > 0) {
        const usedCalls = res.headers["x-api-quota-used"];
        dispatch({ type: "RESPONSE", usedCalls });
      }
      return res;
    },
    (error: IError) => {
      if (error.message.includes("timeout")) {
        error.needFakeData = true;
      } else if (error.response && error.response.status === 402) {
        error.needFakeData = true;
        error.message =
          "Limit of usage API is reached for today. Fake data is displayed now.";
      }
      dispatch({ type: "ERROR", error });
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
    dispatch({ type: "CLEAR" });
  };

  return [httpState.error, errorConfirmedHandler, httpState.usedCalls];
};

export default useHttpErrorHandler;
