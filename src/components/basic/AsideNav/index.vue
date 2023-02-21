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
        <el-menu
          active-text-color="#ffd04b"
          background-color="rgba(170, 97, 88)"
          class="el-menu-vertical-demo"
          :default-active="onRoutes"
          :collapse-transition="true"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
            <router-link to="/overview">
                <el-menu-item index="/overview">
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ $t(`${overview.name}`) }}</span>
                </el-menu-item>
            </router-link>

          <el-sub-menu v-for="(item, index) in asideNavArr" :index="index+'1'">
            <template #title>
              <el-icon><component :is="index2Icon[index+1]" /></el-icon>
              <span>{{ $t(`${item.name}`) }}</span>
            </template>
            <router-link v-for="subItem in item.children" :to="subItem.path">
                <el-menu-item :index="subItem.path">{{ subItem.name }}</el-menu-item>
            </router-link>
          </el-sub-menu>
        </el-menu>
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
