import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '@store/auth';
import postsTableReducer from '@store/postsTable'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    postsTable: postsTableReducer
  },
});

export default store
