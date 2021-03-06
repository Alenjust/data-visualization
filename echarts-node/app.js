// 服务器的入口文件
// 1.创建koa的实例对象
const Koa = require('koa')
const app = new Koa()
// 2.绑定中间件
// 绑定第一层中间件 计算总耗时中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 绑定第二层中间件 设置响应头中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
// 绑定第三层中间件 读取文件数据
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
// 3.绑定端口号 8888
app.listen(8888, () => { console.log('服务启动成功'); })

const webSocketService = require('./service/web_socket_service')
// 开启服务端的监听
webSocketService.listen()