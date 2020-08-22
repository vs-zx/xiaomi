// 首页 手机部分以下 的内容
<template>
  <div class="home-main">
    <main-block :info="jiadian"></main-block>
    <home-ad :adInx="3"></home-ad>
    <main-block :info="zhineng"></main-block>
    <home-ad :adInx="4"></home-ad>
    <main-block :info="dapei"></main-block>
    <home-ad :adInx="5"></home-ad>
    <main-block :info="peijian"></main-block>
    <home-ad :adInx="6"></home-ad>
    <main-block :info="zhoubian"></main-block>
    <home-ad :adInx="7"></home-ad>

    <!-- 底部视频区 -->
    <home-video></home-video>
  </div>
</template>

<script>
import MainBlock from "common/mainBlock";
import HomeAd from "common/ad";
import HomeVideo from "./footVideo"

import axios from "axios";

export default {
  data() {
    return {
      jiadian: {},
      zhineng: {},
      dapei: {},
      peijian: {},
      zhoubian: {}
    };
  },
  components: {
    MainBlock,
    HomeAd,
    HomeVideo
  },
  methods: {
    getMainInfo() {
      axios.get("/api/json/main.json").then(this.getMainInfoSuccess);
    },
    getMainInfoSuccess(res) {
      const data = res.data;
      if (data.ret) {
        console.log(data);
        this.jiadian = data.jiadian;
        this.zhineng = data.zhineng;
        this.dapei = data.dapei;
        this.peijian = data.peijian;
        this.zhoubian = data.zhoubian;
      }
    }
  },
  mounted() {
    this.getMainInfo();
  }
};
</script>

<style></style>
