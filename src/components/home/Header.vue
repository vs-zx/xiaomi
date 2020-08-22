<template>
  <div class="header">
    <div class="container">
      <div class="header-nav">
        <a href="javascript:;">小米商城</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">MIUI</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">IoT</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">云服务</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">金融</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">有品</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">小爱开放平台</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">企业团购</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">资质证照</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank">协议规则</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank" class="topbar-download">
          下载app
        </a>
        <span class="sep">|</span>
        <a href="javascript:;">Select Location</a>
      </div>
      <div class="header-cart">
        <a href="###" class="cart-mini">
          <i class="iconfont cart-icon">&#xe60c;</i>
          购物车
          <span id="cart-num">(0)</span>
        </a>
        <div class="cart-menu">
          <div class="cart-content">
            购物车中还没有商品，赶紧选购吧！
          </div>
        </div>
      </div>
      <div class="header-info">
        <a href="javascript:;" class="link">登录</a>
        <span class="sep">|</span>
        <a href="javascript:;" target="_blank" class="link">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="scss" scoped>
@mixin alink {
  display: inline-block;
  line-height: 40px;
  color: #b0b0b0;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
}

.header {
  height: 40px;
  font-size: 12px;
  background: #333;

  .header-nav {
    float: left;
    a {
      @include alink;
    }
    .sep {
      line-height: 40px;
      color: #424242;
      margin: 0 5px;
    }
  }

  .header-cart {
    position: relative;
    float: right;
    width: 120px;
    margin-left: 15px;
    font-size: 12px;
    text-align: center;

    .cart-mini {
      display: block;
      height: 40px;
      line-height: 40px;
      color: #b0b0b0;
      background: #424242;
      .cart-icon {
        margin-right: 4px;
        font-weight: bold;
        vertical-align: -1px;
      }
    }
    .cart-menu {
      overflow: hidden;
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 999;
      width: 316px;
      height: 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      background: #fff;
      transition: all 0.5s;
      .cart-content {
        padding-top: 20px;
        height: 60px;
        line-height: 60px;
        color: #424242;
      }
    }
    &:hover .cart-mini {
      color: #ff6700;
    }
    &:hover .cart-menu {
      height: 80px;
    }
  }

  .header-info {
    float: right;
    .link {
      @include alink;
    }
  }
}
</style>
