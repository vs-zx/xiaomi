<template>
    <div class="home">
        <home-header></home-header>
        <home-nav></home-nav>
        <home-banner></home-banner>
        <home-flash></home-flash>
        <home-phone></home-phone>
        <home-main></home-main>
        <home-footer></home-footer>
        <tool-bar></tool-bar>
    </div>
</template>

<script>
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
    components: {
        HomeHeader,
        HomeNav,
        HomeBanner,
        HomeFlash,
        HomePhone,
        HomeMain,
        HomeFooter,
        ToolBar
    }
};
</script>

<style>
.container{
    width:1226px;
    margin:0 auto;
}
</style>
