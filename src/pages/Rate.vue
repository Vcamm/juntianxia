<template>
  <div class="rate">
    <van-nav-bar title="筠天下" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
      <p slot="right" class="header-tips">发布</p>
    </van-nav-bar>
    <!-- 评价 -->
    <div class="stars">
      <div>
        <span>总体</span>
        <van-rate
          v-model="value"
          allow-half
          :size="25"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          gutter="10"
        />
      </div>
      <div>
        <span>口味</span>
        <van-rate
          v-model="value"
          allow-half
          void-icon="star"
          void-color="#eee"
          gutter="13"
        />
      </div>
      <div>
        <span>环境</span>
        <van-rate
          v-model="value"
          allow-half
          void-icon="star"
          void-color="#eee"
          gutter="13"
        />
      </div>
      <div>
        <span>服务</span>
        <van-rate
          v-model="value"
          allow-half
          void-icon="star"
          void-color="#eee"
          gutter="13"
        />
      </div>
      <div>
        <span>食材</span>
        <van-rate
          v-model="value"
          allow-half
          void-icon="star"
          void-color="#eee"
          gutter="13"
        />
      </div>
      <van-cell-group>
        <van-field
          class="comment-input"
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          :border="false"
          placeholder="分享下对口味/环境/服务/食材等方面的体验吧~"
        />
      </van-cell-group>
      <p>还差{{15-message.length}}个字即可发布!</p>
      <van-uploader :before-read="beforeRead" v-model="fileList" multiple />
    </div>
    <p>
      <span>人均</span>
      <input
        placeholder="¥请输入消费金额"
        type="number"
      />
    </p>
    <p>
      <span>匿名点评</span>
      <van-checkbox v-model="checked" icon-size="26px"></van-checkbox>
    </p>
    <p class="text">选择匿名点评后，商家将无法获取您的个人信息</p>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Toast } from 'vant';

  Vue.use(Toast);
export default {
  data() {
    return {
      value: 4.5,
      message:'',
      fileList: [
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
      checked: false
    }
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
     // 返回布尔值
        beforeRead(file) {
          if (file.type !== 'image/jpeg') {
            Toast('请上传 jpg 格式图片');
            return false;
          }

          return true;
        },

        // 返回 Promise
        asyncBeforeRead(file) {
          return new Promise((resolve, reject) => {
            if (file.type !== 'image/jpeg') {
              Toast('请上传 jpg 格式图片');
              reject();
            } else {
              resolve();
            }
          });
        }
  }
};
</script>
<style lang="less" scoped>
  .rate {
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
    .stars{
      color: #2B2B2B;
      padding: 1.25rem;
      background: #fff;
      >div{
        margin-bottom: 0.7rem;
        color: #282828;
        >span{
          margin-right: 15px;
        }
      }
      >p{
        text-align: right;
        color: #9A9A9A;
        font-size: 0.8rem;
      }
      .van-rate{
        vertical-align: sub;
      }
      .comment-input{
        padding-left: 0;
      }
    }
    >p{
      padding: 0.8rem 1rem;
      background: #fff;
      margin-top: 0.625rem;
      color: #282828;;
      overflow: hidden;
      .van-checkbox{
        float: right;
      }
      span{
        line-height: normal;
      }
      ::-webkit-input-placeholder{
        font-size: 0.75rem;
        color: #ccc;
      }
    }
    .text{
      background: transparent;
      font-size: 0.8rem;
      color: #9c9c9c;
      margin: 0;
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
      border: none;
    }
  }
</style>
