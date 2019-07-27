<template>
<div>
  <Header></Header>
  <HomeSwiper :list="[]"></HomeSwiper>
  <HomeIcons></HomeIcons>
  <Recommend></Recommend>
</div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from './components/Swiper'
import HomeIcons from "./components/Icons"
import Recommend from "./components/Recommend"
export default {
  name: "Home",
  components: {
    Header: HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend
  }
};
</script>

<style scoped>
</style>
