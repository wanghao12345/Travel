<template>
  <div>
    <div class="header">
      <router-link
        class="header-left"
        tag="div"
        to="/"
      >
        <div class="iconfont">&#xe65b;</div>
      </router-link>
      <div class="header-input">
        <span class="iconfont">&#xe605;</span>
        <input
          class="input"
          id="searchText"
          ref="searchText"
          placeholder="请输入地址"
          v-model='inputValue'
          type="text"
          @input="handleSearch"
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LocationHeader',
  data () {
    return {
      inputValue: '',
      timer: null,
      addressData: []
    }
  },
  mounted () {

  },
  methods: {
    handleSearch () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.inputValue) {
        this.timer = setTimeout(() => {
          axios.get('http://elm.cangdu.org/v1/pois?type=search&city_id=1&keyword=' + this.inputValue)
            .then(this.handleSearchSucc)
        }, 100)
      }
    },
    handleSearchSucc (res) {
      this.addressData = res.data
      this.$emit('getAddressData', this.addressData)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: $headerHeight
    height: $headerHeight
    background: $bgColor
    color: #fff
    display: flex
    .header-left
      width: .64rem
      float: left
      font-size: .3rem
      text-align: center
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      position: relative
      border-radius: 0.1rem
      background: #fff
      flex: 1
      margin-top: .12rem
      margin-left: .24rem
      margin-right: .2rem
      height: .64rem
      color: #ccc
      line-height: .64rem
      font-size: .2rem
      padding-left: .2rem
      .iconfont
        position: absolute
        z-index: 2
      .input
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        border: 0
        border-radius: .1rem
        box-sizing: border-box;
        padding-left: .6rem;
        color: #666
</style>
