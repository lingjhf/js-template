<template>
  <m-loading
    v-model:percentage='percentage'
    :finished='!globalStore.loading'
    :show='showLoading'
  />
  <RouterView />
</template>

<script setup lang="ts">
import { MLoading } from '@admin/components'
import { ref, watch } from 'vue'

import { useGlobalStore } from '@/store'

const globalStore = useGlobalStore()
const showLoading = ref(globalStore.loading)
const percentage = ref(0)

watch(percentage, () => {
  if (percentage.value === 100) {
    setTimeout(() => {
      showLoading.value = false
    }, 1000)
  }
}, {
  immediate: true
})

</script>
