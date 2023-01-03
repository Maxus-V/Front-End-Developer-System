<script setup>
import { reactive} from 'vue'
const state = reactive({
    flag: false
})

const change = () => {
    state.flag = !state.flag
}
</script>

<style>
.sub{
  padding-left:20px;
}
</style>

<template>
    <div>
        <div class="title" @click="change">
            <slot name="title"></slot>
        </div>
        <div class="sub" v-show="state.flag">
            <slot></slot>
        </div>
    </div>
</template>