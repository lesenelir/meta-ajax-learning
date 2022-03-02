const express = require('express')

// 创建应用框架
const app = express()

// 创建路由规则
app.get('/check-username', (request, response) => {
  // 设置响应体
  const data =  {
    exist: 1,
    msg: '用户名已经存在'
  }
  let str = JSON.stringify(data)
  // 返回结果
  response.end(`handle(${str})`)
})

app.listen(8000, () => {
  console.log("服务器已经启动, 8000端口监听中")
})
