<template>
  <div class="index">
    <header>
      <div class="search">
        <div class="sousuo">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="社保卡和医保卡区别 | 王思聪" />
        </div>
      </div>
      <div class="camera" @click="showMenu">
        <span>
          <i class="iconfont icon-xiangji"></i>
          <div class="text">发布</div>
        </span>
      </div>
    </header>
    <div class="downlist" v-if="menu">
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>发图文</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>写文章</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>拍小视频</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>发视频</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>提问</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>开直播</span>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="ifcont">
          <a href="#">
            <i class="iconfont icon-home1"></i>
            <span>爆料</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resolve } from "url";
import { reject } from "q";
export default {
  name: "Index",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    showMenu() {
      this.menu = !this.menu;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: #d43d3e;
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  /* margin: 0 auto; */
  position: fixed;
  top: 0;
  left: 0;
}

header > .search {
  width:80%;
  align-items: center;
  display: flex;
  border-radius: 4px;
}

header > .search > .sousuo {
  width: 100%;
  float: left;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
}

header > .search > .sousuo > input {
  font-size: 20px;
  // width: 270px;
  height: 80%;
  width: 80%;
  float: right;
  position: relative;
  margin-left: 4px;
  outline: none;
}

header > .search > .sousuo > i {
  margin-left: 8px;
  font-size: 26px;
  color: gray;
  font-weight: bold;
}

header > .camera {
  display: inline-block;
}

.downlist {
  height: 273px;
  width: 173px;
  background: black;
  position: fixed;
  z-index: 999;
  /* left: 266px; */
  right: 10px;
  top: 68px;
  border-radius: 6px;
}
.downlist > .col {
  display: flex;
}
.downlist > .col > .ifcont > a > i {
  /* color: white; */
  color: white;
  margin: 24px;
  font-size: 34px;
}
.downlist > .col > .ifcont > a > i + span {
  /* flex: 1; */
  color: white;
}

header > .camera > span > i {
  position: absolute;
  font-size: 30px;
  color: #fff;
  right: 11px;
  bottom: 18px;
}

header > .camera > span > .text {
  position: absolute;
  right: 14px;
  bottom: 6px;
  font-size: 8px;
  color: #fff;
  /* text-align: center; */
}
</style>
