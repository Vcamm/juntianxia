<template>
  <div class="reserve-pot">

    <!-- 锅底列表 -->
    <div class="pot">
      <div class="img"><img src="../../assets/img/banner-baojian.png" alt=""></div>
      <div class="detail">
        <div>
          <p class="type">鸳鸯锅底</p>
          <p class="desc">麻而微辣，汤底有料</p>
          <p class="desc-eng">Hemp and slightly spicy,soup base has material</p>
          <p pot-choice>红锅：<span>微辣</span></p>
          <p soup-choice>清汤：
            <span>菌汤</span>
            <span>番茄</span>
            <span>三鲜</span>
          </p>
          <p class="price">
            <span>¥62</span>
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
            list: [],
            loading: false,
            finished: false,
            'star_val': 4.5,
          };
    },
  methods: {
    back() {
      this.$router.back(-1);
    },
    toCart(){
      alert('进入购物车');
    },
    onLoad() {
          // 异步更新数据
          setTimeout(() => {
            for (let i = 0; i < 10; i++) {
              this.list.push(this.list.length + 1);
            }
            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.list.length >= 40) {
              this.finished = true;
            }
          }, 500);
        }
  }
};
</script>
<style lang="less" scoped>
.reserve-pot {
  width: 100%;
  background: #eee;
  .icon-img {
    width: 17px;
    height: 29px;
    margin-right: 24px;
  }
  .header-tips {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .info-img {
    width: 79px;
    height: 79px;
    border-radius: 50%;
    background: yellowgreen;
    // margin-top: 25px;
    margin-right: 13px;
  }
  .label-style {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    min-width: 350px;
  }
  .value-style {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  img{
    width: 100%;
  }
  .pot{
    position: relative;
    width: 94%;
    left: 3%;
  }
  .img{
    width: 60%;
    position: absolute;
  }
  .detail{
    position: absolute;
    width: 80%;
    right: 0;
    top: 5%;
    >div{
      width: 50%;
      position: absolute;
      right: 0;
      .type{
        font-size: 1rem;
      }
      .desc{
        
      }
    }
  }
}
</style>
