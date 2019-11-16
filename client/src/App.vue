<template>
  <div class="container">
    <main-header/>
      <router-view  />
    <main-footer />
    <vueToTop
      title="回到顶部"
      type="2"
      top='200'
      size="60"
      duration="500"
      color="#5990C4"
    />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="less">
  @import "assets/css/commons";
  .container {
    width: 100%;
    height: 100%;
  }
</style>
