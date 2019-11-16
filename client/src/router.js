import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import editor from '@/views/Editor'
import jsDoc from '@/views/JSDoc'
import htmlDoc from '@/views/HTMLDoc'
import cssDoc from '@/views/CSSDoc'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
      meta: { title: '在线编辑' }
    },
    {
      path: '/jsdoc',
      name: 'jsdoc',
      component: jsDoc,
      meta: { title: 'JavaScript文档' }
    },
    {
      path: '/htmldoc',
      name: 'htmldoc',
      component: htmlDoc,
      meta: { title: 'html文档' }
    },
    {
      path: '/cssdoc',
      name: 'cssdoc',
      component: cssDoc,
      meta: { title: 'css文档' }
    }
  ]
})

export default router
