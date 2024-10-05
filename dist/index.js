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
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
const PORT = 3000;
const URL = "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/builderDB?retryWrites=true&w=majority&appName=Cluster0";
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: "Hello from Dribble API!",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error" });
    }
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(URL).then(() => {
        console.clear();
        console.log("DB connection ❤️❤️🚀🚀");
    });
}));
