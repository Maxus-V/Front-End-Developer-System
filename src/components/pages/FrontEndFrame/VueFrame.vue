<script setup>
import { useRouter, createRouter, createWebHashHistory } from 'vue-router';
import jia from '../../../assets/add.svg'

import FormView from './FormView/index.vue'

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [{ path: '/frontendframes/form/vue', component: FormDetail}],
// })

// const toCreate = (type) => {
//   router.push({
//     path:`/frontendframes/form/${type}`
//   })
// }

const addContent = {
  overview: '0',
  html: '1',
  css: '2',
  javascript: '3',
  vue: '4',
  react: '5',
  angular: '6',
  typescript: '7',
  webpack: '8',
  node: '9'
}

const contents = Object.keys(addContent)
</script>

<template>
    <div class="AlertSource">
      <div class="alertSourceHeader">
        <div class="HeaderItemWrapper" v-for="content in contents" @click="toCreate(content)">
          {{ content }}
          <div class="addBtn">
            <img :src="jia" class="addIcon"/>
          </div>
        </div>
      </div>
      <div>
        <FormView/>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.alertSourceHeader {
      line-height: 80px;
      width: 100%;
      box-sizing: border-box;
      padding: 16px 32px;
      margin-bottom: 16px;
      background: white;
      display: flex;
      flex-direction: row;
      box-shadow: 0 2px 4px rgba(31, 40, 54, 0.06);

      .HeaderItemWrapper {
        width: calc((100% - 84px) / 7);
        height: 60px;
        position: relative;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        cursor: pointer;
        background-color: white;

        &:hover {
          border: 1px solid skyblue;
        }

        .addBtn {
          position: absolute;
          width: 24px;
          height: 16px;
          bottom: 0;
          right: 0px;
          // border-radius: 100% 0 0 0;
          border-radius: 4px;
          background: #E6F7FF;
          color: #ffffff;

          .addIcon {
            position: absolute;
            width: 16px;
            height: 10px;
            top: 3px;
            right: 4px;
          }

          //display: flex;
          //justify-content: center;
          //align-items: center;
        }

        >img {
          max-height: 33px;
        }
      }

      .HeaderItemWrapper .selected {
        border: 1px solid white;
      }

      .changeColor {
        g {
          fill: black
        }

        path {
          fill: black
        }

        path:nth-child(2) {
          fill: red !important;
        }
      }
    }
</style>