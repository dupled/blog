import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
} from '@App/store/blogs/actions/action.types';
import { IBlog, IBlogParams } from '@App/types/blogs';

export interface BlogsState {
  pending: boolean;
  data: IBlog[];
  error: string | null;
}

export interface FetchBlogsSuccessPayload {
  blogs: IBlog[];
}

export interface FetchBlogsFailurePayload {
  error: string;
}

export interface FetchBlogsRequest {
  type: typeof GET_BLOGS_REQUEST;
  payload: IBlogParams;
}

export type onFetchBlogsRequestActionType = (
  params: IBlogParams
) => FetchBlogsRequest;

export type FetchBlogsSuccess = {
  type: typeof GET_BLOGS_SUCCESS;
  payload: FetchBlogsSuccessPayload;
};

export type FetchBlogsFailure = {
  type: typeof GET_BLOGS_FAILURE;
  payload: FetchBlogsFailurePayload;
};

export type BlogsActions =
  | FetchBlogsRequest
  | FetchBlogsSuccess
  | FetchBlogsFailure;
