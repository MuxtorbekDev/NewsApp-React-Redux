import news from "../components/NewsList/news_slice";
import filter from "../components/NewsFilters/filter_slice";
// import ReduxThunk from "redux-thunk";
import stringMiddleware from "../middleware/stringMidleware";
import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers, compose, applyMiddleware } from "redux";

// ======== funk enhancer =========
// const enhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);
//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//       if (typeof action === "string") {
//         return oldDispatch({ type: action });
//       }
//       return oldDispatch(action);
//     };

//     return store;
//   };

// const store = createStore(
//   combineReducers({ news, filter }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
//   // compose(
//   //   enhancer,
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // )
// );

// export default store;

const store = configureStore({
  reducer: { news, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  // middleware: [ReduxThunk, stringMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
