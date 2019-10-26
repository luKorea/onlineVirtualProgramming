import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'

Vue.use(Router)

const editor = () => import('@/views/Editor')
const jsDoc = () => import('@/views/JSDoc')
const htmlDoc = () => import('@/views/HTMLDoc')
const cssDoc = () => import('@/views/CSSDoc')
const example = () => import('@/views/Example')

const router = new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: { title: '首页' }
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
    },
    {
      path: '/example',
      name: 'example',
      component: example,
      meta: { title: '在线测试' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
