import { combineReducers } from 'redux';

import blogsReducer from '@App/store/blogs/reducers/reducer';

const rootReducer = combineReducers({
  blogs: blogsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
