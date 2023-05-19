"use strict";
/**
 * @description 柯里化函数
 * @param fn 功能函数
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
function curry(fn) {
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else {
            return function () {
                var args2 = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args2[_i] = arguments[_i];
                }
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}
exports.curry = curry;
