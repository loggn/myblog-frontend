<script setup></script>

<template>
  <div class="background-box">
    <div class="header">
      <div class="header-left">
        页面选项
      </div>
      <div class="header-right">
        功能选项
      </div>
    </div>
    <div class="body-box">
      <div class="content-card">
        硬件内容区
      </div>
      <div class="content-card">
        单片机控制软件内容区
      </div>
      <div class="content-card">
        后端内容区
      </div>
      <div class="content-card">
        前端内容区
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-box {
  height: 100vh;

  background-image: url(/星空.png);
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  background-color: #000;
  height: 10vh;
  width: 90%;

  position: absolute;
  top:20px;

  color: #fff;

  display: flex;
  align-items: center; 
  justify-content: space-between;
}

/* .header-left {
  
}

.header-right {
  
} */

.body-box {
  height: 60%;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.content-card {
  background-color: #fff;

  height: 80%;
  width: 20%;
}

</style>
