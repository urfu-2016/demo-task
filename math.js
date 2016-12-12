"use strict";

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    if (c === undefined) {
        return parseInt(a, 10) + parseInt(b, 10);
    }
    if (b === undefined) {
        return parseInt(a, 10) + parseInt(c, 10);
    }
    if (a === undefined) {
        return parseInt(c, 10) + parseInt(b, 10);
    }

    return parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
};
