import { sleep } from '@admin/utils'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'
import { useGlobalStore } from '@/store'

export * from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  const globalStore = useGlobalStore()
  globalStore.setLoading(true)
  const pathNames: string[] = to.meta.pathNames ?? []
  if (to.name) {
    pathNames.push(to.name as string)
  }
  globalStore.setBreadcrumbs([...findRoutesByPath(routes, pathNames)])
  // await sleep(3000)
  next()
})

router.afterEach(() => {
  const globalStore = useGlobalStore()
  globalStore.setLoading(false)
})

function findRoutesByPath(routes: RouteRecordRaw[], path: string[]): RouteRecordRaw[] {
  let matchRoutes: RouteRecordRaw[] = []
  for (const route of routes) {
    if (route.name && path.includes(route.name.toString())) {
      matchRoutes.push(route)
    }
    if (route.children && route.children.length > 0) {
      matchRoutes = [...matchRoutes, ...findRoutesByPath(route.children, path)]
    }
  }
  return matchRoutes
}