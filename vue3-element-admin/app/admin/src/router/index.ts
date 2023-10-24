import { sleep } from '@admin/utils'
import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './routes'
export * from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  console.log('start')
  await sleep(3000)
  next()
})

router.beforeEach(() => {
  console.log('end')
})