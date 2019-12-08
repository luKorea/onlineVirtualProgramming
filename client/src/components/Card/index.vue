<template>
  <div class="cards">
    <h1 class="title">{{title}}</h1>
    <hr>
    <div v-for="item in list" :key="item.id" class="card-main">
        <h3 class="card-main">{{item.desc}} / {{item.name}}</h3>
      <pre class="example"><span style="font-size: 20px;color: #ff697b">实例</span><br>{{item.example}}</pre>
      <button @click="handleEditor(item.example)" class="editor-btn">尝试一下</button>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    title: {
      type: String,
      default: 'HTML文档'
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleEditor (value) {
      this.$router.push({
        path: '/editor',
        query: { example: value }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .cards {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 64px auto;
    padding: 10px;
    .title {
      text-align: center;
    }
    .editor-btn {
      border: none;
      display: inline-block;
      outline: 0;
      padding: 8px 18px;
      margin-top: 15px;
      margin-bottom: 10px;
      vertical-align: middle;
      overflow: hidden;
      text-decoration: none;
      color: #fff;
      background-color: #e9686b;
      text-align: center;
      transition: .2s ease-out;
      cursor: pointer;
      white-space: nowrap;
      box-shadow: 0px 2px 6px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24);
      border-radius: 2px;
    }
    .card-main {
      color: #2C3E50;
    }
    .example {
      background-color: #F5F5F5;
      margin-top: 10px;
      padding: 20px;
      border-radius: 4px;
      border: 1px dotted #785;
    }
  }
</style>
