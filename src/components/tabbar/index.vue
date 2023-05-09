<template>
  <ul class="g-tabbar">
    <router-link
      class="g-tabbar-item"
      v-for="(navItem, NavIndex) in navList"
      :key="NavIndex"
      tag="li"
      :to="navItem.linkUrl"
    >
      <i class="iconfont" :class="navItem.linkIcon"></i>
      <span>{{ navItem.linkName }}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'CTabbar',
  data () {
    return {
      navList: [
        {
          linkUrl: '/home',
          linkIcon: 'icon-home',
          linkName: '首页'
        },
        {
          linkUrl: '/category',
          linkIcon: 'icon-category',
          linkName: '分类'
        },
        {
          linkUrl: '/cart',
          linkIcon: 'icon-cart',
          linkName: '购物车'
        },
        {
          linkUrl: '/personal',
          linkIcon: 'icon-personal',
          linkName: '个人中心'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/scss/mixins';

  .router-link-active{
    color: $link-active-color;
  }
</style>
