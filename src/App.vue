<script setup>
import BasicLayout from '@/components/basic/BasicLayout/index.vue'
import AsideNav from '@/components/basic/AsideNav/index.vue'
import LayoutWrapper from '@/components/basic/LayoutWrapper/index.vue'
</script>

<template>
  <header>
    <BasicLayout :showHead="false" >
      <template #header>
        <div class="title">欢迎来到前端知识储备系统~！</div>
      </template>
      <template #aside>
        <AsideNav />
      </template>
      <template #main>
        <LayoutWrapper>
          <template #content>
            <!-- <router-view /> -->
            <RouterView v-slot="{ Component }">
              <KeepAlive>
                <component :is="Component"></component>
              </KeepAlive>
            </RouterView>
          </template>
        </LayoutWrapper>
      </template>
    </BasicLayout>
  </header>
</template>

<style lang="scss" scoped>
.title {
  color: white;
}
@media (min-width: 1024px) {
  
}
</style>
