<script setup>

</script>

<template>
    <div class="index-box index-box-border">
        <div class="circle">
            <slot name="index"></slot>
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div className="content">
            <slot></slot>
        </div>
        <div>
            <slot name="extra"></slot>
        </div>
        </div>
</template>

<style lang="scss" scoped>
.index-box {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px 16px 16px;
    border-left: 1px dashed #AEB0B8;

    .circle {
      border-radius: 50%;
      white-space: nowrap;
      background: white;
      width: 25px;
      height: 25px;
      border: 1px dashed #36A3FF;
      position: absolute;
      top: 0;
      left: -12px;
      text-align: center;
      line-height: 24px;
      color: black;
    }

    .title {
      line-height: 16px;
      font-weight: 12px;
      font-size: 16px;
    }

    .content {
      background: white;
      box-sizing: border-box;
      padding: 8px;
    }

    &:last-child {
      border-left: none;
    }
  }

  .index-box-border {
    border-left: 1px dashed #AEB0B8 !important;
  }
</style>