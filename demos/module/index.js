let conf = require('./render');
console.log(conf.name, '---1')
conf.name = 'A';
// 存在缓存 指向的module.exports 对象
conf = require('./render');
console.log(conf.name, '---2')
conf.name = 'B';
console.log(conf.name, '---3')
// setTimeout(()=> {
//     render({
//         name: 'A'
//     });
// })

// setTimeout(()=> {
//     render({
//         name: 'B'
//     });
// }, 1000)

// setTimeout(()=> {
//     render({
//         name: 'B'
//     });
// }, 1000)