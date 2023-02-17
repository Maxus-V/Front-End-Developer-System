<script setup>
import { inject } from 'vue'
import { ElTooltip, ElButton, ElIcon } from 'element-plus';
import { Download } from '@element-plus/icons-vue';

import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const exportExcel = () => {
  let wb = XLSX.utils.table_to_book(document.querySelector("#out-table"))
  let wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: true,
    type: "array"
  })
  try {
    FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), "知识点列表.xlsx")
  } catch (e) {
    if (typeof console !== "undefined") console.log(e, wbout)
  }
}
</script>

<template>
        <!-- <span class="helpMsg">{{ msg }}</span> -->
        <ElTooltip content="表格下载" effect="light" placement="top">
            <ElButton 
                class="download" 
                @click="exportExcel"
                size="small"
            >
                <ElIcon><Download/></ElIcon>
            </ElButton>
        </ElTooltip>
</template>

<style lang="scss" scoped>
</style>