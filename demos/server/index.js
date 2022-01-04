const http =  require('http');

const app = http.createServer(async (req, res)=> {
    const path = req.url;
    console.log(path);
    // 加载server bundle
    const {render, updateGlobal} = require('./server.bundle');
    // 执行
    updateGlobal(path);
    // mock async task 获取异步数据
    await longTask(path);
    res.end(`
        <p>${render(req)}</p>
    `)
})
app.listen(3001, () =>{
    console.log('server started at port: 3001');
});

function longTask(path) {
    const time = Math.random() * 3000 | 0 + 1000;
    console.log('path: %s, time: %d',path, time)
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(1)
        }, time);
    })    
}