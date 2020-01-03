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
const BaojianDetail=()=>import('@/pages/BaojianDetail')
const TopRecommend=()=>import('@/pages/TopRecommend')
  const TopList=()=>import('@/pages/top_recommend/TopList')
  const RecommendList=()=>import('@/pages/top_recommend/RecommendList')
const SystemNotice=()=>import('@/pages/SystemNotice')
const Reserve=()=>import('@/pages/Reserve')
  const ReserveFood=()=>import('@/pages/reserve/ReserveFood')
  const ReservePot=()=>import('@/pages/reserve/ReservePot')
  const ReserveDessert=()=>import('@/pages/reserve/ReserveDessert')
const Cart=()=>import('@/pages/Cart')
const RoomReserve=()=>import('@/pages/RoomReserve')

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
    path:'/BaojianDetail',
    name:'baojiandetail',
    components:{
        default:BaojianDetail
    },
    meta:{
        title:'包间详情'
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
},{
    path:'/SystemNotice',
    name:'systemnotice',
    components:{
        default:SystemNotice
    },
    meta:{
        title:'系统通知'
    }
},{
      path:'/Reserve',
      name:'reserve',
      components:{
          default:Reserve
      },
      children: [
        {
          path: '/reserve/ReserveFood',
          name: 'reservefood',
          component: ReserveFood
        },
        {
          path: '/reserve/ReservePot',
          name: 'reservepot',
          component: ReservePot
        },
        {
          path: '/reserve/ReserveDessert',
          name: 'reservedessert',
          component: ReserveDessert
        }
      ],
},{
    path:'/Cart',
    name:'cart',
    components:{
        default:Cart
    },
    meta:{
        title:'餐车'
    }
},{
    path:'/RoomReserve',
    name:'roomreserve',
    components:{
        default:RoomReserve
    },
    meta:{
        title:'包间预定'
    }
}
]
