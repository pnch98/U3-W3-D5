import { combineReducers } from "redux";
import sectionReducer from "../reducers/sectionReducer";
import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "../reducers/resultsReducer";
import likedSongsReducer from "../reducers/likedSongsReducer";

const rootReducer = combineReducers({
  section: sectionReducer,
  results: resultsReducer,
  likedSongs: likedSongsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
