<template>
    <div class="footer">
        <footer>
      <div class="row" id="homelist">
        <div class="ifcont" id="dianji">
          <a @click="goPage('/')">
            <i class="iconfont icon-home1"></i>
            <p class="p1">首页</p>
          </a>
        </div>
        <div class="ifcont">
          <a @click="goPage('/video')">
            <i class="iconfont icon-bofangsanjiaoxing"></i>
            <p class="p2">西瓜视频</p>
          </a>
        </div>
        <div class="ifcont">
          <a @click="goPage('/svideo')">
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
            <p class="p3">小视频</p>
          </a>
        </div>
        <div class="ifcont">
          <a @click="goPage('/user')">
            <i class="iconfont icon-yonghuzhongxin"></i>
            <p class="p4">未登录</p>
          </a>
        </div>
      </div>
    </footer>
    </div>
</template>
<script>
export default {
  name:'Footer',
  methods: {
    goPage(url){
      this.$router.push(url);
    }, 
  }
}
</script>
<style lang="stylus" scoped>
footer {
  width: 100%;
  height: 55px;
  background-color: #e6e6e6;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
footer > .row {
  width :100%;
  display: flex;
  margin-top: 3px;
}
footer > .row > .ifcont {
  flex: 1;
  margin-top: -1px;
  width :25%;
}

footer > .row > .ifcont > a > i {
  font-size: 30px;
  margin-left: 33px;
}
footer > .row > .ifcont > a > p {
  font-size: 13px;
}
footer > .row > .ifcont > a > .p1 {
  margin: 0 23px 0 24px;
  padding: 0 10px 0 10px;
}
footer > .row > .ifcont > a > .p2 {
  margin: 0 0 0 10px;
  padding: 0 10px 0 10px;
}
footer > .row > .ifcont > a > .p3 {
  margin: 0 0 0 18px;
  padding: 0 10px 0 10px;
}
footer > .row > .ifcont > a > .p4 {
  margin: 0 0 0 18px;
  padding: 0 10px 0 10px;
}
</style>