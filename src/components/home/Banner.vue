<template>
  <div class="banner">
    <div class="container">
      <div class="swiper-wrap">
        <swiper :options="swiperOptionSwp1" v-if="showSwiper">
          <swiper-slide v-for="item of list" :key="item.id">
            <img :src="item.imgUrl" />
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swp1" slot="button-prev"></div>
          <div class="swiper-button-next swp1" slot="button-next"></div>
        </swiper>
      </div>

      <div class="banner-sub">
        <div class="channel">
          <ul class="channel-list">
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon1.png" alt="小米秒杀" />
                小米秒杀
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon2.png" alt="企业团购" />
                企业团购
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon3.png" alt="F码通道" />
                F码通道
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon4.png" alt="米粉卡" />
                米粉卡
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon5.png" alt="以旧换新" />
                以旧换新
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/icon/icon6.png" alt="话费充值" />
                话费充值
              </a>
            </li>
          </ul>
        </div>
        <div class="promo">
          <ul class="promo-list">
            <li>
              <a href="javascript:;">
                <img v-lazy="require('../../assets/img/banner/h1.jpg')" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img v-lazy="require('../../assets/img/banner/h2.jpg')" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img v-lazy="require('../../assets/img/banner/h3.jpg')" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      swiperOptionSwp1: {
        // 自动切换
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        // 箭头按钮
        navigation: {
          nextEl: ".swiper-button-next.swp1",
          prevEl: ".swiper-button-prev.swp1"
        },
        // 分页器配置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="scss" scoped>
// 设置圆点索引的位置
::v-deep .swiper-wrap {
  .swiper-pagination {
    width: 94%;
    padding: 0 3%;
    text-align: right;
    bottom: 25px;
    .swiper-pagination-bullet-active {
      opacity: 0.7;
    }
  }
}

.banner {
  margin-bottom: 26px;
  // swiper滑动展示部分
  .swiper-wrap {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  // banner区下半部分
  .banner-sub {
    margin-top: 14px;
    overflow: hidden;
    .channel {
      float: left;
      width: 234px;
      .channel-list {
        padding: 3px;
        background: #5f5750;
        overflow: hidden;
        li {
          position: relative;
          float: left;
          width: 70px;
          height: 82px;
          padding: 0 3px;
          // 修饰的分隔线条
          &:before {
            position: absolute;
            left: 0;
            top: 6px;
            content: "";
            width: 1px;
            height: 70px;
            background: #665e57;
          }
          &:after {
            position: absolute;
            left: 3px;
            top: 1px;
            content: "";
            width: 64px;
            height: 1px;
            background: #665e57;
          }
        }
        a {
          display: block;
          margin-top: 18px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          opacity: 0.7;
          transition: opacity 0.2s;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
        img {
          display: block;
          width: 24px;
          height: 24px;
          margin: 0 auto 4px;
        }
      }
    }
    .promo {
      float: left;
      width: 978px;
      margin-left: 14px;
      li {
        float: left;
        width: 316px;
        height: 170px;
        margin-left: 15px;
        &:first-child {
          margin-left: 0;
        }
      }
      img {
        width: 100%;
      }
    }
  }
}

// 左右箭头
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  margin-top: -35px;
  color: #ccc;
  width: 41px;
  height: 70px;
  transition: all 0.2s;
  &:after {
    font-size: 35px;
  }
  &:hover {
    color: #eee;
    background: rgba(0, 0, 0, 0.4);
  }
}
.swiper-button-prev {
  left: 234px;
}
.swiper-button-next {
  right: 0;
}
</style>
