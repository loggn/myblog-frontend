<script setup></script>

<template>
  <!-- 暂时方便保留，方便切换界面 -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/start">start</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/articles/:id">ArticleDetail</router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
