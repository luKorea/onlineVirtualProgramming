<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="试卷EID">
              <span>{{ props.row.eid }}</span>
            </el-form-item>
            <el-form-item label="试卷标题">
              <span>{{ props.row.etitle }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="试卷EID"
        prop="eid">
      </el-table-column>
      <el-table-column
        label="试卷标题"
        prop="etitle">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-delete"
            @click="handleDelete(scope.row.eid)"
          >
            删除
          </el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleVisit(scope.row.eid)"
          >
            点击查看试卷
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <a-pagination
      :paginations="paginations"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
    <el-dialog
      title="题目"
      :visible.sync="dialog.show"
      :close-on-click-modal='false'
      :close-on-press-escape='false'
      :modal-append-to-body="false">
      <div class="form">
        <el-form
          ref="form"
          :model="formData"
          label-width="120px"
          style="margin:10px;width:auto;">
          <el-form-item prop='ID' label="试卷EID">
            <el-input type="ID" v-model="formData.eid" disabled="disabled" />
          </el-form-item>
          <el-form-item prop='ID' label="试卷标题">
            <el-input type="ID" v-model="formData.etitle"/>
          </el-form-item>
          <el-form-item  class="text_right">
            <el-button @click="dialog.show = false">取 消</el-button>
            <el-button type="primary" @click='onSubmit(formData)'>提  交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import APagination from '../a_pagination'
export default {
  name: 'examname',
  components: { APagination },
  data () {
    return {
      tableData: [],
      allTableData: [],
      formData: {
        eid: '',
        etitle: ''
      },
      eId: 0,
      dialog: { show: false },
      dialog1: { show: false },
      // 需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 20, 30, 40], // 每页显示多少条
        layout: 'total, sizes, prev, pager, next, jumper' // 翻页属性
      }
    }
  },
  created () {
    this.getExample()
  },
  methods: {
    getExample () {
      this.axios.get('/examPaper/findAll')
        .then(res => {
          const data = res.data.data
          this.list = data
          this.allTableData = data
          this.setPaginations()
        })
    },
    setPaginations () {
      // 总页数
      this.paginations.total = this.allTableData.length
      this.paginations.page_index = 1
      this.paginations.page_size = 5
      // 设置默认分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size
      })
    },
    /* 当前页的改变 */
    handleCurrentChange (page) {
      //  获取当前页
      let index = this.paginations.page_size * (page - 1)
      //  获取总数
      let nums = this.paginations.page_size * page
      let table = []
      for (let i = index; i < nums; i++) {
        if (this.allTableData[i]) {
          table.push(this.allTableData[i])
        }
      }
      this.tableData = table
    },
    /* 改变每页条数 */
    handleSizeChange (pageSizes) {
      this.paginations.page_size = 1
      this.paginations.page_size = pageSizes
      this.tableData = this.allTableData.filter((item, index) => {
        return index < pageSizes
      })
    },
    handleEdit (index, row) {
      this.dialog.show = true
      this.formData = {
        eid: row.eid,
        etitle: row.etitle
      }
    },
    handleVisit (index) {
      this.$message({
        message: `您打开的是${index}的试卷，往下滑找到对应的题目`,
        type: 'success'
      })
      this.$router.push('/v_exampledoc')
    },
    handleDelete (id) {
      this.$confirm('你确定要删除吗', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete(`/examPaper/deleteOne/${id}`)
          .then(response => {
            this.$message({
              message: response.data.msg,
              type: 'success'
            })
            this.getExample()
          })
      })
    },
    onSubmit (form) {
      const id = form.eid
      console.log(form)
      this.axios.post(`/examPaper/updateOne/${id}`, form)
        .then(res => {
          this.$message({
            message: '数据更新成功',
            type: 'success'
          })
          this.dialog.show = false
          this.getExample()
        })
    }
  }
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table .cell {
    width: 425px !important;
  }
</style>
