"use strict";
/**
 *
 * @description 某一个函数只允许执行一次
 * @param fn 被执行函数
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = void 0;
function once(fn) {
    // 利用闭包判断函数是否执行过
    var called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true;
            fn.apply(this, args);
        }
    };
}
exports.once = once;
