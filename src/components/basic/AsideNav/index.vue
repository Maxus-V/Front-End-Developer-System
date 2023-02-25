<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from "vue-router"
import { ElMenu, ElSubMenu, ElIcon, ElMenuItem } from 'element-plus'
import { Menu as IconMenu, School, Box, OfficeBuilding, Setting } from '@element-plus/icons-vue'

import routes from './config/routes'

const index2Icon = {
  0: IconMenu,
  1: School,
  2: Box,
  3: OfficeBuilding,
  4: Setting,
}

const route = useRoute()
const onRoutes = computed(() => route.path)

const {overview, frontendbasics, frontendframe, frontendprogression, settings} = routes
const asideNavArr = [frontendbasics, frontendframe, frontendprogression, settings]

const handleOpen = () => {}
const handleClose = () => {}
</script>

<template>
    <div class="AsideNav">
        <ElMenu
          active-text-color="#ffd04b"
          background-color="var(--ld-aside-color)"
          class="el-menu-vertical-demo"
          :default-active="onRoutes"
          :collapse-transition="true"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
            <router-link to="/overview">
                <ElMenuItem index="/overview">
                    <ElIcon><icon-menu /></ElIcon>
                    <span>{{ $t(`${overview.name}`) }}</span>
                </ElMenuItem>
            </router-link>

          <ElSubMenu v-for="(item, index) in asideNavArr" :index="index+'1'">
            <template #title>
              <ElIcon><component :is="index2Icon[index+1]" /></ElIcon>
              <span>{{ $t(`${item.name}`) }}</span>
            </template>
            <router-link v-for="subItem in item.children" :to="subItem.path">
                <ElMenuItem :index="subItem.path">{{ subItem.name }}</ElMenuItem>
            </router-link>
          </ElSubMenu>
        </ElMenu>
    </div>
  </template>

<style lang="scss" scoped>
.AsideNav {
  .el-menu {
    border-right: 0px;
    a {
        text-decoration: none;
    }
    .el-menu-item:hover {
      background-color: rgba(250,202,71, 0.8);
      color: rgb(170, 97, 88);
    }
  }
}
</style>
