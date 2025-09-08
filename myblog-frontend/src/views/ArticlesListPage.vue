<script setup>
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const router = useRouter()
const classes = ref([])
const list = ref([])
// 当前选中的分类 id，默认第一个分类
const selectedClassId = ref(null)

// 页面挂载时：请求分类、文章
onMounted(async () => {
  await fetchClasses()
  if (route.query.id) {
    selectedClassId.value = Number(route.query.id)
    await fetchArticles(selectedClassId.value)
  }
})

async function fetchClasses() {
  try {
    const res = await axios.get("http://localhost:8080/api/classes")
    if (res.data.code === 200) {
      classes.value = res.data.data
      // 如果没有路由参数，默认选第一个分类
      if (!selectedClassId.value && classes.value.length > 0) {
        selectedClassId.value = classes.value[0].id
        await fetchArticles(selectedClassId.value)
      }
    }
  } catch (err) {
    console.error("获取分类失败:", err)
  }
}

async function fetchArticles(classId) {
  try {
    const res = await axios.get(`http://localhost:8080/api/articles/class/${classId}`)
    if (res.data.code === 200) {
      list.value = res.data.data
    }
  } catch (err) {
    console.error("获取文章失败:", err)
  }
}

const selectClass = async (id) => {
  selectedClassId.value = id
  await fetchArticles(id)
}

const toArticlesDetailPage = (id) => {
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
        <div 
          class="content-card"
          v-for="v in classes"
          :key="v.id"
          @click="selectClass(v.id)"
          :class="{ active: selectedClassId === v.id }"
        >
          <h1>{{ v.title }}</h1>
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

  cursor: pointer;
}

.content-card:hover {
  transform: scale(1.1);
}

.content-card.active {
  color: #f3c76a;
  font-weight: bold;
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
  
  cursor: pointer;
}

.article-card:hover p {
  color: #ffeb3b;
  font-size: 1.2em;
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
