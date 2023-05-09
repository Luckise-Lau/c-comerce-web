<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>
    <div></div>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './header.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/scss/mixins';

  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
