<template>
  <el-progress
    v-if='showLoading'
    :percentage='loadingPercentage'
    :show-text='false'
  />
  <RouterView />
</template>

<script setup lang="ts">
import { ElProgress } from 'element-plus'
import { ref, watch, withDefaults } from 'vue'

export interface LoadingProps {
  percentage: number,
  show?: boolean
  finished?: boolean
  finishedHide?: boolean
  hideAfter?: number
  duration?: number
  count?: number
  stuck?: number
}

const props = withDefaults(
  defineProps<LoadingProps>(),
  {
    show: true,
    finished: false,
    finishedHide: true,
    hideAfter: 1000,
    duration: 300,
    count: 8,
    stuck: 90,
  }
)
const emit = defineEmits<{
  'update:percentage': [value:number], 
  'update:show': [value:boolean],
}>()

const finishedPercentage = 100
const showLoading = ref(props.show)
const loadingPercentage = ref(props.percentage)

watch(() => props.show, () => {
  showLoading.value = props.show
})

watch(() => props.percentage, () => {
  loadingPercentage.value = props.percentage
})

watch(showLoading, () => {
  if (showLoading.value) {
    startLoading(1)
  }
}, { immediate: true })

watch(() => props.finished, () => {
  if (props.finished && loadingPercentage.value !== finishedPercentage) {
    emitPercentage(finishedPercentage)
  }
  if (props.finished && props.finishedHide) {
    setTimeout(() => {
      emitShow(false)
    }, props.hideAfter)
  }
}, { immediate: true })

function startLoading(count: number) {
  setTimeout(() => {
    if (props.finished) {
      return
    }
    if (!props.finished) {
      const p = finishedPercentage / props.count * count
      if (p > props.stuck) {
        emitPercentage(props.stuck)
        return
      }
      emitPercentage(p)
    } else if (loadingPercentage.value !== finishedPercentage) {
      emitPercentage(finishedPercentage)
      return
    }
    startLoading(++count)
  }, props.duration)
}

function emitShow(value: boolean) {
  showLoading.value = value
  emit('update:show', value)
}

function emitPercentage(value: number) {
  loadingPercentage.value = value
  emit('update:percentage', value)
}

</script>
