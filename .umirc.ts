import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    title:'layout',
    menuDataRender:()=>[
      { path: '/', icon: 'smile', name:'首页'},
      { path: '/demo',icon: 'smile',name:'一级demo'}
    ],
    menuItemRender:()=>{
      return(1111)
    }
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // history:{
  //   type:'hash'
  // },
  routes: [
    { path: '/', component: '@/pages/index/index', title:'首页'},
    { path: '/demo', component: '@/pages/demo/index', title:'一级demo'},
    { 
      path: '/other', 
      component: '@/layouts/index', 
      // exact: true,
      routes:[
        { path: '/other/demo', component: '@/pages/demo/index', title:'demo', wrappers:['@/pages/wrappers/index']},
      ]
    },
    {
      path: '/login',
      component: '@/pages/login/index',
      title:'登陆'
    },
    { component: '@/pages/404/index', title:'错误路由'},  // 配置在最后匹配所有错误的路由
  ],
});
