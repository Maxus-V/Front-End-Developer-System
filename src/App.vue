<script setup>
import { ref, reactive } from 'vue'

import BasicLayout from './components/basic/BasicLayout.vue'
import AsideNav from './components/basic/AsideNav/index.vue';
import LayoutWrapper from './components/basic/LayoutWrapper/index.vue'


let state = reactive({
  title: '概览'
})

const setTitle = (content) => {
    state.title = content
}
</script>

<template>
  <header>
    <BasicLayout
      :showHead="false"
    >
      <template #header>
        <div style="color: white;">
          欢迎来到前端知识储备系统~！
        </div>
      </template>
      <template #aside>
        <AsideNav
          @changeTitle="setTitle"
        />
      </template>
      <template #main>
        <LayoutWrapper
          :state="state"
        >
          <template #content>
            <router-view />
          </template>
        </LayoutWrapper>
      </template>
    </BasicLayout>
  </header>

  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <!-- <router-link to="/htmlbase">Go to htmlbase</router-link>
      <router-link to="/cssbase">Go to cssbase</router-link> -->
  </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <router-view></router-view> -->

  <main>

  </main>
</template>

<style scoped>

@media (min-width: 1024px) {
  
}
</style>
