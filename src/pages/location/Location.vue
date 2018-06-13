<template>
  <div>
    <location-header @getAddressData="handleGetAddress"></location-header>
    <location-list :addressList="addressList"></location-list>
  </div>
</template>

<script>
import LocationHeader from './components/Header'
import LocationList from './components/List'
export default {
  name: 'Location',
  data () {
    return {
      addressList: []
    }
  },
  components: {
    LocationHeader,
    LocationList
  },
  methods: {
    handleGetAddress (data) {
      this.addressList = data
      console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
