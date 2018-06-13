<template>
  <div>
    <div class="current">
        <span class="iconfont">&#xe65c;</span>
        定位当前地址
    </div>
    <div class="list">
      <div class="item" v-show="!addressList.length">
        <p class="location-detail">暂无无搜索内容</p>
      </div>
      <div class="item" v-for="(item, index) of addressList" :key="index">
        <p class="location-title">{{item.name}}</p>
        <p class="location-detail">{{item.address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationList',
  props: {
    addressList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .current
    font-size: 0.2rem;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #ccc;
    .iconfont
      color: $bgColor
  .list
    width: 100%
    .item
      width: 100%
      height: 1rem
      box-sizing: border-box
      padding: 0 .1rem
      border-bottom: 1px solid #ccc
      .location-title
        height: 50%
        font-size: .25rem
        line-height: .5rem
        ellipsis()
      .location-detail
        height: 50%
        font-size: .25rem
        line-height: .5rem
        color: #666
        ellipsis()
</style>
