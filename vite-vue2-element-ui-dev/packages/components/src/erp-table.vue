<template>
  <el-table :data="props.data">
    <el-table-column
      v-for="column in props.columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
    >
      <template v-if="column.slot" #default="row">
        <slot :name="column.slot" v-bind="row" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
export interface TableColumn {
  prop: string
  slot?: string
  label: string
}

export interface TableProps {
  data: any[]
  columns: TableColumn[]
}

const props = defineProps<TableProps>()
</script>
