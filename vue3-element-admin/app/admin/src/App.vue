<template>
  <el-progress
    :percentage='percentage'
    :show-text='false'
  />
  <RouterView />
</template>

<script setup lang="ts">
import { ElProgress } from 'element-plus'
import { ref } from 'vue'
const percentage = ref(0)
</script>
