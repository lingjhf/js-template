import { RouteRecordRaw } from 'vue-router'

export abstract class RouteNames {
  static get home() {
    return 'home'
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.home,
    meta: {
      title: '首页'
    },
    component: () => import('@/pages/scaffold')
  },
]
