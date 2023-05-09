<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-tabbar></c-tabbar>
    </div>
  </div>
</template>

<script>
import CTabbar from 'coms/tabbar'

export default {
  name: 'APP',
  components: {
    CTabbar
  }
}
</script>
