<template>
  <div id="app">
    <!--
      keep-alive标签包裹的路由，当有过一次的请求过后，就不会再次去请求数据。
      当加上exclude="组件名"时，这个组件每次访问时都会去请求对应的数据，不在有缓存
     -->
    <keep-alive exclude="Detail">
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
