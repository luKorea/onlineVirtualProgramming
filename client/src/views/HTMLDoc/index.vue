<template>
    <card :title='title' :list='list'></card>
</template>

<script>
import Card from '@/components/Card'
import { getHtmlList } from '@/api'

export default {
  name: 'HTMLDoc',
  components: {
    Card
  },
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    this.getHtml()
  },
  methods: {
    async getHtml() {
      let data = await getHtmlList()
      this.list = data.data || ''
    }
  }
}
</script>

<style scoped lang="less">
</style>
