import React from "react";

const Paging = props => {
  const { offset, totalResults, pageChangedHandler, cntOnPage } = props;

  let pagingPrev = null;
  let pagingNext = null;

  if (offset > 0) {
    pagingPrev = (
      <i
        title="Previous page"
        className="page fas fa-arrow-left"
        onClick={() => pageChangedHandler("prev")}
      />
    );
  } else {
    pagingPrev = (
      <i
        title="Previous page"
        className="page page--noactive fas fa-arrow-left"
      />
    );
  }

  if (offset <= totalResults - cntOnPage) {
    pagingNext = (
      <i
        title="Next page"
        className="page fas fa-arrow-right"
        onClick={() => pageChangedHandler("next")}
      />
    );
  } else {
    pagingNext = (
      <i title="Next page" className="page page--noactive fas fa-arrow-right" />
    );
  }
  return (
    <>
      {pagingPrev} {pagingNext}
    </>
  );
};

export { Paging };

export default Paging;
