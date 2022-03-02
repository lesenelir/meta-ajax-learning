const express = require('express')

// 创建应用框架
const app = express()

// 创建路由规则
app.get('/', (request, response) => {
  // 设置响应体
  response.send('Hello Ajax')
})

app.listen(8000, () => {
  console.log("服务器已经启动, 8000端口监听中")
})
