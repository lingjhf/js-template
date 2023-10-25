<template>
  <!-- <m-progress-loading
    :finished='!globalStore.loading'
    :percentage='0'
  /> -->

  <RouterView />
</template>

<script setup lang="ts">
import { MProgressLoading } from '@admin/components'


import { useGlobalStore } from '@/store'
const globalStore = useGlobalStore()

</script>
