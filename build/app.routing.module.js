"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const sample_controller_1 = require("./controllers/sample/sample.controller");
exports.routes = [
    {
        controllers: [sample_controller_1.SampleController],
        middlewares: [],
        path: "",
    },
];
