"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send("hello world" + config_1.default.get('configPath'));
});
var port = config_1.default.get('port');
port = port === '' ? 3000 : port;
app.listen(port, function () { return console.log("Server is listening"); });
