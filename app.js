"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var config = __importStar(require("./utils/config"));
var pingRouter_1 = __importDefault(require("./controllers/pingRouter"));
var userRouter_1 = require("./controllers/userRouter");
var loginRouter_1 = require("./controllers/loginRouter");
var recipeRouter_1 = require("./controllers/recipeRouter");
var app = express_1.default();
try {
    mongoose_1.default.connect(config.URI, config.mongooseConfig, function () {
        console.log("successfully connected to mongoose");
    });
}
catch (e) {
    console.log(e.message);
}
;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/", express_1.default.static("build"));
app.use("/api/ping", pingRouter_1.default);
app.use("/api/user", userRouter_1.userRouter);
app.use("/api/login", loginRouter_1.loginRouter);
app.use("/api/recipe", recipeRouter_1.recipeRouter);
module.exports = app;
