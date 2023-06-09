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
exports.LoadingPlan = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let LoadingPlan = class LoadingPlan extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LoadingPlan.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], LoadingPlan.prototype, "expiresOn", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], LoadingPlan.prototype, "processed", void 0);
LoadingPlan = __decorate([
    sequelize_typescript_1.Table
], LoadingPlan);
exports.LoadingPlan = LoadingPlan;
