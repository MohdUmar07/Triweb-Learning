"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const user = new user_1.default(req.body);
        const result = yield user.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "Registration done!", data: { userId: result._id } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
        // console.log(error);
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("body", req.body);
    // console.log("query",req.query);
    // console.log("params", req.params.userId);
    // res.send("Done!")
    let resp;
    try {
        const userId = req.params.userId;
        const user = yield user_1.default.findById(userId, { name: 1, email: 1 });
        if (!user) {
            resp = { status: "error", message: " No user found ", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "User found ", data: user };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
        console.log(error);
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    // try {
    //     const userId = req.body._id;
    //     const user = await User.findById(userId);
    //     user.name = req.body.name;
    //     await user.save();
    //     resp = { status: "success", message: "User updated ", data: {} };
    //     res.send(resp);
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        const userId = req.body._id;
        const user = yield user_1.default.findById(userId);
        if (!user) {
            resp = { status: "error", message: " No user found ", data: {} };
            res.send(resp);
        }
        else {
            user.name = req.body.name;
            yield user.save();
            resp = { status: "success", message: "User updated", data: {} };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
    }
});
exports.updateUser = updateUser;
