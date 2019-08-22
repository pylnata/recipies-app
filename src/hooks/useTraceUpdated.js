import {useEffect, useRef} from "react";

export const useTraceUpdate =(props, componentName) => {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log(componentName + ' updated. Changed props:', changedProps);
    }
    prev.current = props;
  });
}

export default useTraceUpdate;
