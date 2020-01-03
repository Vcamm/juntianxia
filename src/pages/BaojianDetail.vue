<template>
  <div class="info">
    <van-nav-bar title="消息中心" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
      <p slot="right" class="header-tips">全部已读</p>
    </van-nav-bar>
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
.info {
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
