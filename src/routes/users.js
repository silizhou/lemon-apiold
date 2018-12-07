var express = require('express');
var router = express.Router();

var userApi = require('./user');
console.log(userApi)
    /* GET users listing. */
router.get('/api/userlist', userApi.selectUser);
module.exports = router;