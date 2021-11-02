import { lazy } from 'react';
import { IRoute } from '@App/types/routes';

const Home = lazy(() => import('@App/pages'));

// BLOG
const Blogs = lazy(() => import('@App/pages/blogs'));
const BlogDetail = lazy(() => import('@App/pages/blogs/detail'));

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/blog',
    exact: true,
    component: Blogs,
  },
  {
    path: '/blog/:id',
    exact: true,
    component: BlogDetail,
  },
];

export default routes;
