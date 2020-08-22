<template>
  <div class="flash">
    <div class="container">
      <div class="title">
        <h2 class="text">小米闪购</h2>
      </div>
      <div class="content">
        <div class="time">
          <div class="round">{{ time }}:00 场</div>
          <i class="iconfont time-icon">&#xe60d;</i>
          <div class="desc">距离结束还有</div>
          <div class="countdown">
            <span>{{ hour }}</span>
            <i>:</i>
            <span>{{ minute }}</span>
            <i>:</i>
            <span>{{ second }}</span>
          </div>
        </div>
        <div class="swiper-wrap">
          <swiper :options="swiperOptions" v-if="list.length">
            <swiper-slide v-for="(item, index) in pages" :key="index">
              <ul class="swiper-inner-wrap">
                <li class="item" v-for="subItem in item" :key="subItem.id">
                  <a href="###" class="item-link">
                    <div class="img">
                      <img :src="subItem.url" alt="subItem.title" />
                    </div>
                    <h3 class="name">
                      {{ subItem.title }}
                    </h3>
                    <p class="desc">{{ subItem.desc }}</p>
                    <p class="price">
                      <span class="nowPrice">{{ subItem.price }}</span>
                      <span class="oldPrice"> {{ subItem.oldPrice }}</span>
                    </p>
                  </a>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
    <home-ad :adInx="1"></home-ad>
  </div>
</template>

<script>
import axios from "axios";
import homeAd from "common/ad";

export default {
  name: "HomeFlash",
  data() {
    return {
      time: 0,
      hour: 0,
      minute: 0,
      second: 0,
      list: [],
      swiperOptions: {
        speed: 1000,
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    homeAd
  },
  methods: {
    countTime() {
      //获取当前时间
      let date = new Date();
      let now = Date.now();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hours = date.getHours();
      // 获取场次时间，每4小时一场
      this.time = Math.floor(hours / 4) * 4+2;
      //截止时间 以场次为基准，4小时后的时间
      let endDate = new Date(year, month, day, this.time + 4);
      let end = endDate.getTime();
      // 时间差
      let timeDiff = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      let h, m, s;
      if (timeDiff >= 0) {
        h = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
        m = Math.floor((timeDiff / 1000 / 60) % 60);
        s = Math.floor((timeDiff / 1000) % 60);
      }
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      // 赋值给指定数据
      this.hour = h;
      this.minute = m;
      this.second = s;
      // 递归调用
      setTimeout(this.countTime, 1000);
    },
    getFlashInfo() {
      axios.get("/api/json/flash.json").then(this.getFlashInfoSuccess);
    },
    getFlashInfoSuccess(res) {
      this.list = res.data;
    }
  },
  computed: {
    // 将list数组数据分页
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 4);
        // 将 pages[page] 初始化为空数组
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  mounted() {
    this.countTime();
    this.getFlashInfo();
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.flash {
  background: rgb(245, 245, 245);
  // 标题
  .title {
    width: 100%;
    height: 58px;
    .text {
      font-size: 22px;
      color: #333;
      font-weight: 200;
      line-height: 58px;
    }
  }
  // 下方内容
  .content {
    height: 340px;
    display: flex;
    .time {
      width: 234px;
      height: 300px;
      padding-top: 39px;
      border-top: 1px solid #e53935;
      background: #f1eded;
      text-align: center;
      display: flex;
      flex-direction: column;
      .round {
        height: 30px;
        line-height: 30px;
        padding-top: 15px;
        font-size: 21px;
        color: #ef3a3b;
      }
      .time-icon {
        display: inline-block;
        margin: 25px auto 25px 70px;
        font-size: 70px;
        color: rgb(229, 57, 52);
      }
      .desc {
        height: 22px;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.54);
      }
      .countdown {
        width: 168px;
        margin: 28px auto 0;
        span {
          float: left;
          width: 46px;
          height: 46px;
          line-height: 46px;
          font-size: 24px;
          color: #fff;
          background: #605751;
        }
        i {
          float: left;
          width: 15px;
          height: 46px;
          line-height: 46px;
          font-size: 28px;
          color: #605751;
          font-style: normal;
        }
      }
    }
    .swiper-wrap {
      width: 978px;
      height: 100%;
      margin-left: 14px;
    }
  }
}

// swiper
.swiper-wrap {
  .swiper-inner-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .item {
      width: 234px;
      height: 340px;
      border-top: 1px solid #e53935;
      background: #fff;
      &:nth-child(2) {
        border-top: 1px solid #00c0a5;
      }
      &:nth-child(3) {
        border-top: 1px solid #ffac13;
      }
      &:last-child {
        border-top: 1px solid #83c44e;
      }
    }
    .item-link {
      display: block;
      width: 100%;
      padding-top: 39px;
      text-align: center;
      .img {
        margin: 0 auto 22px;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .name,
      .desc {
        margin: 0 20px 3px;
        font-size: 14px;
        font-weight: 400;
        color: #212121;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .desc {
        font-size: 12px;
        color: #b0b0b0;
        margin-bottom: 12px;
      }
      .price {
        .nowPrice {
          color: #ff6700;
        }
        .oldPrice {
          color: #b0b0b0;
          text-decoration: line-through;
        }
      }
    }
  }
}

// swiper箭头
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 45px;
  width: 24px;
  height: 16px;
  padding: 3px 5px;
  text-align: center;
  border: 1px solid #e0e0e0;
  outline: none;
  transition: color 0.5s;

  &:after {
    line-height: 16px;
    font-size: 14px;
    font-weight: 700;
    color: #b0b0b0;
  }
  &:hover:after {
    color: #ff6700;
  }
}
.swiper-button-prev {
  left: auto;
  right: 35px;
}
.swiper-button-next {
  right: 0;
}
</style>
