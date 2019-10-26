<template>
  <div class="header-wrapper">
        <router-link to="/main">首页</router-link>
        <router-link to="/htmldoc">HTML文档</router-link>
        <router-link to="/cssdoc">CSS文档</router-link>
        <router-link to="/jsdoc">JavaScript文档</router-link>
        <router-link to="/editor">在线编辑</router-link>
        <router-link to="/example">在线测试</router-link>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
  .header-wrapper {
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
