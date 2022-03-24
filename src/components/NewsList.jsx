import { useHttp } from "../hook/useHttp.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  newsFetched,
  newsFetching,
  newsFetchingError,
} from "../redux/actions.js";
import Spinner from "./Spinner.jsx";
import Error from "./error/Error.jsx";
import NewsListItem from "./NewsListItem";

export default function NewsList() {
  const { news, newsLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  console.log(news, newsLoadingStatus);

  useEffect(() => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (newsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (newsLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return <h4 className="text-center mt5">News Doesn't exists</h4>;
    }
    return arr.map(({ id, ...props }) => {
      return <NewsListItem key={id} {...props} />;
    });
  };

  const element = renderNewsList(news);

  return <ul>{element}</ul>;
}
