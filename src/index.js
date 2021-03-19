"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path = require('path');
var api = require('./api');
var app = express_1.default();
app.use('/home', express_1.default.static(path.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Default Route to validate
app.use(function (req, res, next) {
    console.log("Gettig the Request");
    next();
}, function (req, res, next) {
    if (req.get("token") === "jwttoken") {
        next();
        var users = [{
                id: 1,
                name: "AAA",
                age: 30
            },
            {
                id: 2,
                name: "bbb",
                age: 40
            }];
    }
    else {
        next(401);
    }
});
// localhost:8001/api/users
app.use('/api', api);
// Exporting the app
module.exports = app;
