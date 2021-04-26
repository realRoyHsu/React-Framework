import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home/index'))
const NotFoundPage = lazy(() => import('@/pages/404/index'))

export const Containers = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    comp: Home,
  },
  {
    name: '404',
    path: '/404',
    exact: true,
    comp: NotFoundPage,
  },
]
