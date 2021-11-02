export interface IBlog {
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  createdAt?: Date;
}

export interface IBlogParams {
  page: number;
  limit: number;
  sortBy?: keyof IBlog;
  createdAt?: string;
  order?: string;
  filter?: string;
  filterBy?: keyof IBlog;
  filterValue?: string;
  search?: string;
}
