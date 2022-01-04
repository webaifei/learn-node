const cluster = require('cluster');
const http = require('http');
const os = require('os');

// 这里获取到的cpu核数是逻辑 并不是真实的物理核数（超线程？）
const cpus = os.cpus().length;

// console.log(cluster);

if(cluster.isMaster) {
    console.log('Master process run at pid: %d', process.pid);
    for(let i = 0; i<cpus; i++) {
        // 内部基于child_process.fork()实现
        // child_process.fork()默认的
        cluster.fork();
        cluster.on('exit', (worker, code, signal)=> {
            console.log(`worker ${worker.process.pid} died`);
        })
    }
} else {
    http.createServer(function (req,res) {
        res.writeHead(200);
        res.end(`worker run pid: ${process.pid} , say hello world`);
    }).listen(8000);
    console.log(`Worker ${process.pid} started`);
}


