<template>
  <div class="userinfo">
    <van-nav-bar title="个人信息" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
    </van-nav-bar>
    <van-cell title="实名认证"  value="已实名认证为***" size='large'/>
    <van-cell title="头像" class="margin-style" >
        <div class="img-box" slot="right-icon"></div>
    </van-cell>
    <van-cell title="昵称" is-link value="我会打酱油" />
    <van-cell title="生日" is-link value="1998-09-08" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
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
}
</style>