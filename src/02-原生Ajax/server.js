const express = require('express')

const app = express()


// 1.
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('Hello Ajax GET')
})


// 2.
app.post('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('Hello Ajax POST')
})


// 3.
// 监听url为json-server的GET / POST 请求
app.all('/json-server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 响应一个数据
  const data = {
    name: 'lesenelir',
    age: 18
  }
  let str = JSON.stringify(data)  // 对象转换为字符串

  // 设置响应体 (send函数的参数必须是字符串类型，所以上一步骤需要进行JSON字符串转换)
  response.send(str)
})


// 4. 延时响应
app.get('/delay', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  setTimeout(() => {
    response.send('Hello Delay')
  }, 3000)
})

app.listen(8000, () => {
  console.log("服务器已经启动, 8000端口监听中")
})
