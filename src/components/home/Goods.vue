<template>
  <div class="goods" @mouseleave="hiddenGoods">
    <!-- 左侧商品菜单 -->
    <ul class="category-menu" v-if="list">
      <li
        class="menu-item"
        v-for="(item, index) of list.menuList"
        :key="item.id"
        @mouseenter="showGoods(index)"
      >
        <a href="###" class="menu-title">
          {{ item.title }}
          <i class="iconfont menu-icon">&#xe662;</i>
        </a>
      </li>
    </ul>
    <!-- 右侧商品展示 -->
    <div class="goods-show">
      <div
        class="content"
        v-for="(item, index) of list.goodsList"
        :key="index"
        v-show="currentIndex === index"
      >
        <ul
          class="content-item"
          v-for="(goods, index) of item.info"
          :key="index"
        >
          <li
            class="goods-item"
            v-for="(innerItem, index) of goods"
            :key="index"
          >
            <a href="###" class="link">
              <img v-lazy="innerItem.imgUrl" :alt="innerItem.name" />
              <span class="text">{{ innerItem.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    list: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      currentIndex: "",
    };
  },
  methods: {
    showGoods(idx) {
      this.currentIndex = idx;
    },
    hiddenGoods() {
      this.currentIndex = "";
    },
  }
};
</script>

<style lang="scss" scoped>
.goods {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 99;
  width: 234px;
  height: 460px;
}
//  左侧菜单
.category-menu {
  padding: 20px 0;
  height: 420px;
  background: rgba(105, 101, 101, 0.6);
  .menu-item {
    width: 100%;
  }
  .menu-title {
    position: relative;
    display: block;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #fff;
    padding-left: 30px;
    &:hover {
      background: #ff6700;
    }
    &:hover .menu-icon {
      opacity: 0.6;
    }
  }
  .menu-icon {
    position: absolute;
    right: 20px;
    font-size: 18px;
    font-weight: bold;
  }
}
// 右侧商品
.goods-show {
  position: absolute;
  left: 234px;
  top: -1px;
  height: 458px;

  .content {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-left: none;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
    display: flex;
  }

  .content-item {
    width: 248px;
    height: 458px;
    padding: 2px 0;
  }
  .goods-item {
    height: 76px;
    line-height: 76px;
    .link {
      display: block;
      padding: 18px 20px;
      height: 40px;
      display: flex;
      img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        vertical-align: top;
      }
      .text {
        height: 40px;
        line-height: 40px;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        transition: color 0.2s;
      }
      &:hover .text {
        color: #ff6700;
      }
    }
  }
}
</style>
