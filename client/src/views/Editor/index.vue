<!-- TODO 最后一步 -->
<template>
    <div class="main clearfix">
    <pre id="editor" v-model="editor"></pre>
      <div class="content">
          <a-button ghost class="btn" type="primary" @click="getData">点击运行</a-button>
        <iframe class="edit-area" id="preview" frameborder="0" srcdoc="<!DOCTYPE html><html style='height: 100%'><head><meta charset=&quot;utf-8&quot; /></head><body style='height: 100%'><script type=&quot;text/javascript&quot;></script></body></html>"></iframe>
      </div>

    </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'
import { message } from 'ant-design-vue'

export default {
  name: 'Edit',
  data () {
    return {
      editor: ''
    }
  },
  methods: {
    getData () {
      let htmlValue = this.editor.getValue()
      console.log(htmlValue)
      if (htmlValue === '') {
        message.error('请输入内容')
      } else {
        let htmlStr = '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8" />' +
            '<style type="text/css"></style>' +
            '</head>' +
            '<body>' +
            htmlValue +
            '</body>' +
            '</html>'
        document.getElementById('preview').srcdoc = htmlStr
      }
    }
  },
  mounted () {
    ace.require('ace/ext/language_tools')
    this.editor = ace.edit('editor')
    this.editor.session.setMode('ace/mode/html')
    this.editor.setTheme('ace/theme/tomorrow')
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    })
  }
}
</script>

<style scoped lang="less">
  #editor {
    margin-top: 64px;
    width: 50%;
    height: calc(100% - 134px);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }
  .content {
    float: right;
    width: 50%;
    height: 94%;
      .btn {
        width: 100%;
        margin: 70px 0 10px;
      }
    .edit-area {
      width: 100%;
      height: 100%;
      margin-bottom: -90px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
</style>
