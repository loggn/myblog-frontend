<script setup>
import { ref, computed, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const classes = ref([
  { id:1, title: "硬件" },
  { id:2, title: "嵌入式"},
  { id:3, title: "后端"},
  { id:4, title: "前端"}
])
const list = ref([
  { id: 1, class_id: 1, title: "硬件基础笔记" },
  { id: 2, class_id: 1, title: "基础电路" },
  { id: 3, class_id: 1, title: "数电基础" },
  { id: 4, class_id: 1, title: "示波器使用常识" },
  { id: 5, class_id: 2, title: "嵌入式小项目" },
  { id: 6, class_id: 2, title: "ROTS" },
  { id: 7, class_id: 2, title: "串口协议" },
  { id: 8, class_id: 3, title: "go语言基础" },
  { id: 9, class_id: 3, title: "搭建高并发服务器流程记录" },
  { id: 10, class_id: 4, title: "随手记" },
  { id: 11, class_id: 4, title: "软件小项目" },
  { id: 12, class_id: 4, title: "前端常识" },
])
// 当前选中的分类 id，默认第一个分类
const selectedClassId = ref(classes.value[0].id)

const route = useRoute()
// 页面挂载时，看路由有没有传 id
onMounted(() => {
  if (route.query.id) {
    selectedClassId.value = Number(route.query.id)
  }
})

// 过滤后的文章列表
const filteredList = computed(() => {
  return list.value.filter(item => item.class_id === selectedClassId.value)
})

const selectClass = (id) => {
  selectedClassId.value = id
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
          v-for="item in filteredList" 
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
