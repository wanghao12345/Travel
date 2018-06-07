<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-banner
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-banner>
    </fade-animation>
  </div>
</template>

<script>
import CommonBanner from 'common/banner/Banner'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    FadeAnimation,
    CommonBanner
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .2rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        font-size: .24rem
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .27rem
</style>
