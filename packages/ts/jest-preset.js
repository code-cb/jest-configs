"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['**/test/**/*.[jt]s?(x)'],
    testPathIgnorePatterns: ['/_\\w+.\\w+$'],
    transform: { '\\.jsx?|tsx?|cts|mts$': '@codecb/babel-jest' },
};
exports.default = exports.config;
