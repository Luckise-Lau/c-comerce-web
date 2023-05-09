<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <h2 class="mine-navbar-title" v-if="title">
      <span class="mine-navbar-text" v-text="title"></span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'MeNavbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '@/assets/scss/mixins';

  .mine-navbar{
    @include flexBetween();
    height: 50px;
    background-color: #fff;
    position: relative;

    &-left{
      margin-left: 10PX;

      ~ mine-navbar-right{
        position: static;
      }
    }

    &-center{
      flex: 1;
      margin: 0 10PX;

      ~ mine-navbar-right{
        position: static;
      }
    }

    &-right{
      margin-right: 10PX;
      position: absolute;
      right: 0;
      @include flexCenter();
      height: 100%;
    }

    &-title{
      position: absolute;
      bottom: 0;
      top: 0;
      left: 20%;
      right: 20%;
      @include flexCenter();
      text-align: center;
    }

    &-text{
      font-size: 18px;
      @include ellipsis();
      line-height: 1.5;
      width: 100%;
    }
  }
</style>
