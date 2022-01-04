const okGlobal = {
    path: ''
}
function updateGlobal(path) {
    okGlobal.path = path;
}
function render(req) {
   
    return `userID: ${okGlobal.path}`;
}
module.exports = {
    render,
    updateGlobal
};