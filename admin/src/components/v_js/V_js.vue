<template>
  <div>
    <el-tag size="medium">JavaScript模块</el-tag>
  </div>
</template>

<script>
export default {
  name: 'V_javascript',
  data () {
    return {
      formData: {
        name: '',
        desc: '',
        example: ''
      },
      options: 'js',
      label: {
        Name: 'JavaScript标签',
        Desc: '描述',
        Example: '案例'
      }
    }
  },
  methods: {
    submitForm (value) {}
  }
}
</script>

<style scoped lang="stylus">
  .el-tag
    margin 10px
</style>
