import { useState, useEffect } from "react";

export default httpClient => {
  const [error, setError] = useState(null);
  const [usedCalls, setUsedCalls] = useState(0);

  const reqInterceptor = httpClient.interceptors.request.use(req => {
    setError(null);
    return req;
  });
  const resInterceptor = httpClient.interceptors.response.use(
    res => {
      if (res.headers["x-api-quota-used"] > 0) {
        const usedCalls = res.headers["x-api-quota-used"];
        setUsedCalls(usedCalls);
      }
      return res;
    },
    err => {
      if(err.message.includes('timeout')) {
        err.needFakeData = true;
      }
      else if (err.response && err.response.status === 402) {
            err.needFakeData = true;
            err.message = "Limit of usage API is reached for today. Fake data is displayed now.";
      }
      setError(err);
      throw err;
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
    setError(null);
  };

  return [error, errorConfirmedHandler, usedCalls];
};
