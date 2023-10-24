<template>
  <el-progress
    v-if='show'
    :percentage='percentage'
    :show-text='false'
  />
  <RouterView />
</template>

<script setup lang="ts">
import { ElProgress } from 'element-plus'
import { watch, withDefaults } from 'vue'

export interface LoadingProps {
  percentage: number,
  show?: boolean
  finished?: boolean
  duration?: number
  count?: number
  stuck?: number
}

const props = withDefaults(
  defineProps<LoadingProps>(),
  {
    show: false,
    finished: false,
    duration: 800,
    count: 6,
    stuck: 90,
  }
)
const emit = defineEmits<{'update:percentage': [value:number]}>()

watch(() => props.show, () => {
  if (props.show) {
    startLoading(1)
  }
}, { immediate: true })

watch(() => props.finished, () => {
  if (props.finished && props.percentage !== 100) {
    emitPercentage(100)
  }
}, { immediate: true })

function startLoading(count: number) {
  setTimeout(() => {
    if (props.finished) {
      return
    }
    if (!props.finished) {
      const p = 100 / props.count * count
      if (p > props.stuck) {
        emitPercentage(props.stuck)
        return
      }
      emitPercentage(p)
    } else if (props.percentage !== 100) {
      emitPercentage(100)
      return
    }
    startLoading(++count)
  }, props.duration)
}

function emitPercentage(value: number) {
  emit('update:percentage', value)
}

</script>
