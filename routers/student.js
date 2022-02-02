var express = require('express');

var router = express.Router();




const studentController = require('../controllers/studentController');

router.get('/getBook',studentController.getBooks)
// router.get('/getData',studentController.getData)

module.exports = router;