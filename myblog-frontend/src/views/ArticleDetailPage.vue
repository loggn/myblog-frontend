<script setup>
import { useRoute } from "vue-router"
import { ref } from "vue"

const list = ref([
  { id: 1, title: "文章标题一", text: "文章内容一:假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字" },
  { id: 2, title: "文章标题二", text: "文章内容二:假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字" },
  { id: 3, title: "文章标题三", text: "文章内容三:假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字假装这里有一大段文字" }
])

const route = useRoute()
const id = Number(route.params.id)
const item = list.value.find(i => i.id === id)

</script>

<template>
    <div class="background-box">
    <div class="header-box">
      <div class="header-left">
        <div>
          <router-link to="/">首页</router-link>
        </div>|
        <div>
          <router-link to="/articles">文章列表</router-link>
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
      <div class="content-box">
        <h1>{{ item.title }}</h1>
        <p>{{ item.text }}</p>
      </div>
      <div class="DirList-Box">
        目录列表
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
  justify-content: space-between;
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
  justify-content: center;
}

.content-box {
  height: 100%;
  width: 60%;

  color: #fff;

  background-color: rgba(0, 0, 0, 0.6);
}

.content-box h1 {
  text-align: center;
}

.DirList-Box {
  width: 250px;
  height: 350px;
  margin-left: 20px;

  color: #fff;

  background-color: rgba(0, 0, 0, 0.6);

  text-align: center;
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
