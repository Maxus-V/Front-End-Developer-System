<script setup>
import { reactive } from 'vue'
import { ElSelect, ElOption, ElInput, ElTooltip, ElIcon } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

const searchBarState = reactive({
    selectValueOne: [],
    selectValueTwo: [],
    inputValue: '',
})

const AlertSourcesConfig = {
    'kafka': 'kafka',
    'restapi': 'restapi',
    'zabbix': 'zabbix',
    'tsb': '透视宝',
    'jkb':'监控宝',
    'prometheus': 'prometheus',
    'mail': '邮箱集成',
    'aliyun_incident': '阿里云事件告警',
    'aliyun_threshold': '阿里云阈值监控',
    'huawei_snmp': '华为云snmp告警',
    'huaweiyun_ces': "华为云云监控CES",
    'tencentyun_ces_metric': '腾讯云指标告警',
}

</script>

<template>
    <div class="listHeader listHeader2">
        <ElSelect
            multiple
            clearable
            :multiple-limit="2"
            placeholder="请选择告警源类型"
            v-model="searchBarState.selectValueOne"
            style="width: 200px; margin-right: 12px"
        >
            <template v-for="source in Object.keys(AlertSourcesConfig)">
                <ElTooltip :content="source" effect="light" placement="top">
                    <ElOption :value="source" :key="source" :label="AlertSourcesConfig[source]" />
                </ElTooltip>
            </template>
        </ElSelect>
        <ElSelect
            multiple
            clearable
            placeholder="请选择类型"
            v-model="searchBarState.selectValueTwo"
            style="width: 220px; margin-right: 12px"
        >
            <ElOption value="0" key="0" label="手动创建" />
            <ElOption value="1" key="1" label="自动创建" />
        </ElSelect>
        <ElInput 
            clearable
            placeholder="请输入知识来源"
            class="alertSourceListInput"
            v-model="searchBarState.inputValue"
        >
            <template #suffix>
                <ElIcon style="cursor: pointer">
                    <Search />
                </ElIcon>
            </template>
        </ElInput>
    </div>
</template>

<style lang="scss" scoped>
.listHeader {
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background: transparent;
    z-index: 100;
    margin-bottom: 16px;
    .title {
        width: 100px;
        flex-shrink: 0;
    }
    .alertSourceListInput {
        width: 200px;
        flex-shrink: 0;
    }
}
</style>