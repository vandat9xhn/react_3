var path = require("path");

module.exports = {
    components: path.resolve(__dirname, "../src/components"),
    pages: path.resolve(__dirname, "../src/pages"),
    context: path.resolve(__dirname, "../src/context"),
    worker: path.resolve(__dirname, "../src/worker"),
    utils: path.resolve(__dirname, "../src/utils"),
    _hooks: path.resolve(__dirname, "../src/_hooks"),
};
