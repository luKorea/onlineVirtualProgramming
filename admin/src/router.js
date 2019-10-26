import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Layout'
import Main from './components/v_main'

Vue.use(Router)

const vCss = () => import('./components/v_css/index')
const vHtml = () => import('./components/v_html')
const vJavascript = () => import('./components/v_js')
const vExamination = () => import('./components/v_examination')
const vExamName = () => import('./components/v_examname')
const vHtmlDoc = () => import('./components/v_doc/V_htmlDoc')
const vCssDoc = () => import('./components/v_doc/V_htmlDoc')
const vJavaScriptDoc = () => import('./components/v_doc/V_htmlDoc')
const vExaminationDoc = () => import('./components/v_doc/V_examination')
const vExamNameDoc = () => import('./components/v_doc/V_examname')
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
      meta: { title: '首页' },
      children: [
        {
          path: 'main',
          name: 'main',
          component: Main,
          meta: { title: '首页' }
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
          path: 'v_js',
          name: 'vjs',
          component: vJavascript,
          meta: { title: 'JavaScript录入' }
        },
        {
          path: 'v_examination',
          name: 'vexamination',
          component: vExamination,
          meta: { title: '题目录入' }
        },
        {
          path: '/v_examname',
          name: 'vexamname',
          component: vExamName,
          meta: { title: '试卷录入' }
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
          path: '/v_jsdoc',
          name: 'vjsDoc',
          component: vJavaScriptDoc,
          meta: { title: 'JavaScript文档' }
        },
        {
          path: '/v_exampledoc',
          name: 'vexample',
          component: vExaminationDoc,
          meta: { title: '题目文档' }
        },
        {
          path: '/v_examnamedoc',
          name: 'vexamnamedoc',
          component: vExamNameDoc,
          meta: { title: '试卷文档' }
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
