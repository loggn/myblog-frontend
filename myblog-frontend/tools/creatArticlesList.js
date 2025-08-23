import fs from "fs"
import path from "path"
import matter from "gray-matter"  

const markdownDir = path.resolve("public/markdown")
const outputFile = path.resolve("data/articles.js")

const files = fs.readdirSync(markdownDir).filter(f => f.endsWith(".md"))

const articles = files.map(file => {
  const content = fs.readFileSync(path.join(markdownDir, file), "utf-8")
  const { data } = matter(content) 
  return {
    ...data,
    file: file
  }
})

fs.writeFileSync(
  outputFile,
  `export const articles = ${JSON.stringify(articles, null, 2)}`
)

console.log("✅ 生成文章列表成功：", articles.length, "篇")
