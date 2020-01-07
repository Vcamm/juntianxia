<template>
  <div class="pay">
    <van-nav-bar title="支付订单" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
    </van-nav-bar>
    <div class="content">
      <div class="leave-time">
        <p class="text">支付剩余时间</p>
        <p class="pay-time"><span>23:59</span></p>
        <van-divider />
        <div class="order-info">
            <div class="user-img">
              <!-- <img src="../assets/img/active2.jpg" alt=""> -->
            </div>
            <div class="info">
              <p class="price">预定菜品<span>¥188.00</span></p>
              <p class="room-name">筠天下-霁影轩</p>
            </div>
        </div>
      </div>
      <div class="">
        <div class="balance">
            <div class="user-img">
            </div>
            <div class="info">
              <p class="balance-num">余额(剩余1210.05)</p>
              <p class="tips">
                <span>余额不足</span>
                <span class="to-voucher">立即充值</span>
              </p>
            </div>
            <van-checkbox v-model="checked"></van-checkbox>
        </div>
      </div>
      <div class="">
        <div class="balance pay-way">
            <div class="user-img">
            </div>
            <div class="info">
              <p class>微信支付</p>
            </div>
            <van-checkbox v-model="checked"></van-checkbox>
        </div>
        <van-divider />
        <div class="balance pay-way">
            <div class="user-img">
            </div>
            <div class="info">
              <p>支付宝支付</p>
            </div>
            <van-checkbox v-model="checked"></van-checkbox>
        </div>
      </div>
      <div class="">
        <div class="balance">
            <div class="user-img">
            </div>
            <div class="info">
              <p class="balance-num">积分(剩余88分)</p>
              <p class="tips">
                <span>可用于抵扣88元</span>
              </p>
            </div>
            <van-checkbox v-model="checked"></van-checkbox>
        </div>
      </div>
      <div class="btn-pay">立即支付</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['fdsaf','fdsafdsa,fdsafdsa'],
      result:[],
      checked: true
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>
<style lang="less" scoped>
  .pay {
    width: 100%;
    height: 100%;
    background: #f2f2f2;
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
    img{
      width: 100%;
    }
    .content{
      padding: 0.7rem;
      .leave-time{
        margin-bottom: 4%;
      }
      .btn-pay{
        border-radius: 50px;
        background: orange;
        color: #fff;
        margin-top: 15%;
        text-align: center;
      }
      >div{
        border-radius: 20px;
        background: #fff;
        padding: 0.9rem;
        margin-bottom: 2%;
        >p{
          text-align: center;
        }
        .text{
          padding-bottom: 0.85rem;
          font-size: 0.875rem;
          color: #999;
        }
        .pay-time{
          color: orange;
          text-align: center;
          letter-spacing: 1;
          span{
            font-size: 1.2rem;
          }
        }
        .order-info,.balance{
          overflow: hidden;
          line-height: initial;
          color: #4a4a4a;
          font-size: 0.875rem;
          .user-img{
            width: 3rem;
            height: 3rem;
            border-radius: 200px;
            overflow: auto;
            background: #eee;
            float: left;
          }
          .info{
            float: left;
            margin-left: 5%;
            span{
              font-size: 1.2rem;
            }
          }
        }
        .balance{
          .user-img{
            width: 60px;
            height: 60px;
          }
          .info{
            span{
              font-size: 0.7rem;
              color: #bbb;
            }
            .to-voucher{
              color: firebrick;
            }
          }
        }
        .van-checkbox{
          float: right;
        }
        .pay-way{
          line-height: 2;
        }
      }
    }
  }
</style>
