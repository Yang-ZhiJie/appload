<template>
  <div class="news_details">
    <div class="head">
      <div class="icon1" @click="goBack()">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i>
      </div>
      <div class="text">今日头条</div>
      <div class="icon2">
        <i class="iconfont icon-sousuo1"></i>
      </div>
      <div class="icon3">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <div class="content">
      <div class="title" style="width:100%">
        <span>{{newstitle}}</span>
      </div>
      <div class="writor" style="width:100%">
        <div>作者:{{news.author}}</div>
      </div>
      <div class="img" style="width:100%">
        <img :src="news.thumbnail" style="width:100%;hight:100%" />
      </div>
      <div class="article" style="width:100%">
        <div v-html="newscontent" class="item"></div>
        <div class="comments">
          <div v-if="comments.content!=undefined">
            <div>
              <img :src="img" alt />
            </div>
            <div>{{comments.author_name}}</div>
            <div v-html="comments.content.rendered"></div>
          </div>
        </div>
        <!-- <div class="comments" v-else v-for="com in comments" :key="com.name">
                
                <div v-if="com.content!=undefined">
                    <div><img :src="com.author_avatar_urls[24]" alt=""></div>
                <div>{{com.author_name}}</div>
                <div v-html="com.content.rendered"></div>
                </div>
        </div>-->
      </div>
      <div class="ding"></div>
      <footer>
        <div class="search" @click="showPush">
          <div class="sousuo">
            <i class="iconfont icon-icon_xie"></i>
            <input type="text" class="type" placeholder="写评论..." />
          </div>
        </div>
        <div class="icon">
          <div>
            <i class="iconfont icon-pinglun"></i>
          </div>
          <div v-if="collect" style="color:red;" @click="love(news.news_id,collect)">
            <i class="iconfont icon-shoucang"></i>
          </div>
          <div v-else @click="love(news.news_id,collect)">
            <i class="iconfont icon-shoucang"></i>
          </div>
          <div v-if="like" style="color:red;" @click="favorite(news.news_id,like)">
            <i class="iconfont icon-yixianshi-"></i>
          </div>
          <div v-else @click="favorite(news.news_id,like)">
            <i class="iconfont icon-yixianshi-"></i>
          </div>
          <div>
            <i class="iconfont icon-fenxiang"></i>
          </div>
        </div>
        <div class="discuss" v-if="show">
          <input type="text" v-model="discuss" placeholder="优质评论将会被优先展示" />
          <button @click="publish(news.id)">发布</button>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { resolve } from "q";
