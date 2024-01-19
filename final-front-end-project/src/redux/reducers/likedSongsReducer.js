import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedSongs: [],
};

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.likedSongs = [...state.likedSongs, action.payload];
    },
    removeSong: (state, action) => {
      state.likedSongs.filter((_, song) => song !== action.payload);
    },
  },
});
export const { addSong, removeSong } = likedSongsSlice.actions;
export default likedSongsSlice.reducer;
