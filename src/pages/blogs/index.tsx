import * as React from 'react';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { Link } from 'react-router-dom';

import { onFetchBlogsRequestActionType } from '@App/store/blogs/reducers/types';
import { IBlog } from '@App/types/blogs';
import Media from '@App/library/components/Media';
import Pagination from '@App/library/components/Pagination';
import InputGroup from '@App/library/components/InputGroup';
import Select from '@App/library/components/Select';
import Input from '@App/library/components/Input';
import Wrapper from '@App/library/components/Wrapper';
import { blogKeyArr, orderArr } from '@App/data/blogs';
import { usePrevious } from '@App/helpers/ref';

interface IOwnProps {
  onGetBlogs: onFetchBlogsRequestActionType;
  blogs: IBlog[];
}

const Blogs: React.FC<IOwnProps> = ({ onGetBlogs, blogs }) => {
  const limit = 10;

  const [activePage, setActivePage] = React.useState<number>(1);
  const [sortBy, setSortBy] = React.useState<keyof IBlog>('title');
  const [order, setOrder] = React.useState<string>('asc');
  const [search, setSearch] = React.useState<string>('');
  const [filterBy, setFilterBy] = React.useState<keyof IBlog>();
  const [filterValue, setFilterValue] = React.useState<string>('');

  const prevSearch = usePrevious({ search, setSearch });
  const prevFilterValue = usePrevious({ filterValue, setFilterValue });

  const _renderList = React.useMemo(
    () => (
      <Media>
        {blogs.map((blog: IBlog, idx: number) => (
          <Link key={idx} to={`/blog/${blog.id}`}>
            <Media.Item title={blog.title} image={blog.image}>
              {blog.content}
            </Media.Item>
          </Link>
        ))}
      </Media>
    ),
    [blogs]
  );

  const getBlogs = () => {
    onGetBlogs({
      page: activePage,
      limit: limit,
      sortBy: sortBy,
      order: order,
      search: search,
      filterBy: filterBy,
      filterValue: filterValue,
    });
  };

  React.useEffect(() => {
    getBlogs();
  }, [activePage, order, sortBy, filterBy]);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (
        _get(prevSearch, 'search', '') !== search ||
        _get(prevFilterValue, 'filterValue', '') !== filterValue
      ) {
        getBlogs();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search, prevFilterValue]);

  return (
    <Wrapper>
      <InputGroup label="Sort">
        <Select
          value={sortBy}
          options={blogKeyArr}
          onChange={(val) => setSortBy(val as keyof IBlog)}
          placeholder="Sort by"
        />
        <Select
          value={order}
          options={orderArr}
          onChange={(val) => setOrder(val)}
          placeholder="Order by"
        />
      </InputGroup>
      <InputGroup label="Filter">
        <Select
          value={filterBy as keyof IBlog}
          options={blogKeyArr}
          onChange={(val) => setFilterBy(val as keyof IBlog)}
          placeholder="Filter by"
        />
        <Input
          value={filterValue}
          onChange={(val) => setFilterValue(val)}
          disabled={_isEmpty(filterBy)}
        />
      </InputGroup>
      <InputGroup label="Seach">
        <Input value={search} onChange={(val) => setSearch(val)} />
      </InputGroup>
      {_renderList}
      <Pagination
        totalItems={100}
        itemsPerPage={limit}
        currentPage={activePage}
        onChangePage={(e) => setActivePage(e)}
      />
    </Wrapper>
  );
};

export default Blogs;
