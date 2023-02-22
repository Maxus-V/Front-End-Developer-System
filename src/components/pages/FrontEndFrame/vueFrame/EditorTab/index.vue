<script setup>
import { ElTabs, ElTabPane } from 'element-plus';

import MarkDown from './MarkDown/index.vue'
import QuillEditor from './QuillEditor/index.vue'
</script>

<template>
    <div class="editorTabs">
        <ElTabs>
            <ElTabPane label="MarkDown">
                <div class="content">
                    <MarkDown />
                </div>
            </ElTabPane>
            <ElTabPane label="QuillEditor">
                <div class="content">
                    <QuillEditor />
                </div>
            </ElTabPane>
        </ElTabs>
    </div>
</template>

<style lang="scss" scoped>
.content {
    height: 560px;
    overflow-y: scroll;
}
</style>