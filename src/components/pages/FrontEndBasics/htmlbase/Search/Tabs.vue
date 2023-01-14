<script>
    const categorys = [
        {
            id: 0,
            name: '待处理',
            processStatus: "PENDING",
        },
        {
            id: 1,
            name: '处理中',
            processStatus: "PROCESSING",
        },
        {
            id: 2,
            name: '已解决',
            processStatus: "CLOSED",
        }
    ]
  export default {
    data() {
      return {
        currentStatus: 'PENDING',
        categorys
      }
    },
    methods: {
        changeStatus(status) {
            this.currentStatus = status
        }
    }
  }
</script>

<template>
    <div class="event-action">
      <div class="action">
        <div v-for="category in categorys" 
            :class="category.processStatus === currentStatus ? 'active': ''" 
            class="default" 
            @click="changeStatus(category.processStatus)">
                {{ category.name }}
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    .event-action {
        margin: 20px 0;

        .action {
          line-height: normal;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);

          .default {
            display: inline-block;
            margin-right: 10px;
            padding: 0 40px;
            height: 35px;
            line-height: 35px;
            cursor: pointer;
          }

          .active {
            color: orange;
            border-bottom: 2px solid orange;

          }

        }
      }
    
</style>