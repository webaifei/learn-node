const fs = require('fs');
const path = require('path');
const vm = require('vm');

const code = fs.readFileSync(path.resolve(__dirname, './code/getfiles.js'), 'utf-8');
const obj = {
    // 代码中以来的任何的外部的方法或者对象 都需要在上下文中传入
    console: console,
}
const ctx = vm.createContext(obj);

// vm.runInThisContext(code);
vm.runInContext(code, ctx);

console.log(obj);

