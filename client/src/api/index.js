import axios from 'axios'

// eslint-disable-next-line semi
let data = null;

// html
let getHtmlList = async () => {
  data = await axios.get('/html/findAll')
  return data.data
}

// css
let getCssList = async () => {
  data = await axios.get('/css/findAll')
  return data.data
}

// js 方法
let getJsMth = async () => {
  data = await axios.get('/js/mth/findAll')
  return data.data
}

// js 接口
let getJsObj = async () => {
  data = await axios.get('/js/obj/findAll')
  return data.data
}

// js 属性
let getJsPro = async () => {
  data = await axios.get('/js/pro/findAll')
  return data.data
}

export {
  getHtmlList,
  getCssList,
  getJsMth,
  getJsObj,
  getJsPro
}
