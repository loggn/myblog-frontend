import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import StartPage from '@/views/StartPage.vue'
import ArticlesListPage from '@/views/ArticlesListPage.vue'
import ArticleDetailPage from '@/views/ArticleDetailPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/articles', name: 'Articles', component: ArticlesListPage },
  { path: '/articles/:id', name: 'ArticleDetail', component: ArticleDetailPage },
  { path: '/start', name: 'start', component: StartPage}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// let first = true
// // eslint-disable-next-line no-unused-vars
// router.beforeEach((to, from, next) => {
//   if (to.path === '/' && first) {
//     first = false
//     next('/start')
//   } else {
//     next()
//   }
// })

let first = true
// eslint-disable-next-line no-unused-vars
router.beforeEach((to) => {
  if (first) {
    first = false
    return { path: '/start' }
  }
})

export default router
