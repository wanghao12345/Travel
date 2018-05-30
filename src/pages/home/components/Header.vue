<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe65b;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe605;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: $headerHeight;
    height: $headerHeight;
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
      color: #fff
      .arrow-icon
        font-size: .2rem
</style>
