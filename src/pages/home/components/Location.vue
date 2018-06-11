<template>
  <div class="container">
    <router-link
      tag="div"
      to="/location">
      <div class="location-icon">
        <div class="iconfont">&#xe611;</div>
      </div>
      <div class="location-info">
        定位失败
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeLocation'
}
</script>

<style lang="stylus" scoped>
  .container
    width: 100%;
    height: 1rem;
    overflow: hidden;
    border-top: 1px solid #ccc;
    margin-top: .5rem;
    .location-icon
      float: left
      width: .5rem
      height: 100%
      line-height: 1rem
      .iconfont
        text-align: center
    .location-info
      float: left
      min-width: 1rem
      height: 100%
      font-size: .2rem
      line-height: 1rem
      text-align: center
</style>
