import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const loading = ref(true)

  function setLoading(value: boolean) {
    loading.value = value
  }

  return { loading, setLoading }
})