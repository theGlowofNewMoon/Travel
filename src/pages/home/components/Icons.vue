<template>
  <div class="icons">
    <swiper :option="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" src="./1.png" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data: function() {
    return {
      swiperOption: {},
      iconList: [
        {
          id: "001",
          imgUrl: "./1.png",
          desc: "热门景点"
        },
        {
          id: "002",
          imgUrl: "./1.png",
          desc: "滑雪季"
        },
        {
          id: "003",
          imgUrl: "./1.png",
          desc: "热门景点"
        },
        {
          id: "004",
          imgUrl: "./1.png",
          desc: "滑雪季"
        },
        {
          id: "005",
          imgUrl: "./1.png",
          desc: "热门景点"
        },
        {
          id: "006",
          imgUrl: "./1.png",
          desc: "滑雪季"
        },
        {
          id: "007",
          imgUrl: "./1.png",
          desc: "热门景点"
        },
        {
          id: "008",
          imgUrl: "./1.png",
          desc: "滑雪季"
        },
        {
          id: "009",
          imgUrl: "./1.png",
          desc: "热门景点"
        },
        {
          id: "010",
          imgUrl: "./1.png",
          desc: "滑雪季"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons
  margin-top: 0.1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>

