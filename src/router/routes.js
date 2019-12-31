const Home = ()=>import('@/pages/Home')
const Tabbar=()=>import('@/components/Tabbar')
const Order=()=>import('@/pages/Order')
const Mine=()=>import('@/pages/Mine')
const Setting=()=>import('@/pages/Setting')
const UserInfo=()=>import('@/pages/UserInfo')
const VipRegister=()=>import('@/pages/VipRegister')
const Voucher=()=>import('@/pages/Voucher')
const Info=()=>import('@/pages/Info')
const BaojianList=()=>import('@/pages/BaojianList')
const TopRecommend=()=>import('@/pages/TopRecommend')
const TopList=()=>import('@/pages/top_recommend/TopList')
const RecommendList=()=>import('@/pages/top_recommend/RecommendList')

export default [{
  path: '/',
  redirect: '/home'
},{
    path:'/home',
    name:'home',
    components:{
        default:Home,
        tabbar:Tabbar
    },
    meta:{
        title:'首页'
    }
},{
    path:'/order',
    name:'order',
    components:{
        default:Order,
        tabbar:Tabbar
    },
    meta:{
        title:'订单'
    }
},{
    path:'/mine',
    name:'mine',
    components:{
        default:Mine,
        tabbar:Tabbar
    },
    meta:{
        title:'个人信息'
    }
},{
    path:'/setting',
    name:'setting',
    components:{
        default:Setting
    },
    meta:{
        title:'设置'
    }
},{
    path:'/userinfo',
    name:'userinfo',
    components:{
        default:UserInfo
    },
    meta:{
        title:'个人信息'
    }
},{
    path:'/vipres',
    name:'vipres',
    components:{
        default:VipRegister
    },
    meta:{
        title:'会员注册'
    }
},{
    path:'/voucher',
    name:'voucher',
    components:{
        default:Voucher
    },
    meta:{
        title:'充值'
    }
},{
    path:'/info',
    name:'info',
    components:{
        default:Info
    },
    meta:{
        title:'消息中心'
    }
},{
    path:'/baojianlist',
    name:'baojianlist',
    components:{
        default:BaojianList
    },
    meta:{
        title:'包间列表'
    }
},{
      path:'/TopRecommend',
      name:'toprecommend',
      components:{
          default:TopRecommend
      },
      children: [
        {
          path: '/toplist',
          name: 'toplist',
          component: TopList
        },
        {
          path: '/recommendlist',
          name: 'recommendlist',
          component: RecommendList
        }
        ],
}
]
