import * as React from 'react';
import _isEmpty from 'lodash/isEmpty';

import Card from '@App/library/components/Card';
import { getBlog } from '@App/services/blogs';
import { IBlog } from '@App/types/blogs';
import Wrapper from '@App/library/components/Wrapper';

interface IOwnProps {
  pararmId: number;
}

const BlogDetail: React.FC<IOwnProps> = ({ pararmId }) => {
  const [data, setData] = React.useState<IBlog>();

  const getBlogById = (id: number) => {
    getBlog(id).then((res) => setData(res.data as IBlog));
  };

  React.useEffect(() => {
    getBlogById(pararmId);
  }, [pararmId]);

  return (
    <Wrapper>
      {_isEmpty(data) === false && (
        <Card
          title={data?.title}
          image={data?.image}
          content={data?.content}
          date={data?.createdAt}
        />
      )}
    </Wrapper>
  );
};

export default BlogDetail;
