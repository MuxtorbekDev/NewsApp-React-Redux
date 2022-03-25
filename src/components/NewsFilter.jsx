import React from "react";

function NewsFilter() {
  return (
    <div className="card  news-filter w-100 shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text ">Filter by category</p>
        <div className="btn-group w-100">
          <button className="btn btn-outline-danger active">All</button>
          <button className="btn btn-outline-danger ">Hot News</button>
          <button className="btn btn-outline-danger ">Sport News</button>
          <button className="btn btn-outline-danger ">World News</button>
        </div>
      </div>
    </div>
  );
}

export default NewsFilter;
