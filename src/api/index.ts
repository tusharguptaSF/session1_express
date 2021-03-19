// import express from 'express';
// let router = express.Router();
// // let route = require('express').Router();
// //router.Router();
// router.use('/users',require('./module/users'));
// module.exports = router;

import express, { Application, Router } from "express";
import UserRouter  from './module/users/user.route';
let router = express.Router();
router.use('/users',UserRouter);
export default router;

// // export class Routes {

//     public userRouter: UserRouter = new UserRouter();

//     public router = express.Router();

//     public routes(app: Application): void {
//         app.use('/api/v1/user', this.userRouter.getRoutes());
//     }



// }
