import { useHttp } from "../../hook/useHttp.js";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchNews } from "../../redux/actions.js";
import { fetchNews } from "./news_slice.js";
import { deleteNews } from "../../redux/actions.js";
import Spinner from "../Spinner.jsx";
import Error from "../error/Error.jsx";
import NewsListItem from "./NewsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./NewsList.css";
import { createSelector } from "reselect";

export default function NewsList() {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter, news) => {
      if (filter === "All") {
        return news;
      } else {
        return news.filter((s) => s.category === filter);
      }
    }
  );

  const filteredNews = useSelector(filteredNewsSelected);
  const filterLoadingStatus = useSelector((state) => state.filterLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();
  // console.log(news, newsLoadingStatus);

  useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = useCallback((id) => {
    dispatch(deleteNews(id, request));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr !== undefined) {
      if (arr.length === 0) {
        return (
          <CSSTransition timeout={500} classNames="my-node">
            <h4 className="text-center mt5">News Doesn't exists</h4>
          </CSSTransition>
        );
      }
      return arr
        .map(({ id, ...props }) => {
          return (
            <CSSTransition key={id} timeout={500} classNames="my-node">
              <NewsListItem onDelete={() => onDelete(id)} {...props} />
            </CSSTransition>
          );
        })
        .reverse();
    }
  };

  const element = renderNewsList(filteredNews);

  return (
    <TransitionGroup component="ul" className="news-box">
      {element}
    </TransitionGroup>
  );
}
