import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/layouts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 访问路径
      // name: 'HelloWorld',
      // component: HelloWorld
      ame: 'Layouts', // 路径名
      component: Layouts // 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    }
  ]
})
