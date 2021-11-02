import {
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOGS_REQUEST,
} from '@App/store/blogs/actions/action.types';
import {
  FetchBlogsSuccessPayload,
  FetchBlogsSuccess,
  FetchBlogsRequest,
  FetchBlogsFailurePayload,
  FetchBlogsFailure,
} from '@App/store/blogs/reducers/types';
import { IBlogParams } from '@App/types/blogs';

export const fetchBlogsRequest = (params: IBlogParams): FetchBlogsRequest => ({
  type: GET_BLOGS_REQUEST,
  payload: params,
});

export const fetchBlogsSuccess = (
  payload: FetchBlogsSuccessPayload
): FetchBlogsSuccess => ({
  type: GET_BLOGS_SUCCESS,
  payload,
});

export const fetchBlogsFailure = (
  payload: FetchBlogsFailurePayload
): FetchBlogsFailure => ({
  type: GET_BLOGS_FAILURE,
  payload,
});
