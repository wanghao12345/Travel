<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe65b;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe605;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: 0.86rem;
    height: 0.86rem;
    background: $bgColor;
    color: #fff;
    display: flex;
    .header-left
      width: .64rem
      float: left
      font-size: .3rem
      text-align: center
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      border-radius: 0.1rem;
      background: #fff;
      flex: 1
      margin-top: .12rem
      margin-left: .24rem
      height: .64rem
      color: #ccc
      line-height: .64rem
      font-size: .2rem
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      font-size: .2rem
      text-align: center
      .arrow-icon
        font-size: .2rem
</style>
