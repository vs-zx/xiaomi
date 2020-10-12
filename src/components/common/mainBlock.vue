<template>
  <div class="main">
    <div class="container" v-if="info">
      <!-- 标题 -->
      <div class="main-title">
        <h2 class="text">{{ info.title }}</h2>
        <div class="more">
          <ul class="tab">
            <li
              class="tab-item"
              v-for="(item, index) of info.tabList"
              :key="index"
              :class="{ active: currentIdx === index }"
              @mouseenter="changeTab(index, item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <!-- 内容 -->
      <div class="main-content">
        <div class="left">
          <ul class="left-wrap">
            <li
              class="left-item"
              v-for="(item, index) of info.bgList"
              :key="index"
            >
              <a href="###" class="left-link">
                <img v-lazy="item" class="left-leftImg" />
              </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="list-wrap" v-show="currentIdx === 0">
            <li class="list-item" v-for="item of info.hotList" :key="item.id">
              <a href="###" class="list-link">
                <div class="pic">
                  <img v-lazy="item.url" alt="subItem.title" class="pic-img" />
                </div>
                <h3 class="name">{{ item.title }}</h3>
                <p class="desc">{{ item.desc }}</p>
                <p class="price">
                  <span class="nowPrice">{{ item.price }}</span>
                  <span class="oldPrice"> {{ item.oldPrice }}</span>
                </p>
              </a>
            </li>
          </ul>
          <ul class="list-wrap" v-show="currentIdx === 1">
            <li class="list-item" v-for="item of info.list2" :key="item.id">
              <a href="###" class="list-link">
                <div class="pic">
                  <img v-lazy="item.url" alt="subItem.title" class="pic-img" />
                </div>
                <h3 class="name">{{ item.title }}</h3>
                <p class="desc">{{ item.desc }}</p>
                <p class="price">
                  <span class="nowPrice">{{ item.price }}</span>
                  <span class="oldPrice"> {{ item.oldPrice }}</span>
                </p>
              </a>
            </li>
          </ul>
          <ul class="list-wrap" v-if="currentIdx === 2">
            <li class="list-item" v-for="item of info.list3" :key="item.id">
              <a href="###" class="list-link">
                <div class="pic">
                  <img v-lazy="item.url" alt="subItem.title" class="pic-img" />
                </div>
                <h3 class="name">{{ item.title }}</h3>
                <p class="desc">{{ item.desc }}</p>
                <p class="price">
                  <span class="nowPrice">{{ item.price }}</span>
                  <span class="oldPrice"> {{ item.oldPrice }}</span>
                </p>
              </a>
            </li>
          </ul>
          <div class="hot">
            <div class="text">
              浏览更多
              <br />
              <span>{{ hotText }}</span>
            </div>
            <i class="iconfont hot-icon">&#xe776;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      currentIdx: 0,
      hotText: "热门"
    };
  },
  methods: {
    changeTab(idx, item) {
      this.currentIdx = idx;
      this.hotText = item;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin boxShadow() {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.2);
}

.main {
  background: rgb(245, 245, 245);
}
// 标题
.main-title {
  width: 100%;
  height: 58px;
  position: relative;
  .text {
    line-height: 58px;
    font-size: 22px;
    font-weight: 200;
    color: #333;
  }
  .more {
    position: absolute;
    top: 0;
    right: 0;
    .tab {
      padding-top: 16px;
    }
    .tab-item {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      margin-left: 30px;
      font-size: 16px;
      color: #333;
      cursor: pointer;
      transition: border 0.3s;
      &.active {
        color: #ff6700;
        border-bottom: 2px solid #ff6700;
      }
    }
  }
}
// 内容
.main-content {
  display: flex;
  height: 628px;
  .left {
    width: 234px;
  }
  .right {
    width: 992px;
    margin-left: 14px;
    position: relative;
    .hot {
      position: absolute;
      right: 0;
      bottom: 14px;
      width: 234px;
      height: 93px;
      padding-top: 50px;
      background: #fff;
      transition: all 0.2s linear;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      &:hover {
        @include boxShadow();
      }
      .text {
        margin: 0 30px;
        font-size: 18px;
        color: #333;
        span {
          font-size: 12px;
          color: #757575;
        }
      }
      .hot-icon {
        font-size: 48px;
        color: #ff6700;
        margin-right: 30px;
      }
    }
  }
}

// 为每个商品块单独设置样式
// 左侧
.left-wrap {
  .left-item {
    width: 234px;
    height: 300px;
    margin-bottom: 14px;
    background: #fff;
    transition: all 0.2s linear;
    &:hover {
      @include boxShadow();
    }
    .left-link {
      display: block;
      .left-leftImg {
        width: 234px;
        height: 300px;
      }
    }
  }
}

// 右侧
.list-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .list-item {
    width: 234px;
    height: 260px;
    padding: 20px 0;
    margin-bottom: 14px;
    background: #fff;
    text-align: center;
    transition: all 0.2s linear;

    &:hover {
      @include boxShadow();
    }
    .list-link {
      display: block;
      // 左边
      .list-leftImg {
        width: 234px;
        height: 260px;
        // transform: translateY(-20px);
      }
      // 右边
      .pic {
        margin: 0 auto 18px;

        .pic-img {
          width: 160px;
          height: 160px;
        }
      }
      .name,
      .desc {
        margin: 0 10px 2px;
        font-size: 14px;
        font-weight: 400;
        color: #333;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .desc {
        height: 18px;

        font-size: 12px;
        color: #b0b0b0;
        margin-bottom: 10px;
      }
      .price {
        .nowPrice {
          color: #ff6700;
        }
        .oldPrice {
          color: #b0b0b0;
          text-decoration: line-through;
          padding-left: 10px;
        }
      }
    }
  }
}
// 处理右侧最后一个商品
.list-item:last-child {
  position: relative;
  padding-top: 50px;
  padding-bottom: 0;
  height: 93px;
  text-align: left;

  .list-link {
    .pic {
      position: absolute;
      top: 20px;
      right: 20px;

      .pic-img {
        width: 80px;
        height: 80px;
      }
    }
    .name {
      margin: -10px 110px 5px 30px;
      font-size: 14px;
      font-weight: 400;
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: normal;
    }
    .desc {
      display: none;
    }
    .price {
      padding-left: 30px;
      .nowPrice {
        color: #ff6700;
      }
      .oldPrice {
        color: #b0b0b0;
        text-decoration: line-through;
        padding-left: 10px;
      }
    }
  }
}
</style>
