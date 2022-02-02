const express = require('express')

var router = express.Router();

var adminController = require('../controllers/adminController')



router.post('/addBooks',adminController.addBooks)
router.post('/registerAdmin',adminController.regAdmin)
router.post('/adminLogin',adminController.adminLogin);
router.get('/getAdminList',adminController.getAdmin);//show the data of admin on the web page

module.exports = router;