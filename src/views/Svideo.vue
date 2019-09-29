<template>
  <div class="Svideo">
    <header>
      <div class="list" id="lunlist">
        <a href="#">关注</a>&nbsp;&nbsp;&nbsp;
        <a href="#" class="active-lis">推荐</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">附近</a>&nbsp;&nbsp;&nbsp;
        <a href="#">活动</a>&nbsp;&nbsp;&nbsp;
        <a href="#">游戏</a>&nbsp;
        <div class="shuxian"></div>
      </div>
      <div class="camera" style="position: absolute; right:0; top: 0;">
        <span>
          <!-- <div> -->
          <i class="iconfont icon-shipin"></i>
          <!-- </div> -->
          <div class="text">发布</div>
        </span>
      </div>
    </header>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Svideo",
  components: {
    Footer
  }
};
</script>

 <style scoped>
header {
  background-color: #fff;
  height: 40px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

header > .list {
  align-items: center;
  /* position: absolute; */
  display: flex;
  border-radius: 4px;
  font-size: 18px;
}
header a:hover {
  color: red;
}

header > .camera {
  display: inline-block;
  box-shadow: 6px -19px 13px 5px #888888;
  border-left: 0px solid black;
  height: 40px;
  width: 75px;
  line-height: 40px;
}

header > .camera > span {
  float: left;
  display: block;
}

header > .camera > span > i {
  font-size: 30px;
  color: black;
  padding: 5px;
}

header > .camera > span > .text {
  position: absolute;
  top: 0px;
  right: 12px;
  font-size: 13px;
  color: black;
}
#lunlist > a.active-lis {
  color: #d43d3e;
}
#homelist > #active > a {
  color: #d43d3e;
}
</style>