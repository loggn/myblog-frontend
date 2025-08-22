<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const classes = ref([
  { id:1, picture:"/可爱电路板.png", title: "硬件", text1:"老手艺不能忘，祖宗之法不能丢啊！！", text2:"硬件小玩具也是玩具"},
  { id:2, picture:"/可爱小猫.png", title: "嵌入式", text1:"你为啥学后端了？", text2:"我绝对不说，我原本是学嵌入式的，被带偏了"},
  { id:3, picture:"/可爱猫猫.png", title: "后端", text1:"哇~~这何尝不是又一种泼天的流量呢？", text2:"我接"},
  { id:4, picture:"/可爱小狗.png", title: "前端", text1:"一名后端开发怎么能不会一点儿前端呢？", text2:"嘿嘿，我的最爱，写小工具可方便了"}
])

const toArticlesPage = (id) => {
  router.push({ name: 'Articles',query: { id: id } })
}
</script>

<template>
  <div class="background-box">
    <div class="header-box">
      <div class="header-left">
        <div>
          <router-link to="/">首页</router-link>
        </div>|
        <div>
          <router-link to="articles">文章列表</router-link>
        </div>|
        <div>
          动态广场
        </div>
      </div>
      <div class="header-center">
        <p>刘龙龙的博客</p>
      </div>
      <div class="header-right">
        <div>
          搜索
        </div>|
        <div>
          黑白切换
        </div>
      </div>
    </div>
    <div class="body-box">
      <div class="introduction-box">
        <br>
        <h1>欢迎来到我的博客！</h1>
        <p>我是大傻逼！目前应该还不会有人看吧，嘿嘿！！！</p>
        <p>不对！我是奶龙，嗷呜~~</p>
      </div>
      <div class="class-box">
        <div 
          class="content-card"
          v-for="v in classes"
          :key="v.id"
        >
          <div class="picture-card" @click="toArticlesPage(v.id)">
            <img :src=" v.picture " alt="图片">
          </div>
          <div class="text-card">
            <h1>{{ v.title }}</h1>
            <p>{{ v.text1 }}</p>
            <p>{{ v.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-box">
      <p>比如备案号？反正还没想好可以写什么</p>
    </div>
  </div>
</template>

<style scoped>
.background-box {
  height: 100vh;

  background-image: url(/初始背景.png);
  background-size: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-box {
  background-color: #1d1c1e;
  height: 40px;
  width: 100%;

  color: #fff;

  display: flex;
  align-items: center; 
  justify-content: space-between;
}

.header-left {
  width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header-right {
  width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.body-box {
  height: 87%;
  width: 100%;

  display: flex;
  flex-direction: column;
  
}

.introduction-box {
  margin-top: 25px;

  height: 25%;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.class-box {
  height: 75%;
  width: 100%;

  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.content-card {
  height: 80%;
  width: 21%;
}

.picture-card {
  height: 50%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
}

.picture-card img {
  width: 100%;
  height: 100%;
}

.text-card {
  height: 30%;

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.foot-box {
  height: 8%;
  width: 100%;

  background-color: #1d1c1e;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
}
</style>
