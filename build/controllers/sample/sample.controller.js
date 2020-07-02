"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleController = void 0;
const common_1 = require("@mayajs/common");
const core_1 = require("@mayajs/core");
const sample_service_1 = require("./sample.service");
let SampleController = class SampleController {
    constructor(services) {
        this.services = services;
    }
    root(req, res, next) {
        res.send(this.services.hello());
    }
};
__decorate([
    common_1.Get({ path: "/", middlewares: [] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], SampleController.prototype, "root", null);
SampleController = __decorate([
    core_1.Controller({
        model: "./sample.model",
        route: "/sample",
    }),
    __metadata("design:paramtypes", [sample_service_1.SampleServices])
], SampleController);
exports.SampleController = SampleController;
