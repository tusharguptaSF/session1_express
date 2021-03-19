"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
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
router.get('/', function (req, res) {
    res.status(200).send(users);
});
router.post('/', function (req, res) {
    // let data = req.body;
    users.push(req.body);
    res.status(201).send(users);
});
module.exports = router;
