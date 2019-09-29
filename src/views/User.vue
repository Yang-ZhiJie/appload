<template>
  <div class="login">
    <!-- 未登录状态下 -->
    <header>
      <div class="usercheck">
        <a @click="goPage('/login')">登陆</a>
      </div>
    </header>
    <div class="clear" style="margin-top:150px;"></div>

    <!-- myRecord 我的收藏 评论点赞历史 -->
    <div class="myRecord">
      <ul>
        <li>
          <span class="iconfont icon-shoucang"></span>
          <p>我的收藏</p>
        </li>
        <li>
          <span class="iconfont icon-pinglun"></span>
          <p>我的评论</p>
        </li>
        <li>
          <span class="iconfont icon-yixianshi-"></span>
          <p>我的点赞</p>
        </li>
        <li>
          <span class="iconfont icon-lishijilu"></span>
          <p>浏览历史</p>
        </li>
      </ul>
    </div>
    <div class="clear"></div>

    <div class="feature">
      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>
        <span>我的关注</span>
      </div>
      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>我的钱包</span>
      </div>
      <div class="featureItem end">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>消息通知</span>
      </div>
      <div class="clear"></div>

      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>扫一扫</span>
      </div>
      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>免流量服务</span>
      </div>
      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>
        <span>阅读公益</span>
        <div class="readTime">
          <span>今日阅读</span>
        </div>
      </div>
      <div class="featureItem end">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>广告推广</span>
      </div>
      <div class="clear"></div>

      <div class="featureItem">
        <span class="iconfont icon-jiantouyouxi"></span>

        <span>用户反馈</span>
      </div>
      <div class="featureItem end">
        <span class="iconfont icon-jiantouyouxi"></span>
        <span>系统设置</span>
      </div>
    </div>
    <div class="ding"></div>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "user",
  components: {
    Footer
  },
  methods: {
    goPage(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  background-color: #fff;
  /* background-color: #D43D3E; */
  height: 150px;
  width: 100%;
  line-height: 50%;
  text-align: center;
  /* justify-content: center; */
  top: 0;
  left: 0px;
}

header .usercheck {
  display: inline-block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  /* border: 1px solid black; */
  background-color: #d43d3e;
  margin-top: 23px;
  font-size: 20px;
  color: white;
  line-height: 100px;
}
.clear {
  width: 100%;
  height: 5px;
  background: #f7f7f7;
}
.userInfo .info {
  font-size: 22px;
  margin-left: 15px;
  margin-bottom: 10px;
}

.login .mine {
  width: 100%;
  height: 55px;
}

.login .mine ul {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.login .mine ul li {
  width: 25%;
  text-align: center;
  font-size: 14px;
}

.login .mine ul li span {
  font-size: 22px;
}
.userInfo .info .renzhen {
  width: 60px;
  height: 16px;
  background: red;
  color: #fff;
  font-size: 10px;
  border-radius: 15px;
  text-align: center;
  margin-top: 5px;
}
.myRecord {
  width: 100%;
  height: 80px;
  background: #fff;
}

.myRecord ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.myRecord ul li {
  text-align: center;
  font-size: 14px;
  font-weight: 300;
}

.myRecord ul li .iconfont {
  font-size: 25px;
  font-weight: normal;
}

.feature {
  width: 100%;
}

.feature .featureItem {
  margin-left: 15px;
  height: 55px;
  background: #fff;
  line-height: 55px;
  font-size: 16px;
  font-weight: 300;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}

.feature .featureItem.end {
  border: none;
}

.featureItem .iconfont {
  position: absolute;
  right: 15px;
  color: #ccc;
}

.readTime {
  color: rgb(112, 112, 112);
  font-size: 14px;
  position: absolute;
  right: 40px;
  top: 0;
}
.ding {
  height: 90px;
}
</style>