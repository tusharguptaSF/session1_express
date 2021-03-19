const router = require('express').Router();
router.use('/users',require('./module/users'));
module.exports = router;