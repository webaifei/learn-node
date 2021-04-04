const vm = require('vm');
const fs = require('fs');

// 可以编译执行js代码
// 类似eval和new Function的能力
const code  =`console.log(obj.name)`;
// vm.Script
const script = new vm.Script(code);
// console.log(script);
const ctx = {
    obj: {
        name: 'local-name',
        age: 10
    }
}
// 创建一个执行上下文
const context = vm.createContext(ctx);
// 全局对象
global.obj = {
    name: 'gloabl-obj',
    age: 10
}
// 在当前全局上下文 global中编译和执行代码
// script.runInThisContext();
// 在指定的上下文中 编译执行代码
const res = script.runInContext(context);
// const res = script.runInNewContext(context);


