<template>
    <card :title='title' :list='list'></card>
</template>

<script>
import Card from '@/components/Card'
import { getCssList } from '@/api'

export default {
  name: 'CssDoc',
  components: {
    Card
  },
  data () {
    return {
      title: 'CSS文档',
      list: []
    }
  },
  create () {
    this.getCss()
  },
  methods: {
    async getCss () {
      let data = await getCssList()
      this.list = data.data || ''
    }
  }
}
</script>

<style scoped lang="less">
</style>
