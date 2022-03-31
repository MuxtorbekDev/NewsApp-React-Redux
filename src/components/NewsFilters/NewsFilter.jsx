import React, { useEffect } from "react";
// import { useHttp } from "../../hook/useHttp";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import Spinner from "../Spinner";
import Error from "../error/Error";
// import { newsFiltersFunc } from "../../redux/actions";
import { activeFilterChanged, newsFiltersFunc } from "./filter_slice.js";

function NewsFilter() {
  const { filters, filterLoadingStatus, activeFilter } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  // const { request } = useHttp();

  useEffect(() => {
    dispatch(newsFiltersFunc());

    // eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderFilters = (arr) => {
    if (arr !== undefined) {
      if (arr.length === 0) {
        return <h5 className="text-center mt-5">Filters doesn't found</h5>;
      }
      return arr.map(({ name, className, label }) => {
        const btnClasses = classNames("btn", className, {
          active: name === activeFilter,
        });
        return (
          <button
            key={name}
            id={name}
            className={btnClasses}
            onClick={() => dispatch(activeFilterChanged(name))}
          >
            {label}
          </button>
        );
      });
    }
  };

  const elements = renderFilters(filters);
  return (
    <div className="card  news-filter w-100 shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text ">Filter by category</p>
        <div className="btn-group w-100">{elements}</div>
      </div>
    </div>
  );
}

export default NewsFilter;
