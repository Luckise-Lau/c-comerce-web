<template>
  <ul class="navContainer">
    <li class="navItem" v-for="(navItem, index) in navList" :key="index">
      <a class="navLink" :href="navItem.linkUrl">
        <img :src="navItem.picUrl" :alt="navItem.text">
        <span>{{ navItem.text }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { navList } from './config'

export default {
  name: 'HomeNav',
  created () {
    this.navList = navList
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/scss/mixins';

  .navContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    background: #fff;

    & > .navItem{
      width: 20%;
      margin-bottom: 15px;

      & > .navLink{
        @include flexCenter(column);

        & > img{
          width: 60%;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
