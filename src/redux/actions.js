import { newsDeleted } from "../components/NewsList/news_slice";

export const deleteNews = (id, request) => (dispatch) => {
  request(`http://localhost:3001/news/${id}`, "DELETE")
    .then((data) => console.log(data + "Deleting"))
    .then(dispatch(newsDeleted(id)))
    .catch((err) => console.log(err));
};

// export const fetchNews = (request) => (dispatch) => {
//   dispatch(newsFetching());
//   request("http://localhost:3001/news")
//     .then((data) => dispatch(newsFetched(data)))
//     .catch((err) => dispatch(newsFetchingError()));
// };

// export const newsFiltersFunc = (request) => (dispatch) => {
//   dispatch(filtersFetching());
//   request("http://localhost:3001/filters")
//     .then((res) => {
//       dispatch(filtersFetched(res));
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch(filtersFetchingError());
//     });
// };

// export const filtersFetching = createAction("FILTER_FETCHING");

// export const filtersFetched = createAction("FILTER_FETCHED");

// export const filtersFetchingError = createAction("FILTER_FETCHING_ERROR");

// export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED");

// export const newsFetching = createAction("NEWS_FETCHING");
// export const newsFetched = createAction("NEWS_FETCHED");
// export const newsFetchingError = createAction("NEWS_FETCHING_ERROR");
// export const newsCreated = createAction("NEWS_CREATED");
// export const newsDeleted = createAction("NEWS_DELETED");

// import // filtersFetching,
// // filtersFetched,
// // filtersFetchingError,
// "../components/NewsFilters/filter_slice";
// newsFetching,
// newsFetched,
// newsFetchingError,
