<template>
  <div class="toolBar">
    <a href="javascript:;" class="item">
      <i class="iconfont item-icon">&#xe791;</i>
      <span class="text">手机app</span>
    </a>
    <a href="javascript:;" class="item">
      <i class="iconfont item-icon">&#xe60a;</i>
      <span class="text">个人中心</span>
    </a>
    <a href="javascript:;" class="item">
      <i class="iconfont item-icon">&#xe659;</i>
      <span class="text">售后服务</span>
    </a>
    <a href="javascript:;" class="item">
      <i class="iconfont item-icon">&#xe60e;</i>
      <span class="text">人工客服</span>
    </a>
    <a href="javascript:;" class="item">
      <i class="iconfont item-icon">&#xe60c;</i>
      <span class="text">购物车</span>
    </a>
    <a
      href="javascript:;"
      class="item backtop"
      @click.prevent="backTop"
      v-show="scrollY > screenHeight"
    >
      <i class="iconfont item-icon">&#xe635;</i>
      <span class="text">回顶部</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      screenHeight: 1000
    };
  },
  methods: {
    // 获取屏幕高度
    getScreenHeight() {
      this.screenHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    },
    // 获取滚动高度
    scrollToTop() {
      this.scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    backTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style lang="scss" scoped>
.toolBar {
  position: fixed;
  right: 0;
  bottom: 40px;
  z-index: 99;
  width: 27px;
  height: 261px;
  .item {
    position: relative;
    display: block;
    width: 25px;
    height: 40px;
    margin-top: -1px;
    text-align: center;
    border: 1px solid #f5f5f5;
    background: #fff;
    &.backtop {
      margin-top: 14px;
    }
    &:hover {
      color: #ff6700;
    }
    &:hover .text {
      display: block;
    }

    .item-icon {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
    }
    .text {
      display: none;
      position: absolute;
      right: 40px;
      top: 6px;
      height: 28px;
      line-height: 28px;
      padding: 0 8px;
      white-space: nowrap;
      color: #757575;
      background: #fff;
      &:after {
        position: absolute;
        top: 50%;
        right: -18px;
        margin-top: -10px;
        content: "";
        display: block;
        border-top: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #fff;
      }
    }
  }
}
</style>
