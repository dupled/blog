import * as React from 'react';
import { connect } from 'react-redux';

import Blogs from '@App/pages/blogs';
import { IBlog } from '@App/types/blogs';
import { IAppReduxState } from '@App/types/redux';
import { onFetchBlogsRequestActionType } from '@App/store/blogs/reducers/types';
import { fetchBlogsRequest } from '@App/store/blogs/actions/actions';

interface IOwnProps {}

interface IPropsFromState {
  blogs: IBlog[];
}

const mapStateToProps = (state: IAppReduxState): IPropsFromState => ({
  blogs: state.blogs.data,
});

interface IPropsFromDispatch {
  fetchBlogsRequest: onFetchBlogsRequestActionType;
}

const actionsToProps: IPropsFromDispatch = {
  fetchBlogsRequest: fetchBlogsRequest,
};

const connector = connect(mapStateToProps, actionsToProps);

type IProps = IPropsFromDispatch & IPropsFromState & IOwnProps;

const BlogsContainer: React.FC<IProps> = ({ fetchBlogsRequest, blogs }) => {
  return <Blogs onGetBlogs={fetchBlogsRequest} blogs={blogs} />;
};

export default connector(BlogsContainer);
