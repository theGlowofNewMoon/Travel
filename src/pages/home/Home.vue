<template>
  <div>
    <Header></Header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import Recommend from "./components/Recommend";
import Weekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header: HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  }
};
</script>

<style scoped>
</style>
