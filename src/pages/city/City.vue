<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotList" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @letterchange="letterchange"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/CityHeader";
import CitySearch from "./components/CitySearch";
import CityList from "./components/CityList";
import CityAlphabet from "./components/CityAlphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotList: [],
      cities: {},
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotList = data.hotCities;
      }
    },
    letterchange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>
