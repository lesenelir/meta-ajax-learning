# meta-ajax-learning
A project presentation about learning Ajax & axios
---

### 同源策略

服务端和客户端同源： 协议、域名、端口号都必须相同

违背同源策略就是跨域

> Ajax 默认发送同源策略请求



**如何解决跨域**

- JSONP
- CORS - 跨域资源共享
  - 不需要在客户端做任何特殊的操作，完全在服务器中进行处理
  - CORS 新增了一组HTTP首部字段，允许服务器声明哪些有权限访问的资源
  - 服务端设置响应头，告诉浏览器，该请求允许跨域

```js
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

```
