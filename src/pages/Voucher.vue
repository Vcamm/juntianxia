<template>
  <div class="voucher">
    <van-nav-bar title="充值" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
    </van-nav-bar>
    <div class="price-box">
      <p class="user-price">68.8</p>
      <p class="tips">余额</p>
    </div>
    <ul class="choose-box">
      <li class="box-line">
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
      <li>
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
      <li>
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
      <li>
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
      <li>
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
      <li>
        <p>￥40</p>
        <span>4会员积分</span>
      </li>
    </ul>
    <div class="submit">
      <p>
        合计:
        <span>￥198.0</span>
      </p>
      <div class="btn-s">确认支付</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.voucher {
  width: 100%;
  height: 100%;
  background: #fff;
  .icon-img {
    width: 17px;
    height: 29px;
    margin-right: 24px;
  }
  .price-box {
    width: 690px;
    height: 240px;
    background: url("../assets/img/bg-v.png") no-repeat;
    border-radius: 10px;
    background-position: center center;
    background-size: 100% 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user-price {
      font-size: 60px;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba(255, 255, 255, 1);
    }
    .tips {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-top: 32px;
    }
  }
  .choose-box {
    width: 690px;
    height: 350px;
    margin: 0 auto;
    // background: blue;
    margin-top: 41px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    li {
      width: 218px;
      height: 159px;
      background: rgba(245, 245, 245, 1);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 48px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(17, 17, 17, 1);
      }
      span {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-top: 11px;
      }
    }
  }
  .submit {
    width: 750px;
    height: 112px;
    background: #f5f5f5;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    box-sizing: border-box;
    padding: 0 24px;
    line-height: 112px;
    p {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      float: left;
      span {
        font-size: 50px;
        font-family: PingFang SC;
        font-weight: 800;
        color: rgba(251, 127, 56, 1);
      }
    }
    .btn-s{
        width: 301px;
        height: 80px;
        float: right;
        background: #FF9B43;
        color: #fff;
        border-radius: 40px;
        line-height: 80px;
        text-align: center;
        margin-top: 16px;
    }
  }
}
.box-line {
  border: 3px solid #ff9b43;
}
</style>