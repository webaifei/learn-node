const vm = require('vm');

const context = {
    animal: 'cat',
    count: 2
};

const script = new vm.Script(`
    count += 1; name = "kitty";
    // 在不同的上下文中执行 没有看到输出
    console.log(animal);
`);

vm.createContext(context);
for (let i = 0; i < 10; ++i) {
    script.runInContext(context);
}

console.log(context);
