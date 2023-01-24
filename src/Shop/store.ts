import { configureStore } from "@reduxjs/toolkit";
import { rickApi } from "./Api";
import storageSession from "redux-persist/lib/storage/session";
import BookMarkSlice from "./BookMark";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const sessionConfig = {
  key: "bookmark",
  storage: storageSession,
};

const BookMarkPersist = persistReducer(sessionConfig, BookMarkSlice);

export const myStore = configureStore({
  reducer: {
    [rickApi.reducerPath]: rickApi.reducer,
    BookMarkReducer: BookMarkPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rickApi.middleware),
});

export type AppStore = ReturnType<typeof myStore.getState>;
export type AppDispatch = ReturnType<typeof myStore.dispatch>;

export const persistor = persistStore(myStore);
