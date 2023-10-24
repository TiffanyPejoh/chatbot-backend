const router = require('express').Router();
const gradeController = require('../controller/grade.controller');

router.get('/', gradeController.getAllGrades);
router.get('/user/:userId', gradeController.getGradeByUserId);
router.get('/class/:classId', gradeController.getGradeByClassId);
router.get('/:classId/:userId', gradeController.getGradeByClassIdAndUserId);
router.post('/', gradeController.postGrade);

module.exports = router;
