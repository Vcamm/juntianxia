<template>
  <div class="mine">
    <van-nav-bar title="个人信息" :border="false">
      <img src="../assets/img/xitongshezhi.png" alt slot="right" class="icon-img" @click="toSetting"/>
      <img src="../assets/img/xiaoxi.png" alt slot="right" class="icon-img" style="margin:0" @click="toInfo"/>
    </van-nav-bar>
    <div class="userinfobox">
      <div class="advatar">
        <img src alt />
      </div>
      <p class="username">我会打酱油</p>
      <div class="vip-icon">
          <img src="../assets/img/huiyuan.png" alt="" @click="toVipres">
      </div>
      <div class="vip-status" @click="toVipres">会员用户</div>
    </div>
    <van-cell title="余额" value="65.8" size="large"  class="margin-style">
        <img src="../assets/img/yue.png" alt="" class="mine-icon-style" slot="icon">
        <p slot="right-icon" class="tips-style" @click="toVoucher">充值</p>
    </van-cell>
     <van-cell title="积分" value="128" size="large" >
        <img src="../assets/img/jifen.png" alt="" class="mine-icon-style" slot="icon">
    </van-cell>
     <van-cell title="卡券" value="3" size="large">
        <img src="../assets/img/kajuan.png" alt="" class="mine-icon-style" slot="icon">
        <p slot="right-icon" class="tips-style">即将过期</p>
    </van-cell>
     <van-cell title="待评价" size="large"  is-link>
        <img src="../assets/img/pinglun.png" alt="" class="mine-icon-style" slot="icon">
    </van-cell>
  </div>
</template>
<script>
  import { getMyIndex } from "../requests/index";

  import { Toast } from 'vant';
export default {
    data(){
        return{
        }
    },
    methods:{
        toSetting(){
            this.$router.push('/setting')
        },
        toVipres(){
            this.$router.push('/vipres')
        },
        toVoucher(){
            this.$router.push('/voucher')
        },
        toInfo(){
          this.$router.push('/info')
        }
    },
    mounted() {
      // console.log(token);
      let req={
      }
      console.log(req)
      getMyIndex(req).then(resp=>{
        console.log(resp);
        if(resp.data.code == 0){
        }else{
            Toast(resp.data.msg);
        }
      })
    }
};
</script>
<style lang="less" scoped>
.mine {
  width: 100%;
  height: 100%;
  background: #fff;
  .icon-img {
    width: 33px;
    height: 31px;
    margin-right: 24px;
  }
  .userinfobox {
    width: 750px;
    height: 166px;
    // background: red;
    overflow: hidden;
    box-shadow:0px 3px 19px 0px rgba(204,204,204,0.8);
    .advatar {
      width: 136px;
      height: 136px;
      background: blue;
      float: left;
      margin-left: 30px;
      margin-top: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .username {
      float: left;
      font-size: 40px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(17, 17, 17, 1);
      margin-top: 61px;
      margin-left: 14px;
    }
    .vip-icon{
        width: 34px;
        height: 34px;
        // background: blueviolet;
        float: left;
        margin-left: 18px;
        margin-top: 64px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .vip-status{
        width: 122px;
        height: 44px;
        background:linear-gradient(90deg,rgba(255,155,67,1),rgba(251,127,56,1));;
        float: right;
        margin-top: 58px;
        color: #fff;
        text-align: center;
        font-size: 24px;
        font-weight:500;
        box-sizing: border-box;
        padding-left: 25px;
        line-height: 44px;
        border-radius: 22px 0 0 22px;
    }
  }
  .margin-style{
      margin-top: 20px;
  }
  .mine-icon-style{
      width: 38px;
      height: 33px;
      margin-top: 8px;
      margin-right: 23px;
  }
  .tips-style{
      font-size: 22px;
      color:rgba(255,72,72,1);
      margin-left: 13px;
  }
}
</style>
