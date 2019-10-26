<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'CSSDoc',
  data () {
    return {
      title: 'CSS文档',
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios.get('/css/findAll')
        .then(res => {
          if (res.data.code === 0) {
            this.list = res.data.data || ''
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">

</style>
