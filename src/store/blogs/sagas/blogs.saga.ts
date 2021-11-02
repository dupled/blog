import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getBlogs } from '@App/services/blogs';
import {
  fetchBlogsFailure,
  fetchBlogsSuccess,
} from '@App/store/blogs/actions/actions';
import { GET_BLOGS_REQUEST } from '@App/store/blogs/actions/action.types';
import { FetchBlogsRequest } from '@App/store/blogs/reducers/types';

function* fetchBlogsSaga(action: FetchBlogsRequest) {
  try {
    const { payload } = action;
    const response = yield call(() => getBlogs(payload));
    yield put(
      fetchBlogsSuccess({
        blogs: response.data,
      })
    );
  } catch (e) {
    const res = e as Error;
    yield put(
      fetchBlogsFailure({
        error: res.message,
      })
    );
  }
}

function* blogsSaga() {
  yield all([takeLatest(GET_BLOGS_REQUEST, fetchBlogsSaga)]);
}

export default blogsSaga;
