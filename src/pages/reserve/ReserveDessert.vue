<template>
  <div class="reserve-dessert">

    <!-- 加载列表 -->
    <van-list
      class="food-list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
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
          <div slot="footer" class="btn-add">
            <van-icon name="add-o" size="2rem" color="#FC934D"/>
          </div>
      </van-card>
      <!-- 一个商品卡结束 -->

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
            <div slot="footer" class="btn-add">
              <van-icon name="add-o" size="2rem" color="#FC934D"/>
            </div>
        </van-card>
        <!-- 一个商品卡结束 -->

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
                  size= "12px"
                />
                <span class="star-num">{{star_val}}分</span>
                <span class="sold-num">月售2333</span>
              </div>
              <div slot="desc" class="desc">
                滋养脾胃、补中益气
              </div>
              <div slot="price" class="price">￥48</div>
              <div slot="footer" class="btn-add">
                <van-icon name="add-o" size="2rem" color="#FC934D"/>
              </div>
          </van-card>
          <!-- 一个商品卡结束 -->

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
                <div slot="footer" class="btn-add">
                  <van-icon name="add-o" size="2rem" color="#FC934D"/>
                </div>
            </van-card>
            <!-- 一个商品卡结束 -->

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
                  <div slot="footer" class="btn-add">
                    <van-icon name="add-o" size="2rem" color="#FC934D"/>
                  </div>
              </van-card>
              <!-- 一个商品卡结束 -->
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
                    <div slot="footer" class="btn-add">
                      <van-icon name="add-o" size="2rem" color="#FC934D"/>
                    </div>
                </van-card>
                <!-- 一个商品卡结束 -->
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
                      <div slot="footer" class="btn-add">
                        <van-icon name="add-o" size="2rem" color="#FC934D"/>
                      </div>
                  </van-card>
                  <!-- 一个商品卡结束 -->
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
                        <div slot="footer" class="btn-add">
                          <van-icon name="add-o" size="2rem" color="#FC934D"/>
                        </div>
                    </van-card>
                    <!-- 一个商品卡结束 -->


    </van-list>
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
.reserve-dessert {
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
      font-size: 1.2rem;
      color: #FC934D;
      margin-top: 15px;
    }
    .desc{
      margin-top: 5px;
      color: #898989;
    }
    .btn-add{
      margin-top: -2rem;
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
      .van-card__thumb{
        width: 100px;
        height: 80px;
      }
    }
    .van-card:not(:first-child){
      margin-top: 6px;
    }
  }
}
</style>
