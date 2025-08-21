<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const list = ref([
  { id: 1, title: "文章标题一" },
  { id: 2, title: "文章标题二" },
  { id: 3, title: "文章标题三" }
])

const toArticlesDetailPage = (id) => {
  console.log("文章ID:", id)
  router.push({ name: 'ArticleDetail', params: { id } })
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
      <div class="body-left">
        <div class="content-card">
          <h1>类别1</h1>
        </div>
        <div class="content-card">
          <h1>类别2</h1>
        </div>
        <div class="content-card">
          <h1>类别3</h1>
        </div>
        <div class="content-card">
          <h1>类别4</h1>
        </div>
      </div>
      <div class="body-center">
        <div 
          class="article-card" 
          v-for="item in list" 
          :key="item.id"
          @click="toArticlesDetailPage(item.id)"
        >
          <p>
            {{ item.title }}
          </p>
        </div>
      </div>
      <div class="body-right">
        <div class="label-card">
          标签区
        </div>
        <div class="message-board">
          <h1>留言板</h1>
          <p>留言1</p>
          <p>留言2</p>
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

.body-box{
  height: 87%;

  display: flex;
  justify-content: center;
}

.body-left {
  height: 40%;
  width: 10%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content-card {
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: center;

  margin-right: 10px;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}

.body-center {
  height: 90%;
  width: 40%;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  margin-top: 30px;
}

.article-card {
  width: 100%;
  height: 8%;

  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.body-right {
  height: 90%;
  width: 20%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.label-card {
  width: 100%;
  height: 50%;

  margin-left: 20px;
  
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}

.message-board {
  width: 100%;
  height: 40%;

  margin-left: 20px;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
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
