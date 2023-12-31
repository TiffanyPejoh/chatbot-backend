const express = require('express');
const userRoute = require('./user.route');
const classRoute = require('./class.route');
const absentRoute = require('./absent.route');
const gradesRoute = require('./grade.route');
const semesterRoute = require('./semester.route');
const functionRoute = require('./function.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/classes',
    route: classRoute
  },
  {
    path: '/absents',
    route: absentRoute
  },
  {
    path: '/grades',
    route: gradesRoute
  },
  {
    path: '/semesters',
    route: semesterRoute
  },
  {
    path: '/functions',
    route: functionRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
