<template>
  <div class="Video">
    <Index></Index>
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
    </nav>
    <Footer></Footer>
  </div>
</template>
<script>
import Index from "@/components/Index.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Video",
  components: {
    Index,Footer
  },
  data() {
    return {
      typename:[],
      msg:[],
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
        $.get('http://192.168.28.9/laravel-api/public/api/index/cates',(res)=>{
        //  console.log(res);
        resolve(this.typename=res.data); 
        // this.typename=res.msg;
        })
      })
    },
    getNews(id){
      this.id = id;
      $.get('http://192.168.28.9/laravel-api/public/api/index/news/'+id,(res)=>{
        // console.log(res);
        this.msg=res.msg.data;
      },'json')
    },
    goDetails(news_id){
      // this.$router.push('/details/'+news_id);
      this.$emit('click',news_id);
    //   console.log(news_id);
      this.$router.push({path: '/details', query: {news_id: news_id}});
    }
  },
};
</script>
<style  scoped>
    .nav {
  position: fixed;
  width: 100%;
  /* height: 50px; */
  top: 60px;
  background-color: #fff;
  line-height: 50px;
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

</style>