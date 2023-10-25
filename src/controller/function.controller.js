const User = require('../model/user');
const Class = require('../model/class');
const Grade = require('../model/grade');
const Semester = require('../model/semester');
const Absent = require('../model/absent');

// convert grade into A, B, C, D, E, F
const getGradeAlphabet = (grade) => {
  if (grade >= 91) {
    return 'A';
  }
  if (grade >= 85) {
    return 'A-';
  }
  if (grade >= 82) {
    return 'B+';
  }
  if (grade >= 78) {
    return 'B';
  }
  if (grade >= 75) {
    return 'B-';
  }
  if (grade >= 70) {
    return 'C+';
  }
  if (grade >= 67) {
    return 'C';
  }
  if (grade >= 60) {
    return 'C-';
  }
  if (grade >= 40) {
    return 'D';
  }
  return 'F';
};

const getGradeWeight = (grade) => {
  if (grade === 'A') {
    return 4;
  }
  if (grade === 'A-') {
    return 3.7;
  }
  if (grade === 'B+') {
    return 3.3;
  }
  if (grade === 'B') {
    return 3;
  }

  if (grade === 'B-') {
    return 2.7;
  }
  if (grade === 'C+') {
    return 2.3;
  }
  if (grade === 'C') {
    return 2;
  }
  if (grade === 'C-') {
    return 1.7;
  }
  if (grade === 'D') {
    return 1;
  }
  return 0;
};

const getSingleGrade = (credits, grades) => {
  return credits * grades;
};

const calculateCumulativeGPA = async (userId, semesterYear, semesterNumber) => {
  const semesters = await Semester.find({
    userId,
    semesterYear,
    semesterNumber
  });

  //   get all grades in semester
  const grades = await Grade.find({
    classId: { $in: semesters.map((semester) => semester.classId) }
  });

  const classes = await Class.find({
    classId: { $in: grades.map((grade) => grade.classId) }
  });

  //   console.log(classes);
  //   get total credits with userId
  const totalCredits = classes.reduce((acc, cur) => acc + cur.credits, 0);

  //   get total grade with userId
  let totalGrade = 0;
  for (let i = 0; i < classes.length; i++) {
    const grade = grades[i];
    const classId = grade.classId;
    const classGrade = grade.grade;
    const classCredits = classes.find((c) => c.classId === classId).credits;
    const gradeWeight = getGradeWeight(getGradeAlphabet(classGrade));
    const singleGrade = getSingleGrade(classCredits, gradeWeight);
    totalGrade += singleGrade;
  }
  //   console.log(totalGrade, totalCredits);

  return totalGrade / totalCredits;
};

const getCumulativeGPA = async (req, res) => {
  try {
    const { userId, semesterYear, semesterNumber } = req.query;

    // console.log(req.query);

    const gpa = await calculateCumulativeGPA(
      userId,
      semesterYear,
      semesterNumber
    );

    res.status(200).json(gpa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGPA = async (req, res) => {
  // get cumulative gpa of all semester and divide by number of semester
  try {
    const { userId } = req.params;
    const semesters = await Semester.find({ userId });
    const gpa = await Promise.all(
      semesters.map(async (semester) => {
        const { semesterYear, semesterNumber } = semester;
        const gpa = await calculateCumulativeGPA(
          userId,
          semesterYear,
          semesterNumber
        );
        return gpa;
      })
    );
    const totalGPA = gpa.reduce((acc, cur) => acc + cur, 0);
    const totalSemester = semesters.length;
    const averageGPA = totalGPA / totalSemester;

    res.status(200).json(averageGPA);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCumulativeGPA,
  getGPA
};
