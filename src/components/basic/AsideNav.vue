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
          <el-menu-item index="0">
            <el-icon><icon-menu /></el-icon>
            <span>概览</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><School /></el-icon>
              <span>前端基础</span>
            </template>
              <el-menu-item index="1-1">HTML</el-menu-item>
              <el-menu-item index="1-2">CSS</el-menu-item>
              <el-menu-item index="1-3">JavaScript</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>前端框架</span>
            </template>
            <el-menu-item index="2-1">Vue</el-menu-item>
            <el-menu-item index="2-2">React</el-menu-item>
            <el-menu-item index="2-3">Angular</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><OfficeBuilding /></el-icon>
              <span>前端进阶</span>
            </template>
            <el-menu-item index="3-1">TypeScript</el-menu-item>
            <el-menu-item index="3-2">Webpack</el-menu-item>
            <el-menu-item index="3-3">Node</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>设置</span>
            </template>
            <el-menu-item index="4-1">
                <el-icon><MagicStick /></el-icon>
                敬请期待
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
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>

<style lang="scss">
    .AsideNav {
        .el-menu {
            border-right: 0px;
        }
    }
</style>
