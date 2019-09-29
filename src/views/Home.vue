<template>
  <div class="home">
    <!-- 头部 -->
    
    <Index></Index>
    
    <!-- 导航栏 -->
    <nav>
      <div class="nav" id="lunlist">
        <a
          style="display: inline-block;"
          v-for="type in typename"
          :key="type.id"
          @click="getNews(type.id)"
        >
          <div v-if="type.id == id" style="color:red">{{type.name}}</div>
          <div v-else>{{type.name}}</div>
        </a>
      </div>
      <span class="list">
        <i class="iconfont icon-list"></i>
      </span>
    </nav>
    <!-- 主体内容 -->
    <main>
      <div
        class="poster"
        v-for="news in msg"
        :key="news.name"
        @click="goDetails(news.id)"
      >
        <div class="title">
          <div class="title1">{{news.title.rendered}}</div>
        </div>
        <div class="imgs">
          <div class="imgs1">
            <img :src="news.thumbnail" />
          </div>
        </div>
        <div class="userdo">
          <div class="userdo1">
            <span class="wirtor">{{news.author}}</span>
            <span class="chat">90评论</span>
            <span class="time">{{news.date}}</span>
          </div>
        </div>
      </div>
      <div class="ding"></div>
    </main>
    
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'
import Footer from '@/components/Footer.vue'
// import Main from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    Index,Footer
  },
  data() {
    return {
      typename:[],
      msg:[],
      // rendered:'',
      id:1,
      news_id:'',
    };
  },
  mounted(){
    this.getType().then(()=>{
    this.getNews(this.id)
    })
  },
  
  methods: {
    goPage(url){
      this.$router.push(url);
    },
    getType(){
      return new Promise((resolve,reject)=>{
        this.axios.get('http://115.29.42.191:8001/wp-json/wp/v2/categories').then((res)=>{
            // console.log(res);
            // console.log(123);
            resolve(this.typename=res.data); 
            
        })
      })
    },
    getNews(id){
      this.id = id;
      this.axios.get('http://115.29.42.191:8001/wp-json/wp/v2/posts?page=1&per_page=20&categories='+id).then((res)=>{
        // console.log(res);
        this.msg=res.data;
      })
    },
    goDetails(news_id){
      // this.$router.push('/details/'+news_id);
      this.$emit('click',news_id);
      console.log(news_id);
      this.$router.push({path: '/details', query: {news_id: news_id}});
    }
  },
}
</script>
<style  scoped>
.nav {
  position: fixed;
  width: 100%;
  /* height: 50px; */
  top: 60px;
  background-color: #fff;
  line-height: 43px;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch;
  text-align: justify;
  /* background: #f78361; */
  padding: 0px 5px;
  box-sizing: border-box;
}

.nav::-webkit-scrollbar {
  display: none;
}

.nav a {
  color: black;
  text-decoration: none;
  margin-right: 10px;
}

nav > .list {
  background-color: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  /* border: 1px solid red; */
  /* position: absolute; */
  display: block;
  position: fixed;
  right: 0px;
  top: 60px;
  text-align: center;
  line-height: 45px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  /* font-size: 21px; */
}

nav > .list > i {
  font-size: 40px;
  color: gray;
}
/* #lunlist > a{
  font-size: 15px;
} */
#lunlist > a.active {
  color: red;
  font-weight: bold;
}
#homelist > #dianji > a {
  color: #d43d3e;
}
main {
  height: 100%;
  width: 100%;
  margin-top: 110px;
}
main>.poster{
  display: flex;
  flex-wrap: wrap;
  /* height: 165px; */
  width: 100%;
  /* background: #d43d3e; */
  border-bottom: 1px solid black;
}
main>.poster>.title{
  width: 100%;
}
main>.poster>.title>.title1{
  font-size: 17px;
  font-weight: bold;
}
main>.poster>.imgs{
  width: 100%;
}
main>.poster>.imgs>.imgs1{
  height: 80px;
  width: 125px;    
  background: black;
}
main>.poster>.imgs>.imgs1>img{
  height:100%;
  width: 100%;
}
main>.poster>.userdo{
  width: 100%;
}
main>.poster>.userdo>.userdo1>{
  margin-top: 10px;
}
main>.poster>.userdo>.userdo1>span{
  margin-right: 10px;
  font-size: 2px;
  color: gray;
}
main .ding{
  height:55px;
}
</style>
