<template>
<div>
  <Header></Header>
  <HomeSwiper :list="[]"></HomeSwiper>
  <HomeIcons></HomeIcons>
</div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from './components/Swiper'
import HomeIcons from "./components/Icons"
export default {
  name: "Home",
  components: {
    Header: HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>

<style scoped>
</style>
