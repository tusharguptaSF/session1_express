const router = require('express').Router();
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
router.get('/',(req,res) => {
    res.status(200).send(users);
})
router.post('/',(req,res) => {
   // let data = req.body;
    users.push(req.body);
    res.status(201).send(users);

})
module.exports = router;