import { createReducer } from "@reduxjs/toolkit";
import // filtersFetching,
// filtersFetched,
// filtersFetchingError,
// activeFilterChanged,
"../actions";

const initialState = {
  filters: [],
  filterLoadingStatus: "sam",
  activeFilter: "all",
};

const filter = createReducer(initialState, {
  // [filtersFetching]: (state) => {
  //   state.filterLoadingStatus = "loading";
  // },
  // [filtersFetched]: (state, action) => {
  //   state.filters = action.payload;
  //   state.filterLoadingStatus = "sam";
  // },
  // [filtersFetchingError]: (state) => {
  //   state.filterLoadingStatus = "error";
  // },
  // [activeFilterChanged]: (state, action) => {
  //   state.activeFilter = action.payload;
  // },
});

export default filter;

// const filter = createReducer(initialState, (builder) => {
//   builder
//     .addCase(filtersFetching, (state) => {
//       state.filterLoadingStatus = "loading";
//     })
//     .addCase(filtersFetched, (state, action) => {
//       state.filters = action.payload;
//       state.filterLoadingStatus = "sam";
//     })
//     .addCase(filtersFetchingError, (state) => {
//       state.filterLoadingStatus = "error";
//     })
//     .addCase(activeFilterChanged, (state, action) => {
//       state.activeFilter = action.payload;
//     })
//     .addDefaultCase(() => {});
// });

// export default filter;

// const filter = (state = initialState, action) => {
//   switch (action.type) {
//     case "FILTER_FETCHING":
//       return {
//         ...state,
//         filterLoadingStatus: "loading",
//       };
//     case "FILTER_FETCHED":
//       return {
//         ...state,
//         filters: action.payload,
//         filterLoadingStatus: "sam",
//       };
//     case "FILTER_FETCHING_ERROR":
//       return {
//         ...state,
//         filterLoadingStatus: "error",
//       };
//     case "ACTIVE_FILTER_CHANGED":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filter;
