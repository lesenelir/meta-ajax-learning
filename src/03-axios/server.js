const express = require('express')

// 创建应用框架
const app = express()

// 创建路由规则
app.all('/axios-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 设置响应体
  const data = {
    name: 'lesenelir'
  }
  response.send(JSON.stringify(data))
})

app.listen(8000, () => {
  console.log("服务器已经启动, 8000端口监听中")
})
