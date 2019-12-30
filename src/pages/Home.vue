<template>
  <div class="home">
    <div class="swipe-box">
      <van-nav-bar :border="false" class="home-nav">
        <p slot="title" class="home-title">筠天下</p>
        <!-- <img
          src="../assets/img/xiaoxi.png"
          alt
          slot="right"
          class="icon-img"
          style="margin:0"
          @click="toInfo"
        />-->
      </van-nav-bar>
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <ul class="home-choose-box">
        <li @click="toBaojianList($event)">
          <img src="../assets/img/caipin.png" alt/>
          <span>包间预约</span>
        </li>
        <li>
          <img src="../assets/img/baojian.png" alt />
          <span>菜品预定</span>
        </li>
        <li>
          <img src="../assets/img/daohang.png" alt />
          <span>一键导航</span>
        </li>
        <li>
          <img src="../assets/img/goutong.png" alt />
          <span>一键沟通</span>
        </li>
      </ul>
    </div>
    <div class="home-banner">
      <div class="banner-info">
        <p>MENU</p>
        <p>美食榜单</p>
        <p>/</p>
        <p>做最了解你喜好的餐饮品牌</p>
      </div>
      <div class="banner-img"></div>
    </div>
    <div class="home-nav-title">优选包间</div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in imgs"
          :key="index"
          @click="toBaojian(item)"
        >
          <img class="swiper-img" :src="item.src" />
          <p class="swiper-title">
            {{item.title}}
            <span>可预订</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      imgs: [
        {
          title: "包间1",
          src: require("../assets/img/banner-baojian.png")
        },
        {
          title: "包间2",
          src: require("../assets/img/banner-baojian.png")
        },
        {
          title: "包间3",
          src: require("../assets/img/banner-baojian.png")
        },
        {
          title: "包间4",
          src: require("../assets/img/banner-baojian.png")
        }
      ]
    };
  },
  created() {},
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      coverflow: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      spaceBetween: 50
    });
  },
  methods: {
    toInfo() {
      this.$router.push("/info");
    },
    toBaojian(item) {
      console.log(item);
    },
    toBaojianList(e){
       console.log(e.target.tagName)
       if(e.target.tagName=='IMG'||e.target.tagName=='SPAN'){
           this.$router.push('/baojianlist')
       }
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .swipe-box {
    width: 750px;
    height: 539px;
    background: aquamarine;
    position: relative;
    .icon-img {
      width: 33px;
      height: 31px;
      margin-right: 24px;
    }
    .home-title {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .home-nav {
      background: rgba(17, 17, 17, 1);
      position: fixed;
      width: 100%;
      opacity: 0.5;
      z-index: 9999;
    }
    .swipe {
      width: 100%;
      height: 100%;
    }

    .home-choose-box {
      width: 702px;
      height: 174px;
      // margin: 0 auto;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.15);
      border-radius: 36px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      left: 24px;
      top: 455px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 112px;
          height: 112px;
        }
        span {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }

  .home-banner {
    width: 100%;
    height: 340px;
    //   background: #FB7F38;
    margin-top: 111px;
    display: flex;
    .banner-info {
      width: 347px;
      height: 100%;
      background: #fb7f38;
      box-sizing: border-box;
      padding-left: 31px;
      p:nth-child(1) {
        font-size: 48px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-top: 74px;
      }
      p:nth-child(2) {
        font-size: 40px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-top: 18px;
      }
      p:nth-child(3) {
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-top: 14px;
        margin-bottom: 35px;
      }
      p:nth-child(4) {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .banner-img {
      width: 403px;
      height: 100%;
      background: blue;
    }
  }
  .home-nav-title {
    width: 180px;
    height: 36px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(17, 17, 17, 1);
    // background: red;
    margin-top: 33px;
    margin-left: 30px;
    line-height: 36px;
    box-sizing: border-box;
    padding-left: 10px;
    border-left: 3px solid #f36e21;
  }

  .swiper-container {
    // background-color: rgb(58, 138, 251);
    z-index: 0;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 50px;
    // margin-bottom: 50px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 80%;
      .swiper-img {
        border-radius: 10px;
        width: 100%;
      }
      .swiper-title {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(17, 17, 17, 1);
        margin: 0 auto;
        text-align: center;
        margin-top: 29px;
        span {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(50, 50, 50, 1);
        }
      }
    }
  }
}
</style>