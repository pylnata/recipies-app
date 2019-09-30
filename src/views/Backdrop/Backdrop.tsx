import React from "react";

import "./Backdrop.scss";

const Backdrop:React.FC<{clicked: () => void; show: boolean;}> = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export { Backdrop };

export default Backdrop;
