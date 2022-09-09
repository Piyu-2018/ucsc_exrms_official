const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

const { user, course, lecturer_courses, assignments, student, mark } =
  new PrismaClient();

const getCourses = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);

  console.log("courses");

  const courses = [];

  connection.query(
    "SELECT lecturer_courses.*,course.* FROM user,lecturer_courses,course WHERE user.user_id = lecturer_courses.user_id AND course.course_id = lecturer_courses.course_id AND user.user_id =" +
      user_id,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );

  // const courses = await findMany({
  //     where: {
  //         course_id : course.course_id
  //     }
  // })
});

const getAssign = asyncHandler(async (req, res) => {
  const course_id = parseInt(req.params.id1);
  const user_id = parseInt(req.params.id2);

  // console.log(user_id);

  connection.query(
    "SELECT * FROM assignments WHERE lecturer_id=" +
      user_id +
      " AND course_id=" +
      course_id,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUndergraduates = asyncHandler(async (req, res) => {

  const acYear = (req.params.id1);
  const cuYear = (req.params.id2);
  const degree_type = (req.params.id3);


  const student = [];

  connection.query(

    "SELECT academic_year.* FROM academic_year WHERE academic_year.aca_year ="+'"'+
    acYear+'"'+ "AND academic_year.current_year =" +'"'+
    cuYear +'"'+
      " AND academic_year.degree_type =" +
      '"'+degree_type+'"',
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getResult = asyncHandler(async (req, res) => {
  const mark_id = (req.params.id1);
  const degree = (req.params.id2);
  
  const mark = [];

  connection.query(
    "SELECT exam_mark.*,exam.*,exam_question_mark.* FROM exam,exam_mark,exam_question_mark WHERE exam_mark.mark_id = exam_question_mark.mark_id AND exam_mark.exam_sem_id = exam.exam_sem_id AND exam_mark.mark_id =" +'"'+
    mark_id  +'"'+
      " AND exam_mark.degree =" +
      '"'+degree+'"',
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const assignAdd = asyncHandler(async (req, res) => {
  const { name, description, contribution, lecturer_id, course_id } = req.body;

  const contribution1 = parseInt(contribution);
  const lecturer_id1 = parseInt(lecturer_id);
  const course_id1 = parseInt(course_id);

  console.log("AddAssign");

  console.log(course_id);
  console.log(typeof course_id);
  console.log(course_id1);
  console.log(typeof course_id1);

  // console.log(req.body);
  // const newUser = await assignments.create({
  //   data: {
  //     name,
  //     description,
  //     contribution: contribution1,
  //     lecturer_id: lecturer_id1,
  //     course_id: course_id1,
  //   },
  // });

  const newUser = await assignments.create({
    data: {
      name: name,
      description: description,
      contribution: contribution1,
      lecturer_id: lecturer_id1,
      course_id: course_id1,
    },
  });

  console.log("Hi");

  const returnData = {
    name: newUser.name,
    description: newUser.description,
    contribution: newUser.contribution,
    lecturer_id: newUser.lecturer_id,
    course_id: newUser.course_id,
  };

  res.status(StatusCodes.CREATED).json(returnData);
});

const assignMarkAdd = asyncHandler(async (req, res) => {
  const data = req.body;
  console.log(data.dataMarks);
  var values = [];
  var sql =
    "INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (?)";

  await data.dataMarks.map(
    (row) => {
      connection.query(
        `SELECT * FROM marks_assignment WHERE index_number = '${row.index_number}'`,
        function (err, results) {
          if (err) throw err;
          // res.json(results);
          if (results.length == 0) {
            console.log("where marks havent been added");
            values = [row.index_number, row.marks, data.assignment_id];
            console.log(values);
            connection.query(sql, [values], function (err) {
              if (err) throw err;
              res.json(results);
              // connection.end();
            });
          }
        }
      );

      // connection.query(`SELECT * FROM marks_assignment WHERE index_number = '${row.index_number}' AND marks!='${row.marks}'`,
      // function (err,results){
      //   if(err) throw err;
      //   if(results.length > 0){
      connection.query(
        `UPDATE marks_assignment SET marks=${row.marks} WHERE marks!='${row.marks}' AND index_number=${row.index_number}`,
        function (err, results) {
          if (err) throw err;
          res.json(results);
        }
      );
      //   }
      // }

      // );
    }

    // await connection.query(
    //   `INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (${row.index_number},${row.marks},${data.assignment_id})`,
    //   function (error, results, fields) {
    //     if (error) throw error;

    //     res.json(results);\

    //     connection.end();
    //   })
  );

  // connection.query(sql,[values],function(err){
  //   if(err) throw err;
  //   // connection.end();
  // })
  console.log("Hi");
  console.log(values);
});

const getAssignMarks = asyncHandler(async (req, res) => {
  // const data = req.body;
  console.log("HI");
  const assignment_id = req.params.id;
  var values = [];
  var sql =
    `SELECT user.f_name,user.l_name,marks_assignment.* FROM user,student,marks_assignment WHERE marks_assignment.index_number = student.index_no AND student.user_id = user.user_id AND marks_assignment.assignment_id = "${assignment_id}"`;

    connection.query(sql,function(err,results){
    if(err) throw err;
    res.json(results);
    
  })
  // await connection.query(
  //   `INSERT INTO marks_assignment(index_number,marks,assignment_id) VALUES (${row.index_number},${row.marks},${data.assignment_id})`,
  //   function (error, results, fields) {
  //     if (error) throw error;

  //     res.json(results);\

  //     connection.end();
  //   })

  // connection.query(sql,[values],function(err){
  //   if(err) throw err;
  //   // connection.end();
  // })
});


module.exports = {
  getCourses,
  getAssign,
  getUndergraduates,
  getResult,
  assignAdd,
  assignMarkAdd,
  getAssignMarks,
};

