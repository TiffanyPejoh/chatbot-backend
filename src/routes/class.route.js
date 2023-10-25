const router = require('express').Router();
const classController = require('../controller/class.controller');

router.get('/', classController.getAllClass);
router.get('/:classId', classController.getClassById);
router.post('/', classController.postClass);
router.delete('/:classId', classController.deleteClass);

module.exports = router;
