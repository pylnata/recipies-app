import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";

const Modal:React.FC<{show: boolean; modalClosed:()=>void; children:React.ReactNode;}> = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal-anim alert alert-success"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 :0
        }}
      >
        {props.children}
      </div>
    </>
  );
};


const memoModal = React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);

export { memoModal as Modal };

export default memoModal;

