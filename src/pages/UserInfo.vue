<template>
  <div class="userinfo">
    <van-nav-bar title="个人信息" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
    </van-nav-bar>
    <van-cell title="实名认证"  :value="username"" size='large'/>
    <van-cell title="头像" class="margin-style" >
        <div class="img-box" slot="right-icon">
          <img :src="info.head_url" alt="">
        </div>
    </van-cell>
    <van-cell title="昵称" is-link :value="info.nickname" />
    <van-cell title="生日" is-link :value="info.birthday" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
      username: '',
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
	getInfo(){
		this.Api.get('/api/user/userInfo')
		.then(res =>{
      this.info = res.data;
		  console.log(this.info);
      if(res.data.username==''){
        this.username = '未实名认证';
      }else{
        this.username = '已实名认证为'+res.data.username;
      }
		})
		.catch(err =>{
		  console.log(err)
		})
	}
  },
  mounted() {
    this.getInfo();
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  img{
    width: 100%;
  }
  .icon-img {
    width: 17px;
    height: 29px;
    margin-right: 24px;
  }
  .img-box{
      width: 80px;
      height: 80px;
      background: #ccc;
      border-radius: 50%;
  }
  .margin-style{
      margin-top: 12px;
  }
}
</style>
