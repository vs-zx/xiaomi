<template>
  <div class="nav">
    <div class="container">
      <div class="nav-log">
        <a href="\" title="小米官网" class="logo"></a>
      </div>

      <div class="nav-list">
        <ul class="list-wrap" >
          <li
            class="list-item"
            v-for="(item, index) of list.navList"
            :key="index"
            @mouseenter="showBottomList(index)"
          >
            <span class="text">{{ item.name }}</span>
            <div class="item-container" v-show="index === currentNum">
              <ul class="child-list">
                <li
                  class="child-item"
                  v-for="(info, index) of item.info"
                  :key="index"
                >
                  <div class="figure">
                    <img v-lazy="info.url" :alt="info.title" />
                  </div>
                  <p class="title">{{ info.title }}</p>
                  <p class="price">{{ info.price }}</p>
                </li>
              </ul>
            </div>
          </li>

          <li class="list-item">
            <span class="text">服务</span>
          </li>
          <li class="list-item">
            <span class="text">社区</span>
          </li>
        </ul>
      </div>

      <div class="nav-search">
        <input
          type="text"
          placeholder="手机"
          class="search"
          ref="search"
          @focus="changeBorderColor"
          @blur="restoreBorderColor"
        />
        <a href="###" class="search-btn" ref="btn">
          <i class="iconfont">&#xe63a;</i>
        </a>
      </div>
      <!-- 右侧商品展示 -->
      <goods-list :list="list"></goods-list>
    </div>
  </div>
</template>

<script>
import GoodsList from "@/components/home/Goods.vue";

export default {
  name: "HomeNav",
  props:{
    list:{type:Object}
  },
  components: {
    GoodsList,
  },
  data() {
    return {
      currentNum: ""
    };
  },
  methods: {
    showBottomList(index) {
      this.currentNum = index;
    },
    changeBorderColor() {
      const search = this.$refs.search;
      const btn = this.$refs.btn;
      search.style.borderColor = "#ff6700";
      btn.style.borderColor = "#ff6700";
    },
    restoreBorderColor() {
      const search = this.$refs.search;
      const btn = this.$refs.btn;
      search.style.borderColor = "#e0e0e0";
      btn.style.borderColor = "#e0e0e0";
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.nav {
  height: 100px;
  // logo
  .nav-log {
    float: left;
    width: 62px;
    margin-top: 22px;
    .logo {
      position: relative;
      display: block;
      width: 55px;
      height: 55px;
      overflow: hidden;
      &:before,
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        display: block;
        width: 55px;
        height: 55px;
        background: #ff6700 url("~@/assets/img/icon/mi-logo.png") no-repeat 50%
          50%;
        transition: all 0.2s;
      }
      &:after {
        background: #ff6700 url("~@/assets/img/icon/mi-home.png") no-repeat 50%
          50%;
        margin-left: -55px;
      }
    }
    &:hover .logo:before {
      margin-left: 55px;
    }
    &:hover .logo:after {
      margin-left: 0;
    }
  }
  // 导航列表
  .nav-list {
    float: left;
    width: 700px;
    margin-left: 100px;
    .list-wrap {
      padding: 12px 0 0 30px;
    }
    .list-item {
      float: left;
      padding: 26px 10px 38px;
      font-size: 16px;
      color: #333;
      transition: color 0.2s;
      cursor: pointer;
      &:hover {
        color: #ff6700;
      }
    }
  }
  // 导航列表下拉
  .item-container {
    overflow: hidden;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 999;
    width: 1226px;
    height: 0;
    margin: 0 auto;
    background: #fff;
    transition: height 0.5s;
    .child-list {
      padding: 20px 0;
      overflow: hidden;
    }
    .child-item {
      float: left;
      text-align: center;
      .figure {
        margin: 20px 0;
        padding: 0 20px;
        border-right: 1px solid #ccc;
        img {
          width: 160px;
          height: 110px;
          vertical-align: top;
        }
      }
      &:last-child .figure {
        border-right: none;
      }
      .title {
        color: #757575;
      }
      .price {
        color: #ff6700;
      }
    }
  }
  // 导航列表下拉的hover
  .list-item:hover .item-container {
    height: 230px;
    border-top: 1px solid #ccc;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  }
  // 搜索框
  .nav-search {
    float: right;
    width: 296px;
    margin-top: 25px;

    &:hover .search,
    &:hover .search-btn {
      border-color: #b0b0b0;
    }
    .search {
      width: 223px;
      height: 48px;
      padding: 0 10px;
      border: 1px solid #e0e0e0;
      border-right: none;
      transition: all 0.2s;
    }
    .search-btn {
      display: inline-block;
      width: 36px;
      height: 46px;
      line-height: 45px;
      padding: 1px 6px;
      text-align: center;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: #fff;
        border-color: #ff6700;
        background: #ff6700;
      }
    }
  }
}
</style>
