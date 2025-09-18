import axios from "axios"

const api = axios.create({
  baseURL: new URL("api/", import.meta.env.VITE_API_BASE_URL).toString(),
  timeout: 5000,
})

export function getClasses() {
  return api.get("/classes")
}

export function getArticlesClass(classId) {
  return api.get(`/articles/class/${classId}`)
}