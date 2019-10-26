<template>
  <div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue'
export default {
  name: 'HTMLDoc',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios.get('/html/findAll')
        .then(res => {
          if (res.data.code === 0) {
            this.list = res.data.data
            console.log(this.list)
          } else {
            message.warn('获取数据失败')
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
