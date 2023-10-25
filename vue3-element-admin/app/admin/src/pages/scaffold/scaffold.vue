<template>
  <div class='flex h-screen'>
    <div class='w-200px'>
      <el-scrollbar>
        <m-nav-menu :data='globalStore.navMenus'>
          <template #op>
            abc
          </template>
        </m-nav-menu>
      </el-scrollbar>
    </div>
    <el-page-header class='p-2'>
      <template #breadcrumb>
        <breadcrumbs />
      </template>
      <template #content>
        <span class='text-large font-600 mr-3'> {{ globalStore.currentBreadcrumb?.meta?.title }} </span>
      </template>
    </el-page-header>
    <tabs />
  </div>
</template>

<script setup lang="ts">
import { MNavMenu } from '@admin/components'
import { ElPageHeader, ElScrollbar } from 'element-plus'

import Breadcrumbs from './components/breadcrumbs.vue'
import Tabs from './components/tabs.vue'
import { useGlobalStore } from '@/store'
const globalStore = useGlobalStore()

</script>