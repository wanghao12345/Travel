<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- scoped表示样式只对当前组件有效 -->
<style lang="stylus" scoped>
  .header
    line-height: 0.86rem;
    height: 0.86rem;
    background: #00bcd4;
    color: #fff;
    display: flex;
    .header-left
      width: .64rem
      float: left
      font-size: .3rem
      text-align: center
    .header-input
      border-radius: 0.1rem;
      background: #fff;
      flex: 1
      margin-top: .12rem
      margin-left: .24rem
      height: .64rem
      color: #ccc
      line-height: .64rem
      font-size: .3rem
    .header-right
      width: 1.24rem
      float: right
      font-size: .3rem
      text-align: center
</style>
