import React from "react";

import "./Footer.scss";

const Footer = props => (
  <footer className="d-flex justify-content-center">
  <div className="pb-2 pt-3">
      &copy; {new Date().getFullYear()}, made with{" "}
      <i className="fa fa-heart heart" /> by <a href="http://github.com/pylnata">pylnata</a>
   </div>
  </footer>
);

export { Footer };

export default Footer;
