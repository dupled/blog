import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
} from '@App/store/blogs/actions/action.types';
import { BlogsActions, BlogsState } from '@App/store/blogs/reducers/types';

const initialState: BlogsState = {
  pending: false,
  data: [],
  error: null,
};

export default (state = initialState, action: BlogsActions) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.blogs,
        error: null,
      };
    case GET_BLOGS_FAILURE:
      return {
        ...state,
        pending: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
