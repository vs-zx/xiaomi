<template>
  <div class="phone">
    <div class="container">
      <div class="phone-title">
        <h2 class="text">手机</h2>
        <div class="more">
          <a href="###" class="more-link">
            查看全部
            <i class="iconfont more-icon">&#xe777;</i>
          </a>
        </div>
      </div>

      <div class="phone-content" v-if="list">
        <div class="left">
          <a href="###" class="left-link">
            <img v-lazy="list.bgImg" />
          </a>
        </div>
        <div class="right">
          <ul class="phone-list">
            <li
              class="phone-item"
              v-for="item of list.phoneList"
              :key="item.id"
            >
              <a href="###" class="item-link">
                <div class="item-img">
                  <img v-lazy="item.url" alt="subItem.title" />
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
        </div>
      </div>
      <!-- 广告 -->
      <home-ad :adIndex="2"></home-ad>
    </div>
  </div>
</template>

<script>
import homeAd from "common/ad";

export default {
  props: {
    list: {
      type: Object,
      default: {},
    },
  },
  components: {
    homeAd,
  },
};
</script>

<style lang="scss" scopd>
.phone {
  background: rgb(245, 245, 245);
}
// 标题
.phone-title {
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
    height: 58px;
    line-height: 58px;
    .more-link {
      font-size: 16px;
      color: #424242;
      transition: all 0.4s;
      .more-icon {
        font-size: 20px;
        color: #b0b0b0;
        vertical-align: top;
        transition: all 0.4s;
      }
      &:hover {
        color: #ff6700;
      }
      &:hover .more-icon {
        color: #ff6700;
      }
    }
  }
}
// 内容
.phone-content {
  display: flex;
  height: 628px;
  .left {
    width: 234px;
    .left-link {
      display: block;
      img {
        width: 234px;
        height: 614px;
      }
    }
  }
  .right {
    width: 992px;
    .phone-list {
      width: 100%;
      height: 100%;
    }
    .phone-item {
      float: left;
      width: 234px;
      height: 260px;
      padding: 20px 0;
      margin-left: 14px;
      margin-bottom: 14px;
      background: #fff;
      transition: all 0.2s linear;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.2);
      }
      .item-link {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        .item-img {
          margin: 0 auto 18px;
          img {
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
}
</style>
