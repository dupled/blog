import { all } from '@redux-saga/core/effects';

import blogsSaga from '@App/store/blogs/sagas/blogs.saga';

export function* rootBlogsSaga() {
  yield all([blogsSaga()]);
}
