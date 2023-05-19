"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatArray = void 0;
function flatArray(arr, level) {
    return level > 0
        ? arr.reduce(function (prev, cur) {
            return prev.concat(Array.isArray(cur) ? flatArray(cur, level - 1) : cur);
        }, [])
        : arr.slice();
}
exports.flatArray = flatArray;
