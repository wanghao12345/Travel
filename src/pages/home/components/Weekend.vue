<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul v-if="showSwiper">
      <li class="item" v-for="item of list" :key=item.id>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }  
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-size: .2rem
  .item-img
    width: 100%
    box-sizing: border-box;
  .item-info
    flex: 1
    padding: .1rem
    position: relative
    min-width: 0
    .item-title
      font-size: .32rem
      line-height: .54rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .2rem
      color: #ccc
      ellipsis()
</style>
