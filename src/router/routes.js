const Home = ()=>import('@/pages/Home')


export default [{
  path: '/',
  redirect: '/home'
},{
    path:'/home',
    name:'home',
    components:{
        default:Home
    },
    meta:{
        title:'首页'
    }
}]
