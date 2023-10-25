<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      v-for='breadcrumb in globalStore.breadcrumbs'
      :key='breadcrumb.name'
      :to='{name:breadcrumb.name}'
    >
      {{ breadcrumb.meta?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

import { useGlobalStore } from '@/store'
const globalStore = useGlobalStore()
</script>
