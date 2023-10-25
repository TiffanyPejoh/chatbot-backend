const router = require('express').Router();
const absentController = require('../controller/absent.controller');

router.get('/', absentController.getAllAbsent);
router.get('/user/:userId', absentController.getAbsentByUserId);
router.get('/class/:classId', absentController.getAbsentByClassId);
router.get('/:classId/:userId', absentController.getAbsentByClassIdAndUserId);
router.post('/', absentController.postAbsent);
router.delete('/:classId/:userId', absentController.deleteAbsent);

module.exports = router;
