import express, { Application, Router } from "express";
// import { UserRouter } from './module/users';
// let router = express.Router();
// router.use('/users',UserRouter);
// export default router;

let UserRouter = express.Router();
const users = [{
    id:1,
    name:"AAA",
    age:30
},
{
    id:2,
    name:"bbb",
    age:40
}]
UserRouter.get('/',(req,res) => {
    res.status(200).send(users);
})
UserRouter.post('/',(req,res) => {
   // let data = req.body;
    users.push(req.body);
    res.status(201).send(users);

})
export default UserRouter