const router = require('express').Router();
const semesterController = require('../controller/semester.controller');

router.get('/', semesterController.getAllSemesters);
router.get('/semester/:semesterYear', semesterController.getSemesterById);
router.get('/user/:userId', semesterController.getSemesterByUserId);
router.get('/:semesterYear/:userId', semesterController.getSemesterByClassId);
router.post('/', semesterController.postSemester);

module.exports = router;
