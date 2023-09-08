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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://myuser:abcd1234@mycluster.jkyhiwt.mongodb.net/workshopDb?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Hi Hello");
});
app.use('/user', user_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(connectionString);
            app.listen(3002, () => {
                console.log("Server connect at port 3002 ");
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
startServer();
