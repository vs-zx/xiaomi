// 首页 手机部分以下 的内容
<template>
  <div class="home-main" v-if="list">
    <main-block :info="list.jiadian"></main-block>
    <home-ad :adIndex="3"></home-ad>
    <main-block :info="list.zhineng"></main-block>
    <home-ad :adIndex="4"></home-ad>
    <main-block :info="list.dapei"></main-block>
    <home-ad :adIndex="5"></home-ad>
    <main-block :info="list.peijian"></main-block>
    <home-ad :adIndex="6"></home-ad>
    <main-block :info="list.zhoubian"></main-block>
    <home-ad :adIndex="7"></home-ad>

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
  props:{
    list:{
      type:Object,
      defaulte:{}
    }
  },
  components: {
    MainBlock,
    HomeAd,
    HomeVideo
  },
};
</script>

<style></style>
