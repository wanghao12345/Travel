<template>
  <div id="app">
    <!-- keep-alive标签包裹的路由，当有过一次的请求过后，就不会再次去请求数据 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
