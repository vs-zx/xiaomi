<template>
  <div class="home">
    <home-header></home-header>
    <home-nav :list="navData"></home-nav>
    <home-banner :list="bannerDate"></home-banner>
    <home-flash :list="flashDate"></home-flash>
    <home-phone :list="phoneDate"></home-phone>
    <home-main :list="otherGoods"></home-main>
    <home-footer></home-footer>
    <tool-bar></tool-bar>
  </div>
</template>

<script>
import axios from "axios";

import HomeHeader from "@/components/home/Header.vue";
import HomeNav from "@/components/home/Nav.vue";
import HomeBanner from "@/components/home/Banner.vue";
import HomeFlash from "@/components/home/Flash.vue";
import HomePhone from "@/components/home/Phone.vue";
import HomeMain from "@/components/home/homeMain.vue";
import HomeFooter from "@/components/home/Footer.vue";
import ToolBar from "@/components/home/ToolBar.vue";

export default {
  name: "Home",
  data() {
    return {
      navData: {},
      bannerDate: [],
      flashDate: [],
      phoneDate: {},
      otherGoods: {},
    };
  },
  components: {
    HomeHeader,
    HomeNav,
    HomeBanner,
    HomeFlash,
    HomePhone,
    HomeMain,
    HomeFooter,
    ToolBar,
  },
  methods: {
    getHomeDate() {
      axios.get("/api/json/data.json").then(this.getHomeDateSucess);
    },
    getHomeDateSucess(res) {
      const data = res.data;
      if (data.ret) {
        this.navData = data.navData;
        this.bannerDate = data.bannerDate;
        this.flashDate = data.flashDate;
        this.phoneDate = data.phoneDate;
        this.otherGoods = data.otherGoods;
      }
    },
  },
  mounted() {
    this.getHomeDate();
  },
};
</script>

<style>
.container {
  width: 1226px;
  margin: 0 auto;
}
</style>
