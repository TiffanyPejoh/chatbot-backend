const router = require('express').Router();
const functionController = require('../controller/function.controller');

router.get('/gpa/:userId', functionController.getGPA);
router.get('/cumulativeGPA', functionController.getCumulativeGPA);

module.exports = router;
