import { configureStore } from "@reduxjs/toolkit"
import calendarReducer from "entities/calendar/model/calendarSlice";

const index = configureStore({
    reducer: calendarReducer
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof index.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof index.dispatch
export default index;