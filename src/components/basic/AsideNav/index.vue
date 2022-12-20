<script lang="ts">
  import { 
    ElRadioGroup,
    ElRadioButton,
    ElMenu,
    ElSubMenu,
    ElIcon,
    ElMenuItemGroup,
    ElMenuItem,
  } from 'element-plus'
  import routes from './config/routes';
  export default {
    components: { 
        ElRadioGroup,
        ElRadioButton,
        ElMenu,
        ElSubMenu,
        ElIcon,
        ElMenuItemGroup,
        ElMenuItem,
    },
    data() {
      return {
        overview: routes.overview,
        frontendbasics: routes.frontendbasics,
        frontendframe: routes.frontendframe,
        frontendprogression: routes.frontendprogression,
        settings: routes.settings
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
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
            <router-link to="/overview">
                <el-menu-item index="0">
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ overview.name }}</span>
                </el-menu-item>
            </router-link>

          <el-sub-menu index="1">
            <template #title>
              <el-icon><School /></el-icon>
              <span>{{ routes.frontendbasics.name }}</span>
            </template>
            <router-link v-for="item in frontendbasics.children" :to="item.path">
                <el-menu-item :index="item.index">{{ item.name }}</el-menu-item>
            </router-link>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>{{ routes.frontendframe.name }}</span>
            </template>
            <router-link v-for="item in frontendframe.children" :to="item.path">
                <el-menu-item :index="item.index">{{ item.name }}</el-menu-item>
            </router-link>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><OfficeBuilding /></el-icon>
              <span>{{ routes.frontendprogression.name }}</span>
            </template>
            <router-link v-for="item in frontendprogression.children" :to="item.path">
                <el-menu-item :index="item.index">{{ item.name }}</el-menu-item>
            </router-link>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>{{ settings.name }}</span>
            </template>
            <el-menu-item index="4-1">
                <el-icon><MagicStick /></el-icon>
                {{ settings.text }}
            </el-menu-item>
          </el-sub-menu>

        </el-menu>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
    Menu as IconMenu,
    School,
    Box,
    OfficeBuilding,
    Setting,
    MagicStick
  } from '@element-plus/icons-vue'
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
