<template>
  <div class="cart">
    <van-nav-bar title="餐车" :border="false">
      <img src="../assets/img/fanhui.png" alt slot="left" class="icon-img" @click="back" />
    </van-nav-bar>
    <!-- 加载列表 -->
    <van-checkbox-group v-model="result">
      <van-list
        class="food-list"
        @load="onLoad"
      >
      <!-- 一个商品卡 -->
        <van-card
          thumb="../assets/img/caipin.png"
        >
            <div slot="title" class="title">雪花牛肉</div>
              <div slot="desc">
              <van-rate
                v-model="star_val"
                allow-half
                void-icon="star"
                void-color="#eee"
                size="14px"
              />
              <span class="star-num">{{star_val}}分</span>
              <span class="sold-num">月售2333</span>
            </div>
            <div slot="desc" class="desc">
              滋养脾胃、补中益气
            </div>
            <div slot="price" class="price">￥48</div>
            <div slot="footer" class="check-box">
              <van-checkbox
                      ref="checkboxes"
                      slot="right-icon"
                      checked-color="#FD8634"
                    />
            </div>
            <div slot="footer" class="stepper">
                <van-stepper v-model="value" button-size="26px"/>
            </div>

        </van-card>
        <!-- 一个商品卡结束 -->

      </van-list>
    </van-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
      return {
            list: [],
            result: [],
            loading: false,
            finished: false,
            'star_val': 4.5,
            value: 1
          };
    },
  methods: {
    toggle(index) {
          this.$refs.checkboxes[index].toggle();
        },
    back() {
      this.$router.back(-1);
    },
    toCart(){
      alert('进入购物车');
    },
    onLoad() {
          // 异步更新数据

        }
  }
};
</script>
<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
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
  .food-list{
    padding:0.4rem;
    .title{
      font-size: 1rem;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    .star-num{
      display: inline-block;
      width: 2.2rem;
    }
    .price{
      font-size: 1rem;
      color: #FC934D;
      margin-top: 8px;
    }
    .desc{
      margin-top: 5px;
      color: #898989;
    }
    span{
      color: #666;
    }
    .van-card{
      background: #fff;
      border-radius: 4px;
      padding: 8px;
      padding-bottom: 0;
      .van-image{
        border-radius: 4px;
      }
      .check-box{
        position: relative;
            top: -3.5rem;
      }
      .van-card__thumb{
        width: 80px;
        height: 80px;
      }
      .van-card__header{
        margin-left: 8%;
      }
      .stepper{
        margin-top: -3.4rem;
      }
    }
    .van-card:not(:first-child){
      margin-top: 6px;
    }
  }
}
</style>
