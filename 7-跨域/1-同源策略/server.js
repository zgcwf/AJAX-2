const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*');

    //在9999端口号的服务器上，响应一个页面
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // 在当前页面的服务器内请求资源，同源
    response.send('用户数据');
});

app.listen(9999, () => {
    console.log("服务已经启动...");
});