<template>
  <div>
    <location-header></location-header>
    <location-list></location-list>
  </div>
</template>

<script>
import LocationHeader from './components/Header'
import LocationList from './components/List'
export default {
  name: 'Location',
  components: {
    LocationHeader,
    LocationList
  }
}
</script>

<style lang="stylus" scoped>

</style>
