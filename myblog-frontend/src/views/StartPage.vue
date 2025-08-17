<script setup></script>

<template>
  <div class="background-box">
    <div class="small-box">
      <div class="head-portrait">
        <router-link to="/">
        <img src="/头像.png" alt="头像">
        </router-link>
      </div>
      <h2>「保持热爱，奔赴山海」</h2>
      <br>
      <p>Hi，我是 刘人龙，一名后端开发爱好者，正在打造我的个人博客。</p>
    </div>
  </div>

</template>

<style scoped>
.background-box {
  height: 100vh;

  /* 背景 */
  background-image:url(/初始背景.png);
  background-size: 100% 100%;

  /* 内容位置 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.small-box {
  /* 头像、文字位置 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 背景底板 */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;

  /* 文字颜色 */
  color: #fff;
}

/* 头像框 */
.head-portrait {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
}
/* 头像图片 */
.head-portrait img {
  width: 100%;
  height: 100%;
}
</style>
