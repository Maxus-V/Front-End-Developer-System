<script lang="ts">
  import { 
    ElMenu,
    ElSubMenu,
    ElIcon,
    ElMenuItem,
  } from 'element-plus'
  import {
    Menu as IconMenu,
    School,
    Box,
    OfficeBuilding,
    Setting,
  } from '@element-plus/icons-vue'

  import routes from './config/routes';

  const {overview, frontendbasics, frontendframe, frontendprogression, settings} = routes
  const index2Icon = {
    0: 'IconMenu',
    1: 'School',
    2: 'Box',
    3: 'OfficeBuilding',
    4: 'Setting',
  }

  export default {
    components: { 
        ElMenu,
        ElSubMenu,
        ElIcon,
        ElMenuItem,
        IconMenu,
        School,
        Box,
        OfficeBuilding,
        Setting,
    },
    data() {
      return {
        asideNavArr: [frontendbasics, frontendframe, frontendprogression, settings]
      }
    }
  }
</script>

<template>
    <div class="AsideNav">
        <el-menu
          active-text-color="#ffd04b"
          background-color="rgba(170, 97, 88)"
          class="el-menu-vertical-demo"
          default-active="0"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
            <router-link to="/overview" @click="changeMyTitle($t(`${overview.name}`))">
                <el-menu-item index="0">
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ $t(`${overview.name}`) }}</span>
                </el-menu-item>
            </router-link>

          <el-sub-menu v-for="(item, index) in asideNavArr" :index="index+'1'">
            <template #title>
              <el-icon><component :is="index2Icon[index+1]" /></el-icon>
              <span>{{ $t(`${item.name}`) }}</span>
            </template>
            <router-link v-for="subItem in item.children" :to="subItem.path" @click="changeMyTitle(subItem.name)">
                <el-menu-item :index="subItem.index">{{ subItem.name }}</el-menu-item>
            </router-link>
          </el-sub-menu>

        </el-menu>
    </div>
  </template>
  
  <script lang="ts" setup>
  const emits = defineEmits(['changeTitle']);
  const changeMyTitle = (content) => {
    emits('changeTitle', content)
  }
  const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
  }
  </script>

<style lang="scss">
    .AsideNav {
        .el-menu {
            border-right: 0px;
            a {
                text-decoration: none;
            }
        }
    }
</style>
