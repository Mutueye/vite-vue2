<template>
  <el-table :data="tableData" style="width: 100%; margintop: 10px">
    <el-table-column label="参数" width="120">
      <template slot-scope="scope">
        <TableText :value="scope.row.name" />
      </template>
    </el-table-column>
    <el-table-column label="说明">
      <template slot-scope="scope">
        <TableText :value="scope.row.desc" />
      </template>
    </el-table-column>
    <el-table-column label="类型" width="120">
      <template slot-scope="scope">
        <TableText :value="scope.row.type" />
      </template>
    </el-table-column>
    <el-table-column label="可选值">
      <template slot-scope="scope">
        <TableText :value="scope.row.options" />
      </template>
    </el-table-column>
    <el-table-column label="默认值" width="120">
      <template slot-scope="scope">
        <TableText :value="scope.row.default" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import TableText from './TableText.vue';
export default {
  components: { TableText },
  props: ['tableData'],
};
</script>
