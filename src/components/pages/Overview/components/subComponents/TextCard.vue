<script setup>
// import { toRefs } from 'vue';
import { ElIcon } from 'element-plus';
import UpgradeIcon from '../../../../icons/IconUpgrade.vue'
const props = defineProps({
  cardData: Object,
  title: String
})

// const { cardData } = toRefs(props);
const {myCount = 0, allCount = 0, todayMyTotal = 0, todayAllTotal = 0} = props.cardData

//实现千位分隔
const thousandth = (num) => {
  let res = num.toString().replace(/\d+/, (n) => {
    return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
      return $1 + ","
    })
  })
  return res
}
</script>

<template>
    <div class='textCard'>
    <div class='container'>
      <div class='cardTitle'>{{title}}</div>
      <div>
        <div class='cardContent'>
          <div class='events'>
            <router-link to="/frontendbasics/cssbase">
                <h1 class='main'>{{thousandth(myCount)}}</h1>
                <div class='head lucency'>我的事件</div>
                <div class='footer lucency'>
                    <!-- 今日 +{{todayMyTotal}} -->
                    今日 +0
                    <span> </span>
                    <!-- <Icon component={Upgrade}/> -->
                    <el-icon>
                      <UpgradeIcon/>
                    </el-icon>
                </div>
            </router-link>
          </div>
          <div class='all events'>
            <router-link to="/frontendbasics/cssbase">
                <h1 class='main'>{{thousandth(allCount)}}</h1>
                <div class='head lucency'>所有事件</div>
                <div class='footer lucency'>
                    <!-- 今日 +{{todayAllTotal}} -->
                    今日 +0
                    <span> </span>
                    <!-- <Icon component={Upgrade}/> -->
                    <el-icon>
                      <UpgradeIcon/>
                    </el-icon>
                </div>
            </router-link>
          </div>
        </div>
        <div class='dashline'></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .textCard{
    .container {
      height: 138px;
      font-size: 14px;
      background-color: white;
      .cardTitle {
        color: black;
        padding: 16px 0 0 16px;
      }
      .cardContent {
        display: flex;
        font-size: 12px;
        padding-left: 16px;
        // border: 1px solid red;
        .events {
          display: flex;
          flex-direction: column;
          .head {
            // padding-bottom: 8px;
          }
          .main {
            font-size: 22px;
            color: #000000;
            // margin-bottom: 8px;
          }
          .lucency {
            color: black;
            margin-bottom: 10px;
          }
        }
        .all {
          padding-left: 29%;
        }
        a {
          text-decoration: none;
        }
      }
      .dashline {
        position: relative;
        bottom: 33px;
        width: 80%;
        margin-left: 16px;
        border: 0.5px dashed #000000;
        opacity: 0.2;
      }
    }
  }
</style>