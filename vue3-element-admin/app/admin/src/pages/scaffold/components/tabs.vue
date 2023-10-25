<template>
  <el-tabs
    v-model='currentTab'
    class='demo-tabs'
    type='border-card'
  >
    <el-tab-pane
      label='Route'
      name='Route'
    >
      Route
    </el-tab-pane>
    <el-tab-pane
      label='Config'
      name='Config'
    >
      Config
    </el-tab-pane>
    <el-tab-pane
      label='Role'
      name='Role'
    >
      Role
    </el-tab-pane>
    <el-tab-pane
      label='Task'
      name='Task'
    >
      Task
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane, } from 'element-plus'
import { ref } from 'vue'
const currentTab = ref('Route')
</script>

<style scoped>

</style>
