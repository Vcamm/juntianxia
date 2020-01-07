<template>
  <div class="login">
    <van-nav-bar title="" :border="false">
      <van-icon name="cross" slot="left" @click="back" color="#333" size="22px"/>
    </van-nav-bar>
    <div class="content">
      <p>手机号登录/注册</p>
      <div class="getSMSCode">
        <p class="tel">
          中国+86 丨
          <input type="tel" v-model="phone" placeholder="请输入手机号码" maxlength="11">
        </p>
        <p>
          <input type="number" placeholder="请输入验证码" v-model="vertify">
          <van-button slot="button" :disabled="codeStatus" size="small" round type="primary" @click="getCode">{{content}}</van-button>
        </p>
      </div>
      <div class="btn-login" @click="login">登录/注册</div>
      <p class="text">未注册的手机号码验证后自动注册</p>
    </div>

  </div>
</template>
<script>
  // import { login, getMobileCode } from "../requests/index";


  import { Toast } from 'vant';
export default {
  data() {
    return {
      phone: '',
      vertify: '',
      codeStatus: false,
      timer: null,
      count: "",
      content:"获取验证码"
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    // 登录/注册
    login(){
      let req={
        phone: this.phone,
        vertify: this.vertify,
      }
      console.log(req)
      // login(req).then(resp=>{
      //   console.log(resp);
      //   if(resp.data.code == 0){
      //     this.$router.replace('/mine');
      //     localStorage.setItem('token',JSON.stringify(resp.data.data.token));
      //   }else{
      //       Toast(resp.data.msg);
      //   }
      // })
      this.Api.post('/api/user/login',req)
      .then(res =>{
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    // 获取验证码
    getCode() {
        let req = {
          phone: this.phone
        };
        //console.log(req)
        // getMobileCode(req).then(resp => {
        //   this.codeStatus = false;
        //   console.log(resp.data);
        //   if(resp.data.code==0){
        //     Toast('短信已发送至您的手机，请注意查收');
        //     const TIME_count = 60;
        //     this.count = TIME_count;
        //     this.timer = window.setInterval(() => {
        //       if (this.count > 0 && this.count <= TIME_count) {
        //         this.codeStatus = true;
        //         this.count--;
        //         this.content = this.count + "s后重新获取";
        //       } else {
        //         this.codeStatus = false;
        //         this.content = "获取验证码";
        //         clearInterval(this.timer);
        //         this.timer = null;
        //       }
        //     }, 1000);
        //   }else{
        //     Toast(resp.data.msg);
        //     this.codeStatus=false;
        //   }
        // });
        this.Api.get('api/index/getMobileCode',req)
        .then(res =>{
          console.log(res)
        })
        .catch(err =>{
          console.log(err)
        })
    },
  },
  created() {
    console.log(this.Api);
  }
};
</script>
<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: #fff;

    .content{
      padding: 0 5%;
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
      >p{
        font-size: 1.2rem;
        margin: 12% 0 16% 0;
      }
      .getSMSCode{
        color: #262626;
        p{
          margin: 0.5rem 0;
          border-bottom: 1px solid #f2f2f2;
          padding: 0.7rem 0;
          input::-webkit-input-placeholder{
            color: #eee;
          }
          .van-button{
            float: right;
            background: #ddd;
            border: none;
            height: 24px;
            line-height: 24px;
          }
        }
      }
      .btn-login{
        padding: 0.6rem 0;
        border-radius: 50px;
        background: orange;
        color: #fff;
        text-align: center;
        margin-top: 15%;
      }
      .text{
        font-size: 12px;
        color: #bbb;
        text-align: center;
        margin-top: 2%;
      }
    }
  }
</style>
