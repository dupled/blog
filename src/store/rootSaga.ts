import { all, fork } from 'redux-saga/effects';

import * as rootBlogsSaga from '@App/store/blogs/sagas';

export default function* rootSaga() {
  yield all([...Object.values(rootBlogsSaga)].map(fork));
}
