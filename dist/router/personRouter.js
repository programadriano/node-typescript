"use strict";
const express_1 = require('express');
class PersonRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    get(req, res, next) {
        res.send("Person");
    }
    init() {
        this.router.get('/', this.get);
    }
}
exports.PersonRouter = PersonRouter;
const personRouter = new PersonRouter();
personRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = personRouter.router;
