// this file isnt transpiled so use commonjs or es5

// register babel to transpile before run tests
require('babel-register')();

// disable webpack features that mocha doesnt understand

require.extensions['.css'] = function () { };
