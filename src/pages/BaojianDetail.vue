<template>
  <div class="baojiandetail">
    <van-nav-bar title="包间详情" :border="false" left-text="返回">
      <van-icon name="arrow-left" slot="left" color="#fff" @click="back" />
    </van-nav-bar>
    <div class="baojian-img">
      <img :src="roomInfo.private_url" alt="包间图片加载中..">
    </div>
    <!-- 内容 -->
    <div class="content-box">
      <div class="info">
        <p>
          <span class="name">{{roomInfo.private_name}}</span>
          <span class="sold-count">月售{{roomInfo.num}}</span>
        </p>
        <p class="detail">
          <van-rate
            v-model="roomInfo.score"
            allow-half
            void-icon="star"
            void-color="#eee"
            size="12"
          />
          <span>{{roomInfo.score}}分</span>
          <span>面积:{{roomInfo.private_size}}m²</span>
          <span>座位数：{{roomInfo.private_seat}}</span>
        </p>
        <van-divider />
        <!-- 包间图片列表 -->
        <div class="img-list">
          <van-swipe :loop="false" :width="100" :height="80" :show-indicators="false">
            <ul>
              <li v-for="item in roomInfo.imgArr">
                <van-swipe-item>
                  <img :src="item" alt="">
                </van-swipe-item>
              </li>
            </ul>
          </van-swipe>
        </div>
      </div>
      <div class="desc">
        <p class="title">包间描述</p>
        <van-divider />
        <div class="desc-content">{{roomInfo.remarks}}</div>
      </div>
      <div class="like">
        <p class="title">猜你喜欢
          <van-icon name="arrow" size="12"class="to-baojianlist" @click="toBaojianList" />
        </p>
        <van-divider />
        <van-grid :border="false" :column-num="3" :gutter="2">
          <van-grid-item v-for="item in likeList" @click="getData(item.id)">
            <van-image :src="item.private_url" />
          </van-grid-item>
        </van-grid>
      </div>
      <div class="btn-reserve" @click="toReserve">立即预约</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starVal: 2.5,
      space: 50,
      seats: 20,
      roomInfo: [],
      likeList:[],
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    getData(roomid){
      // var roomID = localStorage.getItem('roomID');
      // console.log(roomID);
      let req = {
         id: roomid
      };
      this.Api.get('api/room/roomInfo',req)
      .then(res =>{
        this.roomInfo = res.data.roomInfo;
        this.likeList = res.data.like;
        console.log(this.roomInfo);
        console.log(this.likeList);
       })
      .catch(err =>{
        console.log(err)
        })
    },
    toBaojianList(){
      this.$router.push('/baojianlist');
    },
    toReserve(){
      this.$router.push('/reserve/reservefood');
    },
  },
  mounted() {
    var id = localStorage.getItem('roomID');
    this.getData(id);
    }
};
</script>
<style lang="less" scoped>
.baojiandetail {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f0f0f0;
  img{
    width: 100%;
    height: 100%;
  }
  .baojian-img{
    width: 100%;
    height: 30%;
    vertical-align: middle;
  }
  .content-box{
    position: relative;
    top: -8%;
    width: 90%;
    margin: 0 auto;
    height: 60%;
    // background: mistyrose;
    >div{
      border-radius: 6px;
      background: #fff;
      color: #272727;
      padding: 0.75rem;
      margin-bottom: 0.75rem;
    }
    .info{
      p{
        margin: 5px 0;
      }
      .title{
        color: #262626;
      }
      .detail{
        span{
          height: 30px;
        }
      }
      span{
        font-size: 14px;
      }
      .name{
        font-size: 1.8rem;
      }
      .img-list{
        .van-swipe-item{
          padding-right: 10px;
          box-sizing: border-box;
        }
      }
    }
    .desc{
      .desc-content{
        font-size: 0.875rem;
        color: #535353;
      }
    }
    .like{
      overflow: hidden;
      .to-baojianlist{
        float: right;
      }
    }
    .btn-reserve{
      background: #F7692B;
      color: #fff;
      text-align: center;
    }
  }
  .icon-img {
    width: 17px;
    height: 29px;
    margin-right: 24px;
  }
  .img-box{
      width: 80px;
      height: 80px;
      background: red;
      border-radius: 50%;
  }
  .margin-style{
      margin-top: 12px;
  }
  .van-nav-bar{
    background: transparent;
    color: #fff;
    position: fixed;
    width: 100%;
    .van-nav-bar__title{
      color: #fff;
    }
    .van-icon{
      font-size: 22px;
    }
  }
}
</style>
