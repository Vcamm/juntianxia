<template>
  <div class="order">
    <van-nav-bar title="我的订单" :border="false">
      <img src="../assets/img/sousuo.png" alt slot="right" class="icon-img" />
    </van-nav-bar>
    <van-tabs v-model="activeName" color="#FB7F38">
      <van-tab v-for="item in title" :key="item.id" :title="item.title" :name="item.id">
        <div class="orderinfo">
          <div class="title-box">
            <p class="title">筠天下-霁影轩</p>
            <p class="status">待评价</p>
          </div>
          <div class="detail">
            <div class="img-show">
              <img src alt />
            </div>
            <div class="info">
              <p>下单时间：2019-12-15 12：49</p>
              <p class="price">总价：2368.2元</p>
            </div>
          </div>
          <div class="btn">
            <van-button type="default" class="btn-style">再来一单</van-button>
             <van-button type="default" class="btn-style">评价</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
const title = [
  {
    title: "全部",
    id: "0"
  },
  {
    title: "待付款",
    id: "1"
  },
  {
    title: "待评价",
    id: "2"
  },
  {
    title: "退款/售后",
    id: "3"
  }
];
export default {
  data() {
    return {
      activeName: "0",
      title: title
    };
  }
};
</script>
<style lang="less" scoped>
.order {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  .icon-img {
    width: 33px;
    height: 31px;
    margin-right: 24px;
  }
  .orderinfo {
    width: 702px;
    height: 290px;
    background: #fff;
    margin: 0 auto;
    margin-top: 6px;
    border-radius: 10px;
    padding: 0 19px;
    box-sizing: border-box;
    .title-box {
      width: 100%;
      height: 70px;
      border-bottom: 2px solid #f3f3f3;
      line-height: 70px;
      .title {
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        float: left;
      }
      .status {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        float: right;
      }
    }
    .detail {
      width: 100%;
      height: 156px;
    //   background: red;
      overflow: hidden;
      .img-show {
        width: 132px;
        height: 132px;
        background: blue;
        margin-top: 18px;
        margin-left: 19px;
        border-radius: 10px;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        min-width: 325px;
        height: 70px;
        // background: blue;
        float: left;
        margin-top: 47px;
        margin-left: 12px;
        p {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
        .price {
          margin-top: 22px;
        }
      }
    }
    .btn {
      width: 100%;
      height: 62px;
    //   background: greenyellow;
      .btn-style {
        height: 38px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 38px;
        border-radius:6px;
        float: right;
        margin-top: 12px;
        margin-right: 18px;
      }
    }
  }
}
</style>