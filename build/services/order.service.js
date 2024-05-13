"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrderService = exports.newOrder = void 0;
const asyncErrorHandler_1 = require("../middleware/asyncErrorHandler");
const order_model_1 = __importDefault(require("../models/order.model"));
exports.newOrder = (0, asyncErrorHandler_1.AsyncErrorHandler)(async (data, res) => {
    const order = await order_model_1.default.create(data);
    res.status(201).json({
        success: true,
        order
    });
});
//get all orders
const getAllOrderService = async (res) => {
    const orders = await order_model_1.default.find().sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        orders
    });
};
exports.getAllOrderService = getAllOrderService;
