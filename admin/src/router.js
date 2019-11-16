// TODO success
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Layout'
import Main from './components/v_main'

Vue.use(Router)

const vCss = () => import('./components/v_css/index')
const vCssDoc = () => import('./components/v_doc/V_cssDoc')
const vHtml = () => import('./components/v_html')
const vHtmlDoc = () => import('./components/v_doc/V_htmlDoc')
const vJsMth = () => import('./components/v_js/V_jsmth')
const vJsObj = () => import('./components/v_js/V_jsobj')
const vJsPro = () => import('./components/v_js/V_jspro')
const vJsMthDoc = () => import('./components/v_doc/V_jsMthDoc')
const vJsObjDoc = () => import('./components/v_doc/V_jsObjDoc')
const vJsProDoc = () => import('./components/v_doc/V_jsProDoc')
const Error = () => import('./views/Error')

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '在线虚拟编程' },
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main,
          meta: { title: '在线虚拟编程' }
        },
        {
          path: 'v_css',
          name: 'vcss',
          component: vCss,
          meta: { title: 'CSS录入' }
        },
        {
          path: 'v_html',
          name: 'vhtml',
          component: vHtml,
          meta: { title: 'HTML录入' }
        },
        {
          path: 'v_jsmth',
          name: 'vjsmth',
          component: vJsMth,
          meta: { title: 'JavaScript方法录入' }
        },
        {
          path: 'v_jsobj',
          name: 'vjsobj',
          component: vJsObj,
          meta: { title: 'JavaScript接口录入' }
        },
        {
          path: 'v_jspro',
          name: 'vjspro',
          component: vJsPro,
          meta: { title: 'JavaScript属性录入' }
        },
        {
          path: '/v_htmldoc',
          name: 'vHtmlDoc',
          component: vHtmlDoc,
          meta: { title: 'HTML文档' }
        },
        {
          path: '/v_cssdoc',
          name: 'vcssDoc',
          component: vCssDoc,
          meta: { title: 'CSS文档' }
        },
        {
          path: '/v_jsmthdoc',
          name: 'vjsmthDoc',
          component: vJsMthDoc,
          meta: { title: 'JavaScript方法文档' }
        },
        {
          path: '/v_jsobjdoc',
          name: 'vjsobjDoc',
          component: vJsObjDoc,
          meta: { title: 'JavaScript接口文档' }
        },
        {
          path: '/v_jsprodoc',
          name: 'vjsproDoc',
          component: vJsProDoc,
          meta: { title: 'JavaScript属性文档' }
        },
        {
          path: '*',
          component: Error,
          meta: { title: '404页面' }
        }
      ]
    }
  ]
})
//  TODO 设置标题
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