import qs from "qs";
export default {
  name: "Details",
  data() {
    return {
      news_id: "",
      news: {
        title: {
          rendered: ""
        },
        content: {
          rendered: ""
        }
      },
      collect: "",
      like: "",
      discuss: "",
      comments: {
        content: {
          rendered: ""
        }
      },
      img: "",
      show: false
      // postid:'',
    };
  },

  created() {
    this.getDetails().then(() => {
      this.getDiscuss().then(() => {
        this.img = this.comments.author_avatar_urls[24];
        console.log();
      });
    });
    // console.log(this.news);
    // console.log(this.comments);
  },
  computed: {
    newstitle: function() {
      return this.news.title.rendered;
      console.log(this.news.title.rendered);
    },
    newscontent: function() {
      return this.news.content.rendered;
    }
  },
  methods: {
    showPush() {
      this.show = !this.show;
    },

    goBack() {
      history.back(-1);
    },
    getDetails() {
      return new Promise((resolve, reject) => {
        var news_id = this.$route.query.news_id;
        // console.log(news_id);
        $.get(
          "http://115.29.42.191:8001/wp-json/wp/v2/posts/" + news_id,
          res => {
            // console.log(res);
            // this.news=res;
            resolve((this.news = res));
            // console.log(this.news)
            // console.log(this.collect);
          }
        );
      });
    },
    getDiscuss() {
      return new Promise((resolve, reject) => {
        var postid = this.news.id;
        // var newsid=this.news.new
        // console.log(postid)
        $.get(
          "http://115.29.42.191:8001/wp-json/wp/v2/comments",
          res => {
            // console.log(res);
            // if (res.post ==) {

            // }
            res.forEach((item, index) => {
              if (item.post == postid) {
                resolve((this.comments = item));
              }
            });
          },
          "json"
        );
      });
    },
    publish(id) {
      let token = localStorage.getItem("token");
      if (!token) {
        alert("先登录");
      } else
        this.axios({
          url: "http://115.29.42.191:8001/wp-json/wp/v2/comments",
          method: "post",
          headers: {
            Authorization: "Bearer " + token,
            "content-type": "application/json"
          },
          data: {
            content: this.discuss,
            post: id
          }
        })
          .then(res => {
            // console.log(res);
            if (res.status == 201) {
              alert("评论成功");
              location.reload("/");
            } else if (res.status != 201) {
              alert("稍后再试");
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
    // console.log(discuss);
  },

  love(news_id, collect) {
    var news_id = this.$route.query.news_id;
    var token = localStorage.getItem("token");
    if (collect == true) {
      this.collect = 0;
    } else {
      this.collect = 1;
    }
    // console.log(token);
    // console.log(news_id);
    // console.log(collect);
    // $.post('http://192.168.28.9/laravel-api/public/api/index/news/collect',{news_id,token,collect},(res)=>{
    //     // console.log(res);
    // });
  },
  favorite(news_id, like) {
    var news_id = this.$route.query.news_id;
    var token = localStorage.getItem("token");
    if (like == true) {
      this.like = 0;
    } else {
      this.like = 1;
    }
    // console.log('新闻id',news_id);
    // console.log('用户喜欢吗',like);
    // $.post('http://192.168.28.9/laravel-api/public/api/index/news/like',{news_id,token,like},(res)=>{
    //     // console.log(res);
    // });
  }
};
</script>
<style scoped>
.head {
  height: 40px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgb(223, 220, 220);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
}
i {
  font-size: 22px !important;
}
.head > .icon1 {
  position: absolute;
  left: 15px;
  line-height: 40px;
}
.head .text {
  position: absolute;
  left: 150px;
  line-height: 40px;
  color: gray;
  font-weight: bolder;
}
.head .icon2 {
  position: absolute;
  right: 55px;
  line-height: 40px;
}
.head .icon3 {
  position: absolute;
  right: 10px;
  line-height: 40px;
}
.content {
  margin-top: 40px;
}
.content .title {
  font-size: 35px;
  font-weight: bold;
}
.content .item {
  width: 100%;
  height: 100%;
}
.content .ding {
  height: 40px;
}
footer {
  position: fixed;
  z-index: 100;
  bottom: 0px;
  left: 0px;
  height: 40px;
  width: 100%;
  border-top: 1px solid rgb(223, 220, 220);
  background-color: #fff;
}
footer .search {
  width: 48%;
  align-items: center;
  /* display: flex; */
  border-radius: 10px;
  line-height: 40px;
}
footer .discuss {
  width: 100%;
  height: 50px;
  /* background:red; */
  background-color: #fff;
  position: absolute;
  bottom: 0px;
  z-index: 999;
}
footer .discuss input {
  height: 35px;
  line-height: 50px;
  border-radius: 8px;
  width: 80%;
  margin-left: 10px;
  background-color: #d6d6d6;
  padding-left: 10px;
  outline: none;
  border-style: none;
  box-sizing: border-box;
}
footer .discuss button {
  height: 100%;
  background-color: #fff;
  color: gray;
  font-size: 15px;
  width: 13%;
  margin-left: 7px;
  outline: none;
  border: none;
}
footer .search .sousuo {
  height: 30px;
  display: flex;
  border-radius: 10px;
  background-color: rgb(223, 220, 220);
  margin-top: 5px;
  margin-left: 5px;
}
footer .search .sousuo i {
  font-size: 14px !important;
  margin: -5px 5px 0 10px;
  color: gray;
}
footer .search .sousuo .type {
  font-size: 15px;
  height: 100%;
  width: 80%;
  float: right;
  margin-left: 0px;
  outline: none;
  border-style: none;
  border-radius: 10px;
  background-color: rgb(223, 220, 220);
}
footer .icon {
  position: absolute;
  left: 200px;
  top: 6px;
}
footer .icon div {
  display: inline;
}
footer .icon i {
  display: inline;
  margin-right: 21px;
  font-size: 25px !important;
  /* color: black; */
}
</style>