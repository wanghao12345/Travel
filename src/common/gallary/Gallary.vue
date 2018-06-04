<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1801/56/568ebf34301216dfa3.img.jpg_350x240_ead0df92.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1801/4d/4db181dbf5a630bea3.img.jpg_350x240_e7511b4e.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1801/45/450030bd6133de20a3.img.jpg_350x240_880023b1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1801/d2/d2b63b96cbb14b61a3.img.jpg_350x240_4ce7216c.jpg" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOption: {
        pagination: 'swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      heigth: 0
      overflow: hidden
      .gallary-img
        width: 100%
</style>
