import { configureStore } from '@reduxjs/toolkit'
import orgReducer from './orgSlice'
import resReducer from './resSlice'
import newsReducer from './newsSlice'


const store = configureStore({
  reducer: {
    org: orgReducer,
    res: resReducer,
    news: newsReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store