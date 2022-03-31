// import { createReducer } from "@reduxjs/toolkit";
// import {
//   newsFetching,
//   newsFetchingError,
//   newsCreated,
//   newsDeleted,
//   newsFetched,
// } from "../actions";

// const initialState = {
//   news: [],
//   newsLoadingStatus: "sam",
// };

// const news = createReducer(initialState, {
//   [newsFetching]: (state) => {
//     state.newsLoadingStatus = "loading";
//   },
//   [newsFetched]: (state, action) => {
//     state.newsLoadingStatus = "sam";
//     state.news = action.payload;
//   },
//   [newsFetchingError]: (state) => {
//     state.newsLoadingStatus = "error";
//   },
//   [newsCreated]: (state, action) => {
//     state.news.push(action.payload);
//   },
//   [newsDeleted]: (state, action) => {
//     state.news = state.news.filter((news) => news.id !== action.payload);
//   },
// });

// export default news;

// const news = createReducer(initialState, (builder) => {
//   builder
//     .addCase(newsFetching, (state) => {
//       state.newsLoadingStatus = "loading";
//     })
//     .addCase(newsFetched, (state, action) => {
//       state.newsLoadingStatus = "sam";
//       state.news = action.payload;
//     })
//     .addCase(newsFetchingError, (state) => {
//       state.newsLoadingStatus = "error";
//     })
//     .addCase(newsCreated, (state, action) => {
//       state.news.push(action.payload);
//     })
//     .addCase(newsDeleted, (state, action) => {
//       state.news = state.news.filter((news) => news.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

// export default news;

// const news = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEWS_FETCHING":
//       return {
//         ...state,
//         newsLoadingStatus: "loading",
//       };
//     case "NEWS_FETCHED":
//       return {
//         ...state,
//         news: action.payload,
//         newsLoadingStatus: "sam",
//       };
//     case "NEWS_FETCHING_ERROR":
//       return {
//         ...state,
//         newsLoadingStatus: "error",
//       };
//     case "NEWS_CREATED":
//       return {
//         ...state,
//         news: [...state.news, action.payload],
//       };
//     case "NEWS_DELETED":
//       return {
//         ...state,
//         news: state.news.filter((s) => s.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default news;
