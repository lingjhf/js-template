import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(true)
  const breadcrumbs = ref<RouteRecordRaw[]>([])
  const tabs = ref([])
  const navMenus = ref([
    { title: 'Navigator One', index: 'option1', children: [
      {
      
        title: 'Option 1'
      },
      {
        group: true,
        title: 'group 2',
        children: [
          { title: 'Option 2-1' },
          { title: 'Option 2-2' }
        ]
      },
      {
        title: 'Option 3'
      }
    ] },
    { title: 'Navigator Two', index: 'option4', children: [
      {
      
        title: 'Option 1'
      },
      {
        title: 'sub 2', index: 'option2',
        children: [
          { title: 'Option 2-1' },
          { title: 'Option 2-2' }
        ]
      },
      {
        title: 'Option 3'
      }
    ] },
    { title: 'Navigator Three' },
  ])

  const currentBreadcrumb = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1])

  function setLoading(value: boolean) {
    loading.value = value
  }

  function setBreadcrumbs(value: RouteRecordRaw[]) {
    breadcrumbs.value = value
  }

  function setTabs(value: []) {
    tabs.value = value
  }

  return {
    loading, breadcrumbs, tabs, navMenus,
    currentBreadcrumb, 
    setLoading, setBreadcrumbs, setTabs 
  }
})