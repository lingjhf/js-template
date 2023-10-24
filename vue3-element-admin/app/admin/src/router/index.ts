import { sleep } from '@admin/utils'
import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'
import { useGlobalStore } from '@/store'

export * from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const globalStore = useGlobalStore()
  globalStore.setLoading(true)
  await sleep(5000)
  next()
})

router.afterEach(() => {
  const globalStore = useGlobalStore()
  globalStore.setLoading(false)
})