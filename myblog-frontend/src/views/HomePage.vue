<script setup></script>

<template>
  <div class="background-box">
    <div class="header">
      <div class="header-left">
        <div>
          <router-link to="/">首页</router-link>
        </div>|
        <div>
          <router-link to="articles">文章列表</router-link>
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
        <div class="content-card">
          <div class="picture-card">
            <img src="/可爱电路板.png" alt="可爱电路板">
          </div>
          <div class="text-card">
            <h1>硬件</h1>
            <p>学习基础电路，掌握硬件基础</p>
          </div>
        </div>
        <div class="content-card">
          <div class="picture-card">
            <img src="/可爱小猫.png" alt="可爱电路板">
          </div>
          <div class="text-card">
            <h1>单片机</h1>
            <p>学习单片机，学习边缘计算</p>
          </div>
        </div>
        <div class="content-card">
          <div class="picture-card">
            <img src="/可爱猫猫.png" alt="可爱电路板">
          </div>
          <div class="text-card">
            <h1>后端</h1>
            <p>学习高并发</p>
          </div>
        </div>
        <div class="content-card">
          <div class="picture-card">
            <img src="/可爱小狗.png" alt="可爱电路板">
          </div>
          <div class="text-card">
            <h1>前端</h1>
            <p>学习界面</p>
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

  background-image: url(/星空.png);
  /* background-color: rgb(50, 49, 49); */
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  background-color: #1d1c1e;
  height: 5%;
  width: 100%;

  color: #fff;

  display: flex;
  align-items: center; 
  justify-content: space-between;
}

.header-left {
  width: 150px;

  /* background-color: aqua; */

  display: flex;
  align-items: center;
  justify-content: center;
}

.header-right {
  width: 150px;

  /* background-color: aqua; */

  display: flex;
  align-items: center;
  justify-content: center;
}

.body-box {
  height: 87%;
  width: 100%;

  padding-top: 15px;

  display: flex;
  flex-direction: column;
  
}

.introduction-box {
  margin-top: 25px;

  /* background-color: #ded110; */

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

  /* background-color: rgba(255, 255, 255, 0.1); */

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
