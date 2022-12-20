<script>
  import { 
    ElContainer,
    ElHeader,
    ElAside,
    ElMain
  } from 'element-plus'
  export default {
    components: { 
      ElContainer,
      ElHeader,
      ElAside,
      ElMain
    },
    props: {
      showHead: Boolean
    }
  }
</script>

<template>
  <div class="basicLayout">
    <el-container>
      <el-header v-if="showHead">
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside>
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <slot name="main"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.basicLayout {
  .el-header {
    background-color: rgba(66, 66, 66);
    display: flex;
    align-items: center;
  }
  .el-container {
    height: 100vh;
    .el-aside {
      width: 200px;
      background-color: rgba(170, 97, 88);
    }
    .el-main {
      background-color: rgba(249, 205, 144);
    }
  }
}
</style>