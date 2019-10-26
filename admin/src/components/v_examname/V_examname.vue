<template>
  <div class="form-container">
    <el-form
      class="form_container"
      :ref="formData"
      :rules="rules"
      :label-position="labelPosition"
      label-width="120px"
      :model="formData">
      <div class="Form">
        <el-tag type="primary" style="margin-bottom: 10px">试卷录入模块</el-tag>
        <el-form-item label="试卷名" prop="eTitle">
          <el-input v-model="formData.eTitle"></el-input>
        </el-form-item>
        <el-button class="btn" style="width: 100%;" plain type="primary" @click="submitForm(formData)">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'VexamName',
  data () {
    return {
      labelPosition: 'bottom',
      rules: {
        eTitle: [{ required: true, message: '请输入试卷名', trigger: 'blur' }]
      },
      formData: { eTitle: '' }
    }
  },
  methods: {
    submitForm (value) {
      this.$refs[value].validate((valid) => {
        if (valid) {
          this.$axios.post('/examPaper/insertOne', value)
            .then(data => {
              // 添加成功
              this.$message({
                message: data.data.msg,
                type: 'success'
              })
              console.log(data)
              this.formData = {}
            }).catch(() => {
              this.$message({
                message: '添加失败',
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .el-textarea__inner
    height 137px !important
  .form-container
    position relative
    width 100%
    height 100%
    .el-form-item__label
      text-align left
    .form_container
      width 550px
      height 250px
      position absolute
      top 20%
      left 30%
      padding 20px
      border-radius 5px
      text-align center
      .Form
        background-color #fff
        padding 20px 20px 20px 20px
        border-radius 5px
        box-shadow 0px 5px 10px #cccc
</style>
