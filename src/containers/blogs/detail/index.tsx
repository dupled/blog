import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import BlogDetail from '@App/pages/blogs/detail';

interface RouteParams {
  id: string;
}

interface IOwnProps extends RouteComponentProps<RouteParams> {}

const BlogDetailContainer: React.FC<IOwnProps> = ({ match }) => {
  const pararmId = Number(match.params.id);

  return <BlogDetail pararmId={pararmId} />;
};

export default BlogDetailContainer;
