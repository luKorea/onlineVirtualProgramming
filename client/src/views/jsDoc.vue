<template>
    <div>
      <card :title='titlemth' :list='listMth'></card>
      <div style="margin-top: 0">
        <card :title='titleobj' :list='listObj'></card>
      </div>
      <card :title='titlepro' :list='listPro'></card>
    </div>
</template>

<script>
import Card from '@/components/Card'
import { getJsMth, getJsObj, getJsPro } from '@/api'

export default {
  name: 'JSDoc',
  components: {
    Card
  },
  data () {
    return {
      titlemth: 'JavaScript方法',
      titleobj: 'JavaScript对象接口',
      titlepro: 'JavaScript属性',
      listMth: [],
      listObj: [],
      listPro: []
    }
  },
  create () {
    this.getMth()
    this.getObj()
    this.getPro()
  },
  methods: {
    async getMth () {
      let mthData = await getJsMth()
      this.listMth = mthData.data || ''
    },
    async getObj () {
      let objData = await getJsObj()
      this.listObj = objData.data || ''
    },
    async getPro () {
      let proData = await getJsPro()
      this.listPro = proData.data || ''
    }
  }
}
</script>

<style scoped lang="less">
</style>
