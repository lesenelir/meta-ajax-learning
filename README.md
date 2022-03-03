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

---

### XHR

**HTTP请求和Ajax请求的区别：**

- ajax请求是一种特殊的http请求
- 对服务端来说没有任何区别，区别在浏览器端
- 浏览器端发送请求：只有XHR和fetch发送的才是ajax请求，其他的都是非ajax请求
- 浏览器端接受到响应
  - 一般请求：浏览器一般会直接显示响应体数据，即刷新/跳转页面
  - ajax请求：浏览器不会对界面进行更新操作，只是调用监视的回调函数并传入响应相关数据

---

### axios

**axios特点：**

- 基于promise的异步ajax请求库
- 浏览器端 / node端都可以使用
- 支持请求 / 响应**拦截器**
- 支持请求取消
- 请求 / 响应 数据转换
- 批量发送多个请求


