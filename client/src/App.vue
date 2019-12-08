<template>
  <div class="container">
    <main-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
import MainFooter from '@/components/MainFooter'
import MainHeader from '@/components/MainHeader'
export default {
  name: 'app',
  components: {
    MainFooter,
    MainHeader
  },
  activated: function () {
    this.getCase()
  }

}
</script>

<style lang="less">
  @import "assets/css/commons";
  .container {
    width: 100%;
    height: 100%;
  }
  .header-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 64px;
    line-height: 64px;
    background: #F9F9f9;
    border-bottom: 1px solid #DDD;
    box-sizing: border-box;
    a {
      color: #000;
      text-decoration: none;
      font-size: 16px;
      &:hover {
        color: #8acfcf;
      }
    }
  }
</style>
