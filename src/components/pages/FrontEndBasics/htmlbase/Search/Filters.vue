<script>
  import { 
    ElSelect,
    ElOption,
    ElTimePicker,
    ElInput,
    ElIcon
  } from 'element-plus'

  import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';

  export default {
    components: { 
      ElSelect,
      ElOption,
      ElTimePicker,
      ElInput,
      ElIcon,
      ArrowDown,
      ArrowUp
    },
    data() {
      return {
        panelVisible: false,
        options: [{
          value: '选项1',
          label: '灾难'
        }, {
          value: '选项2',
          label: '严重'
        }, {
          value: '选项3',
          label: '次要'
        }, {
          value: '选项4',
          label: '提示'
        }, {
          value: '选项5',
          label: '正常'
        }],
        selectValue: '',
        timeValue: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        inputValue: '',
      }
    },
  }
</script>

<template>
    <div class="filters">
        <ElSelect
            v-model="selectValue" 
            placeholder="事件级别"
        >
            <ElOption v-for="option in options" 
                :key="option.value" 
                :value="option.value"
                :label="option.label" 
            >
            </ElOption>
        </ElSelect>
        <ElTimePicker
            is-range
            arrow-control
            v-model="timeValue"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
        >
        </ElTimePicker>
        <ElInput
            placeholder="请输入事件名称/ID"
        >
        </ElInput>
    </div>
</template>

<style lang="scss" scoped>
    .filters {
        display: flex;
        margin-left: 10px;
        .el-select {
            width: 150px;
            margin-right: 10px;
        }

        .el-input {
            width: 150px;
            margin-left: 10px;
        }
    }
</style>