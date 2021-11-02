import _isEmpty from 'lodash/isEmpty';

import http from '@App/helpers/api';
import { IBlog, IBlogParams } from '@App/types/blogs';

export const getBlogs = (params?: IBlogParams) => {
  const filterBy =
    _isEmpty(params?.filterBy) === false &&
    _isEmpty(params?.filterValue) === false
      ? `&${params?.filterBy}=${params?.filterValue}`
      : '';

  return http.get<IBlog[]>(
    `/blogs?page=${params?.page}&limit=${params?.limit}&sortBy=${
      params?.sortBy || ''
    }&order=${params?.order || ''}&search=${params?.search || ''}${filterBy}
    `
  );
};

export const getBlog = (id: number) => {
  return http.get<IBlog[]>(`/blogs/${id}`);
};
