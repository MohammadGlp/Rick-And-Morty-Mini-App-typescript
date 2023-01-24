import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { singleCharacter } from "./Api";
import { AppStore } from "./store";

interface stateType {
  bookmark?: [] | singleCharacter[];
  isBookmarkOpen: boolean;
}

const initialState: stateType = {
  bookmark: [],
  isBookmarkOpen: false,
};

const BookMarkSlice = createSlice({
  name: "BookMark",
  initialState: initialState,
  reducers: {
    addAndRemBookmark: (
      state: singleCharacter | any,
      action: PayloadAction<singleCharacter> | any
    ) => {
      const items = state.bookmark.some(
        (bookmark: singleCharacter) => bookmark.id === action?.payload.id
      );

      if (items) {
        state.bookmark = state.bookmark.filter(
          (bookmark: singleCharacter) => bookmark.id !== action?.payload.id
        );
      } else {
        state.bookmark.push(action?.payload);
      }
    },
    resetBookmark: (state) => {
      state.bookmark = [];
    },
    BookmarkOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookmarkOpen = action.payload;
    },
  },
});

const BookmarkArray = (state: AppStore) => state.BookMarkReducer;

export const selectBookMarkArray = createSelector(
  BookmarkArray,
  (Bookmark) => Bookmark.bookmark
);

export const selectBookMarkOpen = createSelector(
  BookmarkArray,
  (Bookmark) => Bookmark.isBookmarkOpen
);

export const { addAndRemBookmark, resetBookmark, BookmarkOpen } =
  BookMarkSlice.actions;

export default BookMarkSlice.reducer;
