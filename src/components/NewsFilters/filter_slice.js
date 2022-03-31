import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/useHttp.js";

const initialState = {
  filters: [],
  filterLoadingStatus: "sam",
  activeFilter: "All",
};

export const newsFiltersFunc = createAsyncThunk(
  "filter/newsFiltersFunc",
  async () => {
    const { request } = useHttp();
    return await request("http://localhost:3001/filters");
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // filtersFetching: (state) => {
    //   state.filterLoadingStatus = "loading";
    // },
    // filtersFetched: (state, action) => {
    //   state.filters = action.payload;
    //   state.filterLoadingStatus = "sam";
    // },
    // filtersFetchingError: (state) => {
    //   state.filterLoadingStatus = "error";
    // },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(newsFiltersFunc.pending, (state) => {
        state.filterLoadingStatus = "loading";
      })
      .addCase(newsFiltersFunc.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.filterLoadingStatus = "sam";
      })
      .addCase(newsFiltersFunc.rejected, (state) => {
        state.filterLoadingStatus = "error";
      });
  },
});

const { actions, reducer } = filterSlice;
export default reducer;

export const {
  // filtersFetching,
  // filtersFetched,
  // filtersFetchingError,
  activeFilterChanged,
} = actions;
