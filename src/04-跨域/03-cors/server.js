const express = require('express')

const app = express()

app.all('/axios-server', (request, response) => {
  // CORS 解决跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Method', '*')
  // 设置响应体
  const data = {
    name: 'lesenelir'
  }
  response.send(JSON.stringify(data))
})

app.listen(8000, () => {
  console.log("服务器已经启动, 8000端口监听中")
})
