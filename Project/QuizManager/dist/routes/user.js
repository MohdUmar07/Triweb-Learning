"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
// POST /user/
router.post('/', user_1.registerUser);
// GET /user/:userId
router.get('/:userId', user_1.getUser);
router.put('/', user_1.updateUser);
exports.default = router;
