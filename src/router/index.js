import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)
let router=new Router({
  routes:[
    {
      path:'/homePage',
      component:_import('homePage/index'),
      hidden:true
    },
    {
      path:'/login',
      component:_import('login/index'),
      hidden:true
    },  
    {
      path:'/test',
      component:_import('test/maodian'),
      hidden:true
    },  
    {
      path:'/layout',
      component:_import('layout/Layout'),
      meta:{
        login:true
      },
      children:[
        {
          path:'/floorInfo',
          component:_import('floorInfo/index'),
          name:'floorInfo',
        },
        {
          path:'/roomInfo',
          component:_import('roomInfo/index'),
          name:'roomInfo',
        },
        {
          path:'/goodsInfo',
          component:_import('goodsInfo/index'),
          name:'goodsInfo',
        },
        {
          path:'/employeeInfo',
          component:_import('employeeInfo/index'),
          name:'employeeInfo',
        },
        {
          path:'/oldpeopleInfo',
          component:_import('oldpeopleInfo/index'),
          name:'oldpeopleInfo',
        },
      ]
    },
    {
      path:'*',
      redirect: '/homePage'
    }
  ]
})
export default router;
 router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=>item.meta.login)){
      let info=router.app.$local.fetch('userInfo')
      if(info.isLogin){
        next()
      }else{
        router.push({     
        path: '/login',
        query:{
          info:to.path.slice(1)
        }
       })
      }
    }
    next()
   })