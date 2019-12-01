import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Main = () => import('@/views/main')
const editor = () => import('@/views/editor')
const jsDoc = () => import('@/views/jsDoc')
const htmlDoc = () => import('@/views/htmlDoc')
const cssDoc = () => import('@/views/cssDoc')

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
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
